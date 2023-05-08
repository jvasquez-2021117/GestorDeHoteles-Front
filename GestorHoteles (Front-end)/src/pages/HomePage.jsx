import React from 'react'
import { OptionHome } from '../components/OptionHome'
import { Sidebar } from '../components/Sidebar'

export const HomePage = () => {
    return (
        <>
            <div class="container t">
                <div class="row flex-lg-nowrap">
                    <div class="col-12 col-lg-3 mb-3" >
                        <div class="card">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col mb-3">
                                <OptionHome />
                                <OptionHome />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
