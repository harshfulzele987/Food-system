import { Color } from 'ag-grid-community'
import React from 'react'


var stylingObject = {
    div: {
        position:"relative",
        left:"27rem",
        margin:"1rem",
    },
    h3:{
        Color:"#030733"
    }
  }
  
export const Home = () => {
    return (
        <div>
            <div style={stylingObject.div}>
             <h2> Welcome To Food Ordering System</h2>
             <h4>Please Register/Login to Food Ordering</h4>
             
            </div>
            
        </div>
    )
}
