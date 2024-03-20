import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRoomById, updateRoom } from '../utils/ApiFunctions'
import { useState } from 'react'
import RoomTypeSelector from '../commom/RoomTypeSelector'

const EditRoom = () => {
    const[room,setRoom] = useState({
        photo : null,
        roomType : "",
        roomPrice : "",
    })

    const[imagePreview,setImagePreview] = useState("")
    const[successMessage,setSuccessMessage] = useState("")
    const[errorMessage,setErrorMessage] = useState("")

    const {roomId} = useParams()
    useEffect(() => {
        const fetchRoom = async () => {
            try{
                const roomData = await getRoomById(roomId)
                setRoom(roomData)
                setImagePreview(roomData.photo)
            }
            catch(error){
                console.error(error.message)
            }
        };
        fetchRoom();
    },[roomId]
    )
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const reponse = await updateRoom(roomId,room)
            if(reponse.status === 200){
                setSuccessMessage("Room updated successfully")
                const updatedRoomData = await getRoomById(roomId)
                setRoom(updatedRoomData)
                setImagePreview(updatedRoomData.photo)
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

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setRoom({...room,photo:selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }
    const handleRoomInputChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if(name === 'roomPrice'){
            if(!isNaN(value))
           value = parseInt(value)
           else{
            value=""
             }
        }
        
    setRoom({...room,[name]:value})
 }
 return (
    <>
     <section className="container, mt-5 mb5">
         <div className="row justify-content-center">
             <div className="col-md-8 col-lg-6">
                 <h2 className="mt-5 mb-2">
                     Add A New Room
                 </h2>
                 <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                         <label htmlFor="roomType" className="form-lable">
                             Room Type
                         </label>
                         <div>
                             <RoomTypeSelector handleRoomInputChange={handleRoomInputChange} newRoom={room}></RoomTypeSelector>
                         </div>
                     </div>
                     <div className="mb-3">
                         <label htmlFor="roomPrice" className="form-lable">
                             Room Price
                         </label>
                         <input className="form-control" required id="roomPrice" name="roomPrice" type="number"
                         onChange={handleRoomInputChange} value={room.roomPrice}/>
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
                        <Link to={"/existing-rooms"} className="btn btn-outlint-info ml-5">
                            Back
                        </Link>
                         <button className="btn btn-outline-primary ml-5" onClick={handleSubmit}>
                             Edit Room
                         </button>
                     </div>
                 </form>
             </div>
         </div>
     </section>
    </>
   )
}

export default EditRoom