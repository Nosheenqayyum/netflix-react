import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from "./firebaseConfig";


const Login =() =>{

const app = initializeApp(firebaseConfig);
const navigate = useNavigate();
const[email, SetEmail] = useState('');
const [password,setPassword] = useState('');
const [isUserExist, setUserExist] = useState(false);
const auth = getAuth();
// console.log(auth);
const onSignInClickHardler =(e) => {
e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
.then( auth => {
  if(auth){
    navigate('dashboard')
  }
})
.catch( error => setUserExist(true));
//user not found
  }

const emailOnChangeHandler = (e) => {
SetEmail(e.target.value)
}

    return(
        <div className="login">
          <div className="holder">
            <h1 className="text-white" onClick={onSignInClickHardler} >Sign In</h1>
            <br/>
            <form>
              <input 
                className="form-control" 
                value={email}
                onChange={emailOnChangeHandler}
                type="email" 
                placeholder="Email"/>
              
              <input 
                className="form-control"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                placeholder="Password"/>
              <button className="btn btn-danger btn-block" >
              Sign In
              </button>
              <br/>
             <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </form>
            <br/>
            <br/>
            { isUserExist &&  <p className="text-danger">User does not exist | Go for Signup</p>}
          
            <div className="login-form-other">
              <div className="login-signup-now">
             New to netflix? &nbsp;
                <a className=" " target="_self" href="/">
                 Sign up new
                </a>.
              </div>
            </div>
          </div>
          <div className="shadow"></div>
          <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
      )
    }
    
    export default Login;