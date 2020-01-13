import React, {useState, useEffect} from "react"
import Character from "./Character"
import axios from "axios"
import {charImgs} from "../data"
import ButtonBox from "./ButtonBox"

function CharacterList(){

    const [characters, setCharacters] = useState([])
    const [pageCount, setPageCount] = useState(1)

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?page=${pageCount}`)
            .then(res => {
                setCharacters(res.data.results)
            })
            .catch(err => {
                console.log(`Oops! We were unable to retrieve your characters! `, err)
            })
        
    }, [pageCount])

    console.log(characters)

    function handleNextClick() {
        setPageCount(prevCount => {
            if (prevCount === 9) {
                return 1
            } else {
                return prevCount + 1
            }
        })
    }

    function handlePrevClick() {
        setPageCount(prevCount => {
            if (prevCount === 1) {
                return 9
            } else {
                return prevCount - 1
            }
        })
    }


    return (
        <div>
            <ButtonBox  next={handleNextClick} prev={handlePrevClick}/>
            {characters.map((character, index) => <Character key={index + 1} character={character} img={charImgs[character.name]}/>)}
            <ButtonBox  next={handleNextClick} prev={handlePrevClick}/>
        </div>
    )
}

export default CharacterList