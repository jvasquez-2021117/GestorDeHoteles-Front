import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Hotels } from '../Hotels/Hotels'

export const OptionHotels = () => {
    const [hotels, setHotels] = useState([{}])

    const getHotels = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/hotel/getHotel')
            setHotels(data.hotel)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getHotels, []);
    return (
        <>
            {
                hotels.map(({ _id, name, description, address, qualification, rooms }, index) => {
                    return (
                        <div key={index}>
                            <Hotels
                                name={name}
                                description={description}
                                address={address}
                                qualification={qualification}
                                rooms={rooms}
                            ></Hotels>
                        </div>
                    )
                })
            }
        </>
    )
}
