import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 9.94rem;
    width: 20.375rem;
    flex-direction: column;
`

export const Title = styled.h1`
    font-family: 'Saira Stencil One', sans-serif;
    font-size: 2rem;
    cursor: default;
    color: #ffffff;
    margin-bottom: 1.5rem;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Input = styled.input`
    width: 100%;
    height: 3.625rem;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px transparent;
    margin-bottom: 0.8125rem;
    padding-left: 1rem;
    font-size: 1.25rem;
    outline: none;
    ::placeholder {
        font-size: 1.25rem;
        color: #000000;
    }
`
export const Button = styled.button`
    background-color: #A328D6;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: bold;
    width: 100%;
    height: 2.875rem;
    border-radius: 5px;
    border: 1px transparent;
    cursor: pointer;
`

export const StyledLink = styled(Link)`
    font-size: 0.9375rem;
    color: #ffffff;
    font-weight: bold;
    margin-top: 2.25rem;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
`