import React, { useState } from 'react'
import { addRoom } from '../utils/ApiFunctions'
import RoomTypeSelector from '../commom/RoomTypeSelector'
import { Link } from 'react-router-dom'



export const AddRoom = () => {
    const[newRoom,setNewRoom] = useState({
        photo : null,
        roomType : "",
        roomPrice : "",
    })

    const[imagePreview,setImagePreview] = useState("")
    const[successMessage,setSuccessMessage] = useState("")
    const[errorMessage,setErrorMessage] = useState("")

    const handleRoomInputChange = (e) => {
        setSuccessMessage('');
        setErrorMessage('');
            const name = e.target.name
            let value = e.target.value
            if(name === 'roomPrice'){
                if(!isNaN(value))
               value = parseInt(value)
               else{
                value=""
                 }
            }
            
        setNewRoom({...newRoom,[name]:value})
     }
    const handleImageChange = (e) => {
        setSuccessMessage('');
    setErrorMessage('');
        const selectedImage = e.target.files[0]
        setNewRoom({...newRoom,photo:selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const success = await addRoom(newRoom.photo,newRoom.roomType,newRoom.roomPrice)
            
            if(success!== undefined){
                console.log("hi")
                setSuccessMessage("A new room was added to the database.")
                setNewRoom({photo:null,roomType:"",roomPrice:""})
                setImagePreview("")
                setErrorMessage("")
            }
            else{
                
                setErrorMessage("Error adding room.")
            }
        }
        catch(error){
            setErrorMessage(error.message)
        }
    }

   return (
   <>
    <section className="container, mt-5 mb5">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <h2 className="mt-5 mb-2">
                    Add A New Room
                </h2>
        {/* Render success message */}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        {/* Render error message */}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="roomType" className="form-lable">
                            Room Type
                        </label>
                        <div>
                            <RoomTypeSelector handleRoomInputChange={handleRoomInputChange} newRoom={newRoom}></RoomTypeSelector>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-lable">
                            Room Price
                        </label>
                        <input className="form-control" required id="roomPrice" name="roomPrice" type="number"
                        onChange={handleRoomInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="photo" className="form-lable">
                            Room Photo
                        </label>
                        <input id="photo"
                        name="photo" type="file"
                        className="form-control"
                        onChange={handleImageChange}/>
                        {imagePreview && (
                            <img src={imagePreview} alt="Preview Room Photo"
                            style={{maxWidth:"400px",maxHeight:"400px"}}
                            className="mb-3"/>
                        )}
                    </div>
                    <div className="d-grid d-flex mt-2">
                        <Link to={"/existing-rooms"} className="btn btn-outline-info">
                            Back
                        </Link>
                        <button className="btn btn-outline-primary ml-5" onClick={handleSubmit}>
                            Save Room
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
   </>
  )
}
export default AddRoom