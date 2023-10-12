import styled from 'styled-components'; 

export const Box = styled.div` 
background: white; 
width: 90%; 
margin: auto;
`; 

export const Container = styled.div` 
	width: 800px;
    margin: auto;

` 

export const Column = styled.div` 
text-align: center; 
`; 

export const Row = styled.div` 
display: grid; 
grid-template-columns: repeat(auto-fill, 
						minmax(185px, 1fr)); 
grid-gap: 20px; 
} 
`; 

export const FooterLink = styled.a` 
color: black; 
margin-bottom: 20px; 
font-size: 18px; 
text-decoration: none; 
&:hover { 
	color: #4d4dff; 
	transition: 200ms ease-in; 
} 
`; 

export const Heading = styled.p` 
font-size: 24px; 
font-weight: bold; 
`; 
