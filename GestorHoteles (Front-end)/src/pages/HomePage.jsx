import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { OptionHotels } from '../components/Options/OptionHotels'
import { useState } from 'react'

export const HomePage = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');

    const handleSearch = (name, address, qualification) => {
        setName(name);
        setAddress(address);
        setQualification(qualification)
    };

    return (
        <>
            <div className="container t">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-3 mb-3" >
                        <div className="card">
                            <Sidebar onSearch={handleSearch}></Sidebar>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <OptionHotels nameFilter={name} addressFilter={address} qualificationFilter={qualification} />
                                {/* <OptionHome />
                                <OptionHome /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
