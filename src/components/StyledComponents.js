import styled from 'styled-components'

// border-box documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
export const NormalInput = styled.input`
    border-radius: 3px;
    border: 3px #eeeeee;
    padding 3px 20px;
    font-family: "Helvetica";
    font-weight: bold;
    font-size: 16px;
    box-sizing: border-box;
    background-color: #eeeeee;
    margin: 5px 5px 0px 0px;
    width: 200px;
    height: 50px;
`

export const TextArea = styled.textarea`
    border-radius: 3px;
    border: 3px #eeeeee;
    padding 10px 20px;
    font-family: "Helvetica";
    font-size: 14px;
    box-sizing: border-box;
    background-color: #eeeeee;
    margin: 5px 5px 0px 0px;
    width: 405px;
    height: 100px;
`

export const SubmitInput = styled(NormalInput)`
    background-color: #1976D2;
    color: #FAFAFA;
    width: 100px;
    font-weight: semibold;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: auto;
    border: 1px solid red;
    width: 600px;
`

export const InputInRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const StyledHeading = styled.div`
    width: 400px;
    margin: auto;
    font-size: 48px;
    font-weight: 600;
    font-smooth: auto;
    display: flex;
    justify-content: center;
`