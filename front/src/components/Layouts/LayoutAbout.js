import React from 'react'
import Headerabout from '../About/Headerabout/Headerabout'
import Featuresabout from '../About/Featuresabout/Featuresabout'
import Downloadabout from '../About/Downloadabout/Downloadabout'
import Subscribeabout from '../About/Subscribeabout/Subscribeabout'
import Faq from '../About/Faq/Faq'


function LayoutAbout({children}) {
    return (
      <> 
      <div>
          <Headerabout/>
          <Featuresabout data-aos="fade-up" />
          <Downloadabout/>
          <Subscribeabout/>
          <Faq/>
      </div>
      <main>{children}</main>
      </>
    )
  }
  
  export default LayoutAbout