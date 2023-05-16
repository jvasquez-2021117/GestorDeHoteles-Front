import React, { useEffect, useState } from 'react';
import room from '../../assets/room.jpg'
import axios from 'axios';
import { GetRooms } from '../../Rooms/GetRooms';

export const DropRoom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [rooms, setRoom] = useState([{}])

    const getRooms = async () => {
        try {
            const { data } = await axios('http://localhost:3200/room/get')
            setRoom(data.rooms)
        } catch (e) {
            console.log(e);
        }
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => getRooms, [])
    return (
        <div>
            <button onClick={toggleDropdown} className='btn btn-success'>Rooms</button>
            {isOpen && (
                <div className="contenedor">
                    <br />                    
                    <ul className='list-group list-group-horizontal lista-horizontal'>
                        {
                            rooms.map(({ _id, name, noGuest, price, roomType, availability }, index) => {
                                return (
                                    <div key={index}>
                                        <GetRooms
                                            name={name}
                                            noGuest={noGuest}
                                            price={price}
                                            roomType={roomType?.name}
                                            availability={availability}
                                        ></GetRooms>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};


