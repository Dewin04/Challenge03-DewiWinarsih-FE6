import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
import img1 from  '../../assets/img/sign1.png'
import { Form } from 'react-bootstrap';
import icon from '../../assets/img/Rectangle 62.png'
import { Button } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] =useState (false)
  const [username, setUsername] = useState ("")
  const [password, setPassword] = useState ("")

  // const handleInput = (event) => {
  //   if (event.target.id === "email") {
  //     setUsername(event.target.value)
  //     console.log(event.target.value)
  //   } else if (event.target.id === "password") {
  //     setPassword(event.target.value)
  //   }
  // }

  const validasi = (username, password) => {
    let passwordCorrect = 123456
    let UsernameCorrect = "coba@gmail.com"

    if ( username === UsernameCorrect) {
      if (+password === passwordCorrect) {
        alert("next pages")
        return navigate('/Dashboard');
      }
      else {
        alert ("password salah !")
      } 
    }
    else {
      alert ("Username/Email SALAH")
    }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    validasi(username, password);
  };

  return (
  //   <div className='container-login'>
  //       <div className='img-1'>

  //       <div className='field-login'>
  //           <img src ={img1} />
  //           <h2 > Welcome, Admin BCR</h2>

  //           <div className='container'>
  //           <p>Email</p>
  //             <input type ="text" placeholder="contoh : johndee@gmail.com" name="uname" required></input>

  //           <p>Password</p>
  //             <input type ="password" placeholder="contoh :6+karakter" name="pass" required></input>
    
  //           <button type="submit">Sign In</button>
  //           </div>
  //         </div>
  //     </div>
  // </div>
    <div className="container-fluid px-0 full-body">
      <div className="row">
        <div className="col-8 px-0 full-body">
          <img className="w-100 full-body" src={img1} alt="" />
        </div>
        <div className="col-4">
          <div className="container full-body d-flex flex-column justify-content-center align-items-center">
            <Form onSubmit={handleSubmit}>
              <div className="d-flex flex-column gap-3">
                <img className="w-50" src={icon} alt=""/>
                <h4>Welcome, Admin BCR</h4>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="text"
                  name="username" 
                  placeholder="Contoh: johndee@gmail.com" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  name="password"
                  placeholder="6+ karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </Form.Group>
              <Button className="w-100" type="submit">Sign In</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;