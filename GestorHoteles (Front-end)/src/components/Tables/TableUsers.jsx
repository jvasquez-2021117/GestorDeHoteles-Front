import React from 'react'

export const TableUsers = () => {
    return (
        <>
            <section className="intro">
                <div className="bg-image h-100" style={{backgroundColor: '#f5f7fa'}}> {/* background: #f5f7fa; */}
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: '700px'}}>
                                                <table className="table table-striped ">
                                                    <thead style={{backgroundColor: '#8c7c62'}}>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Surname</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Role</th>
                                                            <th scope="col">Spots</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Like a butterfly</td>
                                                            <td>Boxing</td>
                                                            <td>9:00 AM - 11:00 AM</td>
                                                            <td>Aaron Chapman</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mind &amp; Body</td>
                                                            <td>Yoga</td>
                                                            <td>8:00 AM - 9:00 AM</td>
                                                            <td>Adam Stewart</td>
                                                            <td>15</td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
