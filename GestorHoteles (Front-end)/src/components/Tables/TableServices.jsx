import React from 'react'

export const TableServices = ({ name, description, price }) => {
    return (
        <>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
        </>
    )
}
