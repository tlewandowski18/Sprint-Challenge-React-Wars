import React from "react"
import styled from "styled-components"

const CharBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 4px solid sienna;
    width: 90%;
    background-color: beige;
    margin: 2% auto;
    border-radius: 20px
`

const ImgBox = styled.div`
    padding: 20px 10px;
    width: 40%;
`
const TextBox = styled.div`

    flex-wrap: wrap;
    width: 57%;
    padding: 20px 10px;
`

const Img = styled.img`
    border-radius: 20px;
    width: 70%;
`

const Text = styled.p`
    text-align: left;
    padding: 0;
    font-size: 20px;
`


function Character(props) {
    return (
        <CharBox>
            <ImgBox>
                <Img src={props.img} alt={props.character.name} />
            </ImgBox>
            <TextBox>
                <Text>Name: {props.character.name}</Text>
                <Text>Height: {props.character.height}cm</Text>
                <Text>Weight: {props.character.mass}kgs</Text>
                <Text>Hair Color: {props.character.hair_color}</Text>
                <Text>Eye Color: {props.character.eye_color}</Text>
                <Text>Birth Year: {props.character.birth_year}</Text>
            </TextBox>
        </CharBox>
    )

}

export default Character