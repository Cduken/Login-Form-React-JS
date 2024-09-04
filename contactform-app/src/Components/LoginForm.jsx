/* eslint-disable react/no-unescaped-entities */
import './LoginForm.css'
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div>
        <div className='wrapper'>
            <div className="login-form">
                <form action="#">
                    <h1>Login</h1>

                    <div className="input-box">
                        <input type="text" name="Username" placeholder='Username' required/>
                        <FaUserAlt className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password" name="Password" placeholder='Password' required/>
                        <FaLock className='icon'/>
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Remember me</label>

                        <a href="#">Forgot password?</a>
                    </div>

                    <button type='submit'>Submit</button>

                    <div className="register-link">
                        <p>Don't have an account?<a href="#">Register</a></p>
                    </div>


                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
