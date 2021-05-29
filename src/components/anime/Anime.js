import React, { Component } from 'react'
import "./Anime.css"
import {Link} from 'react-router-dom'
class Anime extends Component {
    render(){
    return (
        
            <div className="anime">
                <div className="poster">
                    <img src={this.props.anime.img} alt=""/>
                </div>
                <div className="info">
                    <h2>{this.props.anime.name}</h2>
                    <span>#{this.props.anime.rank}</span>
                    <br/>
                    {/*<button onClick={() => this.props.openModel(this.props.anime)}><a>more info</a></button>*/}
                    <button className="my-btn"><Link to={{
                    pathname:"/anime/" + this.props.anime.id,
                    hash:"#star",
                    search:"?page=1&sort=top",
                    state:this.props.animes,
                    }}>
                    more info</Link></button>
                </div>
            </div>
    )
}
}

export default Anime