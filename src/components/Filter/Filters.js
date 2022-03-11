import React from 'react'
import Filter from './Filter'


const Filters = () => {
  return (
    <div className="borderedContainer">
        <b>Choose Category: </b>
        {['Fruit', 'Vegetable','All']
        .map(category => <Filter 
        category={category} 
        isActive={false}
        
        />)
        
    }
    </div>
  )
}

export default Filters;