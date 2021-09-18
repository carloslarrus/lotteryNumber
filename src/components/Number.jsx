import React, {useState} from 'react'

function Number() {
    const [random, setRandom] = useState('')
    const [serial, setSerial] = useState('')
 
    function lottoNumber(){
        let randomSerial = Math.floor(Math.random()*9)
        setSerial(randomSerial) 
        for(let i =0 ; i < 5; i++){
            let randomNumber = Math.floor(Math.random()*(99))
            return <div className="display">{() => {setRandom(randomNumber)}}</div>
        }
    }
    function reset(){
        setRandom("")
        setSerial("")
    }
    return (
        <div className='container'>
            <div className='buttons'>
            <div className='button' onClick={lottoNumber}>Buy it</div>
            <div className="button" onClick={reset}>Reset</div>
            </div>
            <div className='number'>
            {random}
            <div className="serial">{serial}</div>
            </div>
            
        </div>
    )
}

export default Number
