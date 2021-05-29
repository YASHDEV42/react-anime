import React, { Component } from 'react'
import './SingleAnime.css'
export class SingleAnime extends Component {
    state = {
        singleAnime:[],
    }
    componentDidMount(){

        if(this.props.match.params.id && this.props.location.state){

        let paramsId = this.props.match.params.id;

        this.props.location.state.map(item => {
            
                if(paramsId == item.id){
                    const singleAnimes = [...this.state.singleAnime];

                    singleAnimes.push(item)

                    this.setState({
                        singleAnime:singleAnimes[0]
                    })
                }
            
        });}    

}

    render() {

        return (
            <>
            <div className="anime-page">
                <div className="container">            
                <h1>{this.state.singleAnime.name}</h1>
                    <div className="anime-container">

                        <div className="poster">
                            <img src={this.state.singleAnime.img} alt={this.state.singleAnime.name} />
                        </div>

                        <div className="info">
                            <h2>story :</h2>
                            <p>{this.state.singleAnime.story}</p>
                            <br />

                            <div className="score-box">
                            <h4>rank : <span>{this.state.singleAnime.rank}</span></h4>
                            <h4>score : <span>{this.state.singleAnime.score}</span></h4>
                            <h4>season : <span>{this.state.singleAnime.season}</span></h4>
                            <h4>episodes : <span>{this.state.singleAnime.episodes}</span></h4>
                            <h4>genres : <span>{this.state.singleAnime.genres}</span></h4>
                            </div>
                            <button className="my-btn"><a target="_blank" href={this.state.singleAnime.link}>more info</a></button>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="anime-page">
                <div className="container">
                    <div className="trailer-container">

                        <div className="youtube">
                            <h1>trailer :</h1>
                            <iframe src={this.state.singleAnime.youtube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
            
        
    };
}


export default SingleAnime
