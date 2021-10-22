import styled from 'styled-components'

// border-box documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
export const NormalInput = styled.input`
    border-radius: 4px;
    border: 2px solid green;
    font-family: "Helvetica";
    font-weight: bold;
    font-size: 24px;
    box-sizing: border-box;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid orange;
    box-sizing: border-box;
`

export const InputInRow = styled.div`
    display: flex;
    flex-direction: row;
`