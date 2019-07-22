import React, { Component } from 'react';
import menu from '../data/menu.json'

class Test extends Component {
render () {
    return(
        <div>
        {menu.breakfast.map((item,index)=>{
            return(item.item)
        })}

        </div>
    )
    }
}
    


export default Test

