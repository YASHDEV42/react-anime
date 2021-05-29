import React from 'react'
import SingleAnime from '../components/anime/SingleAnime'
const AnimePage = (props) => {
    return (
        <>
        <SingleAnime {...props}/>
        <h1>you are in anime page</h1>
        </>
    )
}

export default AnimePage
