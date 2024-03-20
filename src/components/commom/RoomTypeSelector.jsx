import React, { useEffect, useState } from 'react';
import { getRoomTypes } from "../utils/ApiFunctions.js";




const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
    const [roomTypes, setRoomTypes] = useState([]);
    const [showNewRoomTypeInput, setShowRoomTypeInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data);
        });
    }, []);

    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);
    };

    const handleAddNewRoomType = () => {
        if (newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType]);
            setNewRoomType("");
            setShowRoomTypeInput(false);
        }
    };

    return (
        <div>
            {roomTypes.length >= 0 && (
                <div>
                    <select
                        name="roomType"
                        id="roomType"
                        value={newRoom.roomType}
                        onChange={(e) => {
                            if (e.target.value === "Add New") {
                                setShowRoomTypeInput(true);
                                handleRoomInputChange(e);
                            } else {
                                handleRoomInputChange(e);
                                setShowRoomTypeInput(false);
                            }
                        }}
                        className='form-control'
                    >
                        <option value={""}>Select the room type</option>
                        <option value={"Add New"}>Add New</option>
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                    {showNewRoomTypeInput && (
                        <div className="input-group mt-3">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter a new room type"
                                value={newRoomType}
                                onChange={handleNewRoomTypeInputChange}
                            />
                            <button
                                className="button btn-hotel"
                                onClick={handleAddNewRoomType}
                            >
                                Add
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
    
};

export default RoomTypeSelector;
