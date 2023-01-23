import styled from "styled-components";
import { IoExitOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1.5625rem;
    padding-bottom: 1rem;
    width: 20.375rem;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 1.625rem;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 1.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: default;
`

export const Registers = styled.div`
    background-color: #ffffff;
    height: 27.875rem;
    width: 100%;
    border-radius: 5px;
    cursor: default;
`

export const InAndOutBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.8125rem;
`

export const InAndOut = styled.div`
    width: 9.6875rem;
    height: 7.125rem;
    background-color: #A328D6;
    color: #ffffff;
    font-size: 1.0625rem;
    font-weight: bold;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    cursor: pointer;
    padding-left: 0.6rem;
`

export const ExitOutline = styled(IoExitOutline)`
    font-size: 1.5rem;
    cursor: pointer;
`

export const AddIcon = styled(IoAddCircleOutline)`
    font-size: 1.5625rem;
`

export const RemoveIcon = styled(IoRemoveCircleOutline)`
    font-size: 1.5625rem;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`