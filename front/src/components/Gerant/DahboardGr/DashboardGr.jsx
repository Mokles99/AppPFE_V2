import React from 'react'

import Sidebaris from '../DahboardGr/Components/SideBar Section/Sidebaris'
import Bodyis from      '../DashboardGr/Components/Body Section/Bodyis'

const Dashboard = () => {



    return (
        <div className='dashboardgr flex'>
            <div className="dashboardContainer flex">
                <Sidebaris/>
                <Bodyis/>
            </div>

        </div>
    )
}

export default Dashboard 