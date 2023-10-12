import React from "react"; 
import { 
Box, 
Container, 
Row, 
Column, 
FooterLink, 
Heading, 
} from "./FooterStyles"; 

const Footer = () => { 
return ( 
	<Box> 
		<Container> 
			<Row> 
				<Column> 
					<FooterLink href="#">Instagram</FooterLink> 
				</Column> 
				<Column> 
					<FooterLink href="#">Facebook</FooterLink> 
				</Column> 
				<Column> 
					<FooterLink href="#">Twitter</FooterLink> 
				</Column> 
				<Column> 
					<FooterLink href="#">Linkedin</FooterLink> 
				</Column> 
			</Row> 
		</Container> 
	</Box> 
); 
}; 
export default Footer; 
