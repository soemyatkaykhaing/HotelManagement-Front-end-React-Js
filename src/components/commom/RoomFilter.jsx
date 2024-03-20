import React, { useState } from 'react';

const RoomFilter = ({ data, setFilteredData }) => { // Destructuring props here

    const [filter, setFilter] = useState("");

    const handleSelectChange = (e) => {
        const selectedRoomType = e.target.value;
        console.log("Selected Room Type:", selectedRoomType);
        setFilter(selectedRoomType);
        const filteredRooms = data.filter((room) =>
            room.roomType.toLowerCase().includes(selectedRoomType.toLowerCase())
        );
        console.log("Filtered Rooms:", filteredRooms);
        setFilteredData(filteredRooms);
    };

    const clearFilter = () => {
        setFilter("");
        setFilteredData(data);
    }

    const roomTypes = ["", ...new Set(data.map((room) => room.roomType))];

    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="room-type-filter">
                Filter rooms by Type
            </span>
            <select className="form-select" value={filter} onChange={handleSelectChange}>
                <option value={""}>Select a room type to filter....</option>
                {roomTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
            <button className="button btn-hotel" type="button" onClick={clearFilter}>Clear Filter</button>
        </div>
    );
}

export default RoomFilter;
