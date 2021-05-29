import React from 'react'
import { Component } from 'react'
import {Link} from 'react-router-dom' 
import Allanime from '../img/all-anime.jpg'
import './Home.css'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'

class Home extends Component {


    scrollyHandler = ()=> {
        window.scroll({
            top: window.scrollY + 937,
            behavior: "smooth"
        });
        console.log(window.scrollY)
    }
    reversScrollyHandler = ()=> {
        window.scroll({
            top: window.scrollY - 937,
            behavior: "smooth"
        });
        console.log(window.scrollY)
    }
    render() {
        
        return (
            <>
            <div className="head">
                <div className="Mcontainer">


                        <h1>my anime world</h1>
                        <p>
                            i don't know what should i write here but if you want see my anime collecting welcome here
                        </p>
                        <Link className="my-btn" to="/animeList">Get Started</Link>
                        <button className="down" onClick={this.scrollyHandler}><AiOutlineArrowDown size="2.5em" /></button>
                        <button className="up" onClick={this.reversScrollyHandler}><AiOutlineArrowUp size='2.5em' /></button>


                </div>
            </div>
            <div className="about" id="#about">
                
                <div className="Mcontainer">
                    
                    <div className="poster">
                        <img src={Allanime} alt="" />
                    </div>
                    <div className="info">
                    <h1>about anime</h1>
                        <p>Anime (Japanese: アニメ, IPA: [aɲime]) is hand-drawn and computer animation originating from Japan. In Japan and in Japanese, anime (a term derived from the English word animation) describes all animated works, regardless of style or origin. However, outside of Japan and in English, anime is colloquial for Japanese animation and refers specifically to animation produced in Japan.[1] Animation produced outside of Japan with similar style to Japanese animation is referred to as anime-influenced animation.</p>
                        <br />
                        <p>The earliest commercial Japanese animations date to 1917. A characteristic art style emerged in the 1960s with the works of cartoonist Osamu Tezuka and spread in following decades, developing a large domestic audience. Anime is distributed theatrically, through television broadcasts, directly to home media, and over the Internet. In addition to original works, anime are often adaptations of Japanese comics (manga), light novels, or video games. It is classified into numerous genres targeting various broad and niche audiences.</p>
                        <button className="my-btn"><a target="_blank" href="https://en.wikipedia.org/wiki/Anime">more info</a></button>
                    </div>
                </div>
            </div>

            <div className="test">
                <div className="Mcontainer">
                    <h1>test</h1>
                </div>
            </div>
            <div className="test">
                <div className="Mcontainer">
                    <h1>test</h1>
                </div>
            </div>

            </>
        )
    }
}
    

export default Home
