import {FaGoogle} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

import "./style.css"

function LoginREPL(){
    return(
        <div id="page-login">
                <div className="page-container">

                    <header className="logo-header">
                            <img src="https://ucarecdn.com/bd010aad-4caf-4365-90d2-bbd0579f0415/" alt="" className="repl-logo"
                            />

                        <div className="log-in">
                            <h1>Log In</h1>
                        </div>
                    </header>

                    <main>
                        <div className="social-total">
                            <div className="social-midias-google"> <FaGoogle width="24px" height="24px"/> </div>
                            <div className="social-midias-git"> <FaGithub width="24px" height="24px"/> </div>
                            <div className="social-midias-facebook"> <FaFacebook width="24px" height="24px"/></div>
                        </div>

                        <form action="">
                            <input type="text" placeholder="email or username" className="input-field"/>
                            <input type="password" name="" id="" placeholder="password" className="input-field" />
                            <div className="forgot">
                                <a href="">Forgot Password?</a> or <a href="">sign up</a>
                            </div>
                            <button className="btn">Log in</button>
                        </form>
                    </main>

                    <footer>
                        <div className="footer">
                            <p>This site is protected by hCaptcha and its</p>
                            <a href="">Privacy Policy </a> and
                            <a href=""> Terms of Service</a> apply
                        </div>
                    </footer>
                </div>
        </div>
    )
}

export default LoginREPL