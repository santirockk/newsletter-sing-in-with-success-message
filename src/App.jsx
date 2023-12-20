import { useState, useEffect } from 'react'
import { SignUpMobile } from './components/singup_mobile/mobile';
import { SuccessMobile } from './components/successMobile/successMobile';
import { Singup } from './components/singup/singup';
import './App.css';

function App() {
const [success, setSuccess] = useState(false); 
const [isMobile, setIsMobile] = useState(false);
const [error, setError] = useState('');
const [email, setEmail] = useState('ash@loremcompany.com');
const [inputVariant, setInputVariant] = useState()


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

useEffect(() => {
  if (window.innerWidth < 1007) {
    setIsMobile(true);
  }
}, [])


const onSubmit = evt => {
  evt.preventDefault();
  if (emailRegex.test(evt.currentTarget.elements.email.value)) {
    setEmail(evt.currentTarget.elements.email.value);
    setSuccess(true);
  } else {
    setError("Valid email required")
    setInputVariant("form__input_v")
  }
}

const onClickSuccess = evt => {
  setError("")
  setInputVariant()
  setSuccess(false);
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1007) {
    setIsMobile(false);
  } else {
    setIsMobile(true);
  }
} )

  return (
    <>
      { !success && isMobile && (
        <SignUpMobile 
          onSubmit={onSubmit} 
          error={error}
          inputVariant={inputVariant}
      />
      )}
        { !success && !isMobile && (
        <Singup 
          onSubmit={onSubmit}
          error={error}
          inputVariant={inputVariant}
        />
      )}
      { success && (
        <SuccessMobile 
          onClick={onClickSuccess} 
          email={email}
        />
      )}
    
    </>
  )
}

export default App
