import { useState } from "react";
import { SocialDispatch } from "../features";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../features/store/loginSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const dispatch: SocialDispatch = useDispatch();
    const navigate = useNavigate();

    
    const login = ()=>{
        if(username === '' || password === ''){
            setIsEmpty(true);
        }else {
            setIsEmpty(false);
            dispatch(fetchLogin({
              username,password
            })).then(data=>{
                if(data.payload.code===200){
                    navigate('/home');
                    
                }
                if(data.payload.code===400){
                    Swal.fire({
                        title: "Hata",
                        text: data.payload.message,
                        icon: "error"
                      });
                }
                
            })
        }
    };
    return(
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-4">
                    <div className='mb-5 text-center'>
                <h1>Login Page</h1>
              </div>
                        {
                            isEmpty ?
                            <div className="alert alert-warning" role="alert">
                                <h4 className="alert-heading">Uyarı</h4>                            
                                <hr />
                                <p className="mb-0">Kullanıcı adı ve Şifre boş geçilemez</p>
                            </div>
                            : null
                        }
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input onChange={evt=>setUsername(evt.target.value)} type="text" className="form-control" id="username" placeholder="username" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={evt=>setPassword(evt.target.value)} type="password" className="form-control" id="password" placeholder="password" />
                        </div>
                        <div className="mb-3 d-grid">
                            <input onClick={login} type="button" value="Login" className="btn btn-success" />    
                        </div>   
                        <div className="mb-3 text-center d-grid">
                            <a className="btn btn-outline-warning" href="/register">register</a>
                        </div>                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;