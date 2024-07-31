import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { fetchRegister } from '../features/store/registerSlice';
import { SocialDispatch } from '../features';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";

function Register() {
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [isEmpty,setIsEmpty] = useState(false);
  const dispatch: SocialDispatch = useDispatch();
  

  const register = ()=>{
    if(username === '' || password === '' || rePassword === '' || email === ''){
        setIsEmpty(true);
    }
    else{
        setIsEmpty(false);
    dispatch(fetchRegister({
      username,password,rePassword,email
    })).then(data=>{
      if(data.payload.code===300){
        Swal.fire({
            title: "Hata",
            text: data.payload.message,
            icon: "error"
          });
    }else if(data.payload.code===400){
      Swal.fire({
        title: "Hata",
        text: data.payload.message,
        icon: "error"
      });
    }else{
      Swal.fire({
        title: "Kayıt Başarılı",
        icon: "success"
      });
    }
    })
}
}

    
  return (
    <>
    <div className="container">
        <div className="row justify-content-center mt-5">            
            <div className="col-4">
              <div className='mb-5 text-center'>
                <h1>Register Page</h1>
              </div>
                {
                    isEmpty ?
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Uyarı</h4>                            
                        <hr />
                        <p className="mb-0">Kullanıcı adı, Şifre ve email boş geçilemez</p>
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
                <div className="mb-3">
                    <label htmlFor="repassword" className="form-label">rePassword</label>
                    <input onChange={evt=>setRePassword(evt.target.value)} type="password" className="form-control" id="repassword" placeholder="repassword" />
                    
                    {
                      password !== rePassword 
                      ? <div className="text-danger mt-1"> * Şifreler uyuşmuyor.</div>
                      : null
                    }
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input onChange={evt=>setEmail(evt.target.value)} type="email" className="form-control" placeholder='email'/>
                </div>
                

                <div className="mb-3 d-grid">
                    <input onClick={register} type="button" value="Register" className="btn btn-success" />    
                </div>   
               
                <div className="mb-3 text-center d-grid">
                  <NavLink className="btn btn-outline-warning" to={'/login'}>login</NavLink>
                </div>                     
            </div>
        </div>
    </div>
    </>
  )
}

export default Register