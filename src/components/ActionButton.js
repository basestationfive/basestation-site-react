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

/*

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
      //const dataList = result.items || [];
      //console.log('Data loaded successfully:', result);

        setData(result);
        
    } catch (error) {

  console.error('Error fetching data:', error);
}
};


  return (
    <div>
      <h1>List from Web Service</h1>
      <button onClick={fetchData}>Load List</button>
      <ul>
        {data.map((item) => (
          <li key={item.itemid}>{item.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActionButton;

*/

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #283593;
  }
`;

const ActionButton = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your web service
      const response = await fetch('https://rgmiwdihr4.execute-api.us-east-1.amazonaws.com/Staging');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      console.log('Data loaded successfully:', result);

      setData([...result.body]);

    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>List from Web Service</h1>
      <Button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Load List'}
      </Button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id}, <strong>Type:</strong> {item.type}, <strong>Value:</strong> {item.value}
            </li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ActionButton;
