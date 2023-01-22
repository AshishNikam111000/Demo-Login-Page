import { useRef } from 'react';
import './App.scss';

import Image from './assest/Image.png'
import Google from './assest/Google.png'
import Facebook from './assest/Facebook.png'
import backImage from './assest/background.png'
import CautionImage from './assest/Error.svg'

function App() {
  const Inputdata1 = useRef(null)
  const Inputdata2 = useRef(null)
  const ErrorDiv1 = useRef(null)
  const ErrorDiv1Text = useRef(null)

  const ErrorDiv2 = useRef(null)
  const ErrorDiv2Text = useRef(null)

  function checkEmail() {
    if (Inputdata1.current.value === "") {
      ErrorDiv1.current.style.display = 'flex';
      ErrorDiv1Text.current.innerText = 'The email field is required';
    }
    else {
      ErrorDiv1.current.style.display = 'flex';
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(Inputdata1.current.value)) {
        ErrorDiv1Text.current.innerText = 'Invalid Email';
      }
      else {
        ErrorDiv1.current.style.display = 'none';
      }
    }
  }
  
  function checkPassword() {
    if (Inputdata2.current.value === "") {
      ErrorDiv2.current.style.display = 'flex';
      ErrorDiv2Text.current.innerText = 'The password field is required';
    }
    else {
      ErrorDiv1.current.style.display = 'flex';
      if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(Inputdata2.current.value)) {
        ErrorDiv2Text.current.innerText = 'Weak Password';
      }
      else {
        ErrorDiv2.current.style.display = 'none';
      }
    }
  }

  return (
    <div className="App w-screen h-screen drop-shadow-lg">
      <img className='Background' src={backImage} alt="BackgroundImage" />
      <center>
        <div className='Container bg-white pb-10'>
          <div className='Amazon p-3'>
            <img src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/00/92/0260aab44ee8a2faeafde18ee1da/amazon-logo-inverse.svg" alt="Amazon" />
          </div>
          <div className='Title p-3'>Login</div>
          <div className='p-3'>
            <img className='w-full' src={Image} alt="TreeImage" />
          </div>

          <div className='p-3'>
            <input ref={Inputdata1} className='InputField w-full h-5' type="email" name="Email" id="email" placeholder='Email' onChange={checkEmail} />
            <div ref={ErrorDiv1} className='Required flex gap-1 items-center'>
              <img src={CautionImage} alt="CautionImage" />
              <div ref={ErrorDiv1Text} className='text-left'>
                The email field is required
              </div>
            </div>
          </div>
          <div className='p-3'>
            <input ref={Inputdata2} className='InputField w-full h-5' type="password" name="Password" id="password" placeholder='Password' onChange={checkPassword} />
            <div ref={ErrorDiv2} className='Required flex gap-1 items-center'>
              <img src={CautionImage} alt="CautionImage" />
              <div ref={ErrorDiv2Text} className='text-left'>
                The password field is required
              </div>
            </div>
          </div>

          <div className='p-3'>
            <button className='SignInBtn rounded-full p-1'>Sign In</button>
          </div>
          <div className='flex justify-between p-3'>
            <button className='ForgotBtn'>Forgot Password?</button>
            <button className='SignUpBtn'>New User? Sign Up</button>
          </div>
          <div className='p-3'>or</div>
          <div className='Google flex justify-center items-center cursor-pointer p-1 mb-5'>
            <img src={Google} alt="GoogleIcon" />
            <div className='BtnText'>CONTINUE WITH GOOGLE</div>
          </div>
          <div className='Facebook flex justify-center items-center cursor-pointer p-1'>
            <img src={Facebook} alt="FacebookIcon" />
            <div className='BtnText'>CONTINUE WITH FACEBOOK</div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
