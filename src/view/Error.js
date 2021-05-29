import React from 'react'
import { Component } from 'react'

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
        </div>
    )
    }
    
}

export default Error
