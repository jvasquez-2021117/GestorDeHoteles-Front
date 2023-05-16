import React from 'react'

export const TableReservation = ({user, hotel, room, event, date}) => {
    return (
        <>
            <td>{user}</td>
            <td>{hotel}</td>
            <td>{room}</td>
            <td>{event}</td>
            <td>{date}</td>
        </>
    )
}
