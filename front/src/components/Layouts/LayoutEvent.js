import React from 'react'
import Discount from '../Discount/Discount'
import Evenement from '../Evenements/Evenement'
import Review from '../Review/Review'
import Cards from '../Cards/Cards'
import ListEvent from '../Evenements/ListeEvents/ListEvent'







function LayoutEvent({children}) {
  return (
    <> 
    <div>
        
        <Evenement/>
        <Cards/>
        <ListEvent/>
        <Discount/>
        <Review/>
    </div>
    <main>{children}</main>
    </>
  )
}

export default LayoutEvent