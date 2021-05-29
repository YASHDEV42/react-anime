import React from 'react'
import { Component } from 'react'

class  AddAnime  extends Component{

    addAnimeHandler = () => {
        this.props.history.push("/animeList")
    }
    render (){
        return (
        <div>
            <form>
                <label htmlFor="name">Name : </label>
                <input type="text" id='name' name='name' placeholder="name"/>
                <label htmlFor="score">Score : </label>
                <input type="text" id="score" name="score"/>

                <label htmlFor="episodes">Episodes : </label>
                <input type="text" id="episodes" name="episodes"/>

                <label htmlFor="seasons">seasons : </label>
                <input type="text" id="seasons" name="seasons"/>
                
                <label htmlFor="genres">genres : </label>
                <input type="text" id="genres" name="genres"/>

                <label htmlFor="trailer">trailer : </label>
                <input type="text" id="trailer" name="trailer"/>

                <label htmlFor="link">link : </label>
                <input type="text" id="link" name="link"/>

                <label htmlFor="story">story : </label>
                <textarea name="story" id="story" cols="30" rows="10"></textarea> 

            </form>
            <button onClick={this.addAnimeHandler}>add anime</button>
        </div>
    )}
    
}

export default AddAnime
