import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Rooms } from '../Rooms/Rooms'

export const OptionsRooms = () => {
    const [rooms, setRooms] = useState([{}])

    const getRooms = async()=>{
        try{
            const { data } = await axios.get('https://localhost:3200/room/get')
            setRooms(data.rooms)
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => getRooms, []);
    return (
    <>
    {
        rooms.map(({_id, name, noGuest, roomType}, index) => {
        <div key={index}>            
            <Rooms
            name={name}
            noGuest={noGuest}
            roomType={roomType}
            ></Rooms>
        </div>
        })
    }
    </>
  )
}
