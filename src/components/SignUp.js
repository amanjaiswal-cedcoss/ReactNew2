import {React,useEffect,useState} from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = "685977616318-hdtil5jrab9ph5bekirbspga1nb95gvj.apps.googleusercontent.com";

const SignUp = () => {
    useEffect(()=>{
        document.getElementById("inpEmail").focus()
    },[])

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

  return (
    <div id="signUpOuter">
    <div id="signUp">
        <img id="shopifyLogoImg" src="shopifyLogo.svg" alt="Shopify Logo"/>  
        <h1>Log In</h1>
        <h3>Continue to Shopify</h3>
        <label>Email</label>
        <input id="inpEmail"/>
        <button id="btnContinueEmail">Continue with Email</button>
        <p id="paraOr">or</p>
        <button className='btnContinueSocial'>Continue with Apple</button>
        <button className='btnContinueSocial'>Continue with Facebook</button>
        <GoogleLogin className='btnContinueSocial'
                    clientId={clientId}
                    buttonText="Continue with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}/>
        <div id="divNewStarted"><p>New to Shopify?</p><a>Get Started</a></div>
        <div id="signUpFooterLinks"><a>Help</a><a>Privacy</a><a>Terms</a></div>
    </div>
    </div>
  )
}

export default SignUp