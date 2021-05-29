import React from 'react'
import { Component } from 'react'
import {Link} from 'react-router-dom'

class Error  extends Component{
    componentDidMount(){
        this.props.history.replace("/404")
    }

    render () {
        return (
        <div>
            <h1 style={{

                'color' : "#fff",
                'margin': "40px auto",
                'textAlign':"center",
                
                }}>404 Not found</h1>
                <Link style={{
                    "display":"block",
                    "height":"40px",
                    "width":"180px",
                    "textAlign":'center',
                    "padding": "5px 20px",
                    "margin": "0 auto",
                    "background-color": "#0a8393",
                    "border": "2px solid #0a8393",
                    "letter-spacing": "1.5px",
                    "font-weight": "600",
                    "color": "#fff",
                }} to="/" className="nav-linky">Back Home</Link>
        </div>
    )
    }
    
}

export default Error
