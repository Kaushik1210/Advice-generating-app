
import React ,{useEffect,useState} from 'react'
import './App.css'
import image from './image'
import axios from 'axios'

const App = () => {
  const[advice,setAdvice]=useState(" ")

  const getAdvice = async()=>{
    const response=await axios.get("https://api.adviceslip.com/advice");
    const advice= await response.data.slip;
    setAdvice(advice)
  }

  useEffect(()=>{
    getAdvice()
  },[])

  return (
    <div>
      <div className="container">
        <div className="advice">
          <p>Advice #{advice.id}</p>
          <h1>"{advice.advice}"</h1>
          <img src={image.patterndividerdesktop} alt="desktop_divider" className='desktop_divider' />
          <img src={image.patterndividermobile} alt="mobile_divider" className='mobile_divider' />
          <div className='dice' onClick={getAdvice}> 
          <img src={image.icondice} alt="dice" />
          </div>
          

        </div>
        
      </div>
    </div>
    
  )
}

export default App

// git init
//   git add README.md
//   git commit -m "first commit"
//   git branch -M main
//   git remote add origin https://github.com/Kaushik1210/Advice-generating-app.git
//   git push -u origin main