import React from 'react'
import { OptionHome } from '../components/OptionHome'
import { Sidebar } from '../components/Sidebar'

export const HomePage = () => {
    return (
        <>
            <div className="container t">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3 w1">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col mb-5">
                                <OptionHome></OptionHome>
                                <OptionHome></OptionHome>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
