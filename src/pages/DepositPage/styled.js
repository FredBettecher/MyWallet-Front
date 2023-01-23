import styled from "styled-components";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20.375rem;
`

export const Title = styled.h1`
    color: #ffffff;
    font-size: 1.625rem;
    font-weight: bold;
    margin-top: 1.5625rem;
    margin-bottom: 2.5rem;
    cursor: default;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Back = styled(IoArrowBackCircleOutline)`
    font-size: 1.5625rem;
    cursor: pointer;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`