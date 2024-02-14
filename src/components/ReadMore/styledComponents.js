// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
display: flex;
flex-direction: column;

align-items: center;
height: 100vh;
padding: 30px;
background-color: #ffffff;
`

export const Heading = styled.h1`
font-family: 'Roboto';
font-size: 32px;
font-weight: bold;
color: #1e293b;
margin-bottom: 10px;`

export const Paragraph = styled.p`
font-family: 'Roboto';
font-size: 24px;
font-weight: 300;
color: #334155;
margin-bottom: 10px;`

export const Description = styled.p`
font-family: 'Roboto';
font-size: 20px;
font-weight: 300
color: #334155;
margin-bottom: 10px;
width: 82%;
margin-left: 10px;`

export const Image = styled.img`
height: 60%;
width: 80%;
margin-bottom: 10px;`

export const Button = styled.button`
font-family: 'Roboto';
font-size: 16px;
font-weight: 300;
border: none;
border-radius: 5px;
padding: 8px;
color: #ffffff;
background-color: #1f81ff;`
