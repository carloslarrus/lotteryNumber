import Number from './components/Number'
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
  const [resourceType, setResourceType] = useState('')
  const [items, setItems] =useState([])
  useEffect(() =>{
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    // .then(res => res.json())
    // .then(json => setItems(json))
   console.log('resource changed')
    return() => {
      console.log('return from resource change')
    }
  }, [resourceType])
  return (
    <div className="App">
      <h1>Simulation of a Lottery</h1>
      <div>
      <button onClick= {() => setResourceType('posts')}>Posts</button>
      <button onClick = {() => setResourceType('users')}>Users</button>
      <button onClick = {() => setResourceType('comments')}>Comments</button>
      </div>
       <h2>{resourceType}</h2>
       {/* {items.map(item => {
         return(
           <div>{JSON.stringify(item)}</div>
         )
       })} */}

    </div>
  
  );
}

export default App;