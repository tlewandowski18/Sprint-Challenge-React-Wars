import React from "react"

function Character(props) {
    return (
        <div>
            <div>
                <img src={props.img} alt={props.character.name} />
            </div>
            <div>

                <h2>Name: {props.character.name}</h2>
                <h2>Height: {props.character.height}cm</h2>
                <h2>Weight: {props.character.mass}kgs</h2>
                <h2>Hair Color: {props.character.hair_color}</h2>
                <h2>Eye Color: {props.character.eye_color}</h2>
                <h2>Birth Year: {props.character.birth_year}</h2>
            </div>
        </div>
    )

}

export default Character