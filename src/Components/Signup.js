import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Loader/UserContext';

const Signup = () => {

    const [error , setError] = useState(null) ;
    const [pass , setPass] = useState(null) ;


    const { user , createUser} = useContext (AuthContext) ;
    const navigate = useNavigate() ;



    const handleSubmit=(event)=>{
        event.preventDefault() ;
        const form = event.target;
        const email = form.email.value ;
        const name = form.name.value ;
        const password = form.password.value ;
        const phone =   form.phone.value ;
        const confirm = form.confirm.value ;
    
        
        console.log(email , password , name, phone)

        if(password.length < 6){
            setPass('Password is less than 6')
            return
        }

      
        if(password !== confirm ){
            setError('Password did not match')
            return
        }     

        createUser(email, password)
        .then(result=>{
            const user = result.user ;
            console.log(error)
            navigate('/') ;
        })
        .catch(error=>console.error(error))


       

    }




    return (
        <div className='w-50 mx-auto p-5 m-2 border border-2 bg-info'>
            <h1 className='fw-bold text-center'>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Full Name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="Phone" placeholder="Enter Phone Number" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="email" aria-required >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-1" controlId="password" aria-required>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br />
                <small className='text-danger m-0 pb-2'>{pass}</small>

                <Form.Group className="mb-3" controlId="confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button> <br />
                <small>Already have account ? <Link to = "/login" >Log In</Link> </small>
            </Form> <br />
            <small className='text-danger'>{error}</small>
        </div>
    );
};

export default Signup;