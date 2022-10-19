import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Loader/UserContext';




const Login = () => {

    const location= useLocation() ;
    const from = location.state?.from?.pathname || '/'

    const {signin} = useContext(AuthContext) ;
    const navigate = useNavigate() ;

    const handleLogin =(event)=> {
        event.preventDefault() ;
        const form = event.target;
        const email = form.email.value ;      
        const password = form.password.value ;
        
       
        signin(email , password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate(from, {replace: true})
           
        })
        .catch(error => console.error(error))
    }

    return (

        <div className='w-50 mx-auto p-4 mt-5 border border-2 bg-info'>
            
            <h1 className='fw-bold text-center'>Log in</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
               
                
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br /> 
                <Link className='me-5'><small>Forget pass ?</small></Link>
                
                <small>New to the website ? <Link to = "/signup" >Register</Link> </small>
            </Form>
         
        </div>
    );
};

export default Login;