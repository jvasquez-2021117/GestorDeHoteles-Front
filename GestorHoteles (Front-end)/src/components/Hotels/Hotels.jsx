import React from 'react'

export const Hotels = ({name, description, address, qualification, rooms}) => {
    return (
        <>
        <div className="card mb-3">
                <div className="card-body ">
                    <div className="row g-10">
                        <div className="col-md-4">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/23/44/29/photo3jpg.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">{address}</p>
                            <p className="card-text">{rooms}</p>
                            <p className="card-text"><small className="text-muted">{qualification}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
