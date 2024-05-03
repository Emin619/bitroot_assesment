import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/container';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
      <div className="App">
        <div className="container-wrapper">
          <div className="row">
          {data.map(item => (
          <Container
            key={item.id}
            imageUrl={item.thumbnail.small}
            title={item.title}
            subtitle={item.content}
           
          />
        ))}
          </div>
          <div className="row">
          
          </div>
        </div>
      </div>
  );
}

export default App;
