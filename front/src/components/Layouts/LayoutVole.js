import React from 'react'

import Voleone from '../Vole/Voleone/Voleone'
import Voletwo from '../Vole/Voletwo/Voletwo'
import Volethree from '../Vole/Volethree/Volethree'
import Volefour from '../Vole/Volefour/Volefour'
import Volefive from '../Vole/Volefive/Volefive'
import Volesix from '../Vole/Volesix/Volesix'
import Voleseven from '../Vole/Voleseven/Voleseven'



function LayoutVole({children}) {
    return (
      <> 
      <div>
          <Voleone/>
          <Voletwo/>
          <Volethree/>
          <Volefour/>
          <Volefive/>
          <Volesix/>
          <Voleseven/>
      </div>
      <main>{children}</main>
      </>
    )
  }
  
  export default LayoutVole