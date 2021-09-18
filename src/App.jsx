import './App.css';
import React, { useState} from 'react'

function App() {

  // useStates
  // for the buy lottery number
  const [yourNumber, setYourNumber] =useState('')
  const [serial, setSerial] = useState([])
  const [random, setRandom] = useState([])
  const [numberReady, setNumberReady] = useState(null)

  // for the winning number
  const [winner, setWinner] =useState('')
  const [serialWinning, setSerialWinning] = useState([])
  const [randomWinning, setRandomWinning] = useState([])
  const [message, setMessage] = useState('')
  const [buyMessage, setBuyMessage] = useState('')

  // functions

  // buy Number
  let randomsBuy = []
  
  function lottoNumber (){ 
     setNumberReady(1)
     setYourNumber('Your number is the following :')

    if(random.length > 1){
      console.log('There is already a lottery number');
    } else{
      for(let i =0; i < 5 ; i++){
        let randomNumber = Math.floor(Math.random()*99)
        setRandom((prvState) => [...prvState, randomNumber]) 
        randomsBuy.push(randomNumber)
      }
      let randomSerial = Math.floor(Math.random()*9)
      setSerial((prvState) => [...prvState, randomSerial] )
      randomsBuy.push(randomSerial)
    }
    
  }

  // winning Number
  function winning (){
    if(numberReady){
      let randomsWinning=[]
    console.log(`randomsBuy.length : `, randomsBuy.length);
      if(randomsBuy.length == 0) {
       setBuyMessage('First, you have to buy a lottery number.')  
    }
    if(randomWinning.length > 1){
      console.log('There is already a winning number');
      setBuyMessage('')
    }  
     else {
      
       let buyNumber = random.concat(serial)
      for(let i =0; i < 5 ; i++){
        let randomNumber = Math.floor(Math.random()*99)
        setRandomWinning((prvState) => [...prvState, randomNumber]) 
        randomsWinning.push(randomNumber)
        
      }
      let randomSerial = Math.floor(Math.random()*9)
      setSerialWinning((prvState) => [...prvState, randomSerial] )
      randomsWinning.push(randomSerial)
         
      let winningMessage = `You won the lottery`
      let losingMessage = `Your number is not awarded. Next time, you will have more luck!!`
      if(JSON.stringify(randomsWinning) == JSON.stringify(buyNumber)){
        console.log('winning', randomsWinning);
        console.log('buyNumber',buyNumber);
        console.log(JSON.stringify(randomsWinning) == JSON.stringify(buyNumber));
        
        setWinner('The winner number is :')
        setMessage(winningMessage)
        setBuyMessage('')
      } else {
        setWinner('The winner number is :')
        console.log('winning', randomsWinning);
        console.log('buyNumber',buyNumber);
        setMessage(losingMessage)
        setBuyMessage('')
        console.log(JSON.stringify(randomsWinning) == JSON.stringify(buyNumber));
      }
    }

    } else{
      setBuyMessage('First, you have to buy a lottery number.') 
    }
     
    
  }

  // resetNumber
  function reset (){
    setSerial(() => [])
    setRandom(() => [])
    setSerialWinning(() => [])
    setRandomWinning(() => [])
    setYourNumber(() => '')
    setMessage(() => '')
    setWinner(() =>'')
    setBuyMessage(() => '')
    setNumberReady(null)

  }

  return (
    <div className="App">
      <h2>Lottery Number</h2>
     
        <div className="buttons">
      <div className='button' onClick ={lottoNumber}>Buy</div>
      <div className="button" onClick ={reset}>Reset</div>
      <div className="button" onClick ={winning}>Winning</div>
      </div>

      {/* beginning bought lottery number */}
      <div className='titleNumber'>
      {yourNumber}
      </div>
      
      <div className="number"> 
      {random.map( number => {
        return <div className='display'>{number}</div>
      })}
      {serial.map( number => {
        return <div className='serial'>{number}</div>
      })}
      </div>
       
      <div className="titleNumber">
        {winner}
      </div>
      <div className="number">
      {randomWinning.map( number => {
        return <div className='display'>{number}</div>
      })}
      {serialWinning.map( number => {
        return <div className='serial'>{number}</div>
      })}
      </div>
      <div>
        {message}
        {buyMessage}
      </div>

    </div>
  
  );
}

export default App;
