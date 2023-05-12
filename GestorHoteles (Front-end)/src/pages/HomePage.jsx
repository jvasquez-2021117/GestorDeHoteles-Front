import React from 'react'
import { OptionHome } from '../components/OptionHome'
import { Sidebar } from '../components/Sidebar'
import { OptionHotels } from '../components/Options/OptionHotels'

export const HomePage = () => {
    return (
        <>
            <div className="container t">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-3 mb-3" >
                        <div className="card">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <OptionHotels />
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
