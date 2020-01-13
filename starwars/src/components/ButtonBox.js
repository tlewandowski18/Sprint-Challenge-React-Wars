import React from "react"
import styled from "styled-components"

const Box = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    margin: 2% auto;
`
const Button = styled.button`
    padding: 10px 0;
    color: whitesmoke;
    background-color: brown;
    width: 100px;
    margin: 0 10px;
    border: 1px solid black;
    border-radius: 10px;
`

function ButtonBox(props){
    return (
        <Box>
            <Button>Previous</Button>
            <Button>Next</Button>
        </Box>
    )
}
export default ButtonBox