import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";

function Regidtrired() {
    const navigate = useNavigate();

    const [isSave, setSave] = useState(true);
    const [isNews, setNews] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [message, setMessage] = useState("");

    const submit = () => {
        setMessage("");
        if(name && email && password)
        {
            if(password === repassword)
            {
                AuthService.register("denis", "email", "password")
                .then((rez) => {
                    //navigate('/login', { replace: true })
                    setMessage(rez.data.accessToken);
                })
                .catch(err => console.log(err))   
            }
            else
            {
                setMessage({err:"Re Password not Valid"});
            } 
        }
        else
        {
            setMessage({err:"Empty input"});
        }
        
        
    }
    console.log(message);
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
                            <i className="feather icon-user-plus auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Sign up</h3>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" className="form-control" placeholder="re-password" onChange={(e) => setRepassword(e.target.value)}/>
                        </div>
                        {message.err ? <p className="mb-0 text" style={{color:"red"}}>{message.err}</p> : <p className="mb-0 text" style={{color:"green"}}>{message}</p>}
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">
                                <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-1" onChange={()=>setSave(!isSave)} checked={isSave}/>
                                <label htmlFor="checkbox-fill-1" className="cr"> Save Details</label>
                            </div>
                        </div>
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">
                                <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2" onChange={()=>setNews(!isNews)} checked={isNews}/>
                                <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                            </div>
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4" onClick={submit}>Sign up</button>
                        <p className="mb-0 text-muted">Allready have an account? <a href="/login"> Log in</a></p>
                    </div>
                </div>
            </div>
        </div>        
     );
}

export default Regidtrired;