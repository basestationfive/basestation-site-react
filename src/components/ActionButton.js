import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color: #3f51b5;
color:white;
padding: 5px 15px;
border-radius: 5px;
outline:0;
box-shadow: 0px 2px 2px lightgray;
cursor: pointer;
transition: ease background-color 250ms;
&: hover {
 background-color: #283593;

}
`

function clickMe() {
    fetch('https://rgmiwdihr4.execute-api.us-east-1.amazonaws.com/Staging', {
        //mode: 'no-cors',
        //headers: {
        //  'Access-Control-Allow-Origin':'*'
        //}
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log('Error:', error);
    }
    );



}

const ActionButton= () => {
	return (
	
		
            
			<div>

				<Button onClick={clickMe}>
					Action Button 
				</Button>

                <div>

                    
                </div>

			</div>
		
		
	);
};

export default ActionButton;
