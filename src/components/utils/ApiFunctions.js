import axios from "axios"

export const api = axios.create({
    baseURL :"http://localhost:8080"
}
)
/* This function add a new room to the database */

export async function addRoom(photo,roomType,roomPrice){
    const formData = new FormData()
    formData.append("photo",photo)
    formData.append("roomType",roomType)
    formData.append("roomPrice",roomPrice)
    const response = await api.post("/rooms/add/new-room",formData,)
    if(response.status == 200){
        return true;
    }
    else{
        return false;
    }
}
/* This function gets all room types from the database */
export async function getRoomTypes(){
    try{
        const response = await api.get("/rooms/room/types")
        return response.data
    }
    catch(error){
        throw new Error("Error fetching room types")
    }
}

/* This function gets all rooms from the database */
export async function getAllRooms(){
    try{
        const response = await api.get("/rooms/all-rooms")
        return response.data
    }
    catch(error){
        throw new Error("Error fetching rooms")
    }
}
/* This function delete a room by Id */

export async function deleteRoom(roomId){
    try{
        const result = await api.delete(`rooms/delete/room/${roomId}`)
        return result.data
    }
    catch(error){
        throw new Error("Error Deleting rooms ${error.message}")
    }
}
/* This function update a room data by Id*/
export async function updateRoom(roomId,roomData){
    const formData = new FormData()
    formData.append("roomType",roomData.roomType)
    formData.append("roomType",roomData.roomPrice)
    formData.append("roomType",roomData.photo)
    const response = await api.put(`/rooms/update/${roomId}',formData`)
    return response
}
/* This function gets a room by the id */
export async function getRoomById(roomId){
    try{
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data
    }
    catch(error){
        throw new Error('Error fetching room ${error.message}')
    }
}