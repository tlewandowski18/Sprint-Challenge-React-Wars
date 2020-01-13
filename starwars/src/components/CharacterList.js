import React, {useState, useEffect} from "react"
import Character from "./Character"
import axios from "axios"
import {charImgs} from "../data"

function CharacterList(){

    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/?page=1")
            .then(res => {
                setCharacters(res.data.results)
            })
            .catch(err => {
                console.log(`Oops! We were unable to retrieve your characters! `, err)
            })
        axios
            .get("https://swapi.co/api/planets/?page=1")
            .then(res => {
                setPlanets(res.data.results)
            })
            .catch(err => {
                console.log(`Oops! We were unable to retrieve your planets! `, err)
            })
    }, [])

    console.log(characters)

    return (
        <div>
            {characters.map((character, index) => <Character key={index + 1} character={character} img={charImgs[character.name]}/>)}
        </div>
    )
}

export default CharacterList