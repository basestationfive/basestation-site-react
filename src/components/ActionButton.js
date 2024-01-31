/*

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
const List = () => {
    const [data, setData] = useState([]);

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
                <div>
                    <Button onClick={clickMe}>
                        Action Button 
                    </Button>
                </div>

                <div>
                    <ul>
                    {data.map((item => (<li key={item.itemid}>{item.itemvalue}</li>))}
                    </ul>
                </div>

			</div>
		
		
	);
};

export default ActionButton;

  

*/

// src/List.js
import React, { useState, useEffect } from 'react';

const ActionButton = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your web service
      const response = await fetch('https://rgmiwdihr4.execute-api.us-east-1.amazonaws.com/Staging');
      const result = await response.json();
      console.log('Data loaded successfully:', result);
  
      // Assuming the data is nested inside an object property (e.g., 'items')
        const dataList = result.items || [];

        setData(dataList);
        console.log('Data loaded successfully:', dataList);
    } catch (error) {
        
  console.error('Error fetching data:', error);
}
};
  return (
    <div>
      <h1>List from Web Service</h1>
      <button onClick={fetchData}>Load List</button>
      <ul>
        {!data ? "No data received" : data.map((item) => (
          <li key={item.id}>{item.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActionButton;
