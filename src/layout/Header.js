import React from 'react'

function Header() {
    return (
        <aside className="text-center">
            <a>
                <img src="/public/asset/covid_2019.png" style={{ width: '100%' }} />
            </a>
            <u className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <span className="font-weight-bold mr-2">Show Cases in World</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/india-covid-details">
                        <span className="font-weight-bold mr-2">Show Cases in India</span>
                        <img src="/public/asset/flag_india.png" style={{ width: '25px', height: '20px' }} />
                    </a>
                </li>
            </u>
        </aside>
    )
}

export default Header