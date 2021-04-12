import React from 'react'
import IconSocial from './components/IconSocial/IconSocial'
import Infor from './components/Infor/Infor'
import InforLanguage from './components/InforLanguage/InforLanguage'
import ListItem from './components/ListItem/ListItem'
import { Link } from 'react-router-dom'

export default function Header() {
    const home = [
        {
            id: 1,
            title: "Default",
        },
        {
            id: 2,
            title: "Classic",
        },
        {
            id: 3,
            title: "Fashion",
        },
        {
            id: 4,
            title: "Boxed",
        },
        {
            id: 5,
            title: "Simple",
        },
        {
            id: 6,
            title: "Asymmetric",
        },
        {
            id: 7,
            title: "Sidenav",
        },
        {
            id: 8,
            title: "Landing",
        },
    ]

    return (
        <>
            <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    {/* Promo */}
                    <div className="mr-xl-8">
                        <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
                    </div>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="topbarCollapse">
                        {/* Nav */}
                        <InforLanguage />
                        {/* Nav */}
                        <Infor />
                        {/* Nav */}
                        <IconSocial />
                    </div>
                </div>
            </div>

        </>
    )
}
