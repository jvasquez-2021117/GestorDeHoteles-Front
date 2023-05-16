import React from 'react'
import room from '../assets/room.jpg'

export const GetRooms = ({ name, noGuest, price, roomType, availability }) => {
    return (
        <>
            <li className='list-group' style={{margin: '5%'}}>
                <div class="card">
                    <img src={room} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Q{price}</h6>
                        <p class="card-text">noGuest: {noGuest}</p>
                        <p class="card-text">roomType: {roomType}</p>
                        <blockquote class="blockquote mb-0">                            
                            <footer class="blockquote-footer">{availability}</footer>
                        </blockquote>
                    </div>
                </div>
            </li>
        </>
    )
}
