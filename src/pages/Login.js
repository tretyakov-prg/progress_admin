import { useState } from "react";

function Login() {
    const [inRemeber, setRemember] = useState(true);

    const butCheck = () => {
        setRemember(!inRemeber);
    }

    return ( 
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="auth-bg">
                    <span className="r"></span>
                    <span className="r s"></span>
                    <span className="r s"></span>
                    <span className="r"></span>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Login</h3>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" className="form-control" placeholder="password" />
                        </div>
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">
                                <input type="checkbox" onChange={butCheck} name="checkbox-fill-1" id="checkbox-fill-a1" checked={inRemeber}/>
                                <label htmlFor="checkbox-fill-a1" className="cr"> Save Details</label>
                            </div>
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4">Login</button>
                        <p className="mb-2 text-muted">Forgot password? <a href="/">Reset</a></p>
                        <p className="mb-0 text-muted">Don’t have an account? <a href="/singup">Signup</a></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;