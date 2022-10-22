import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub , FaFacebookSquare , FaYoutube, FaLinkedin} from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Button, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Loader/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';


const Right = () => {
    const navigate = useNavigate() ;
    const {google} = useContext(AuthContext) ;
    const provider = new GoogleAuthProvider() ;

    const googleSign =()=>{
        console.log('assss')
        google(provider)
       .then(result=>{
            const user = result.user ;
            console.log(user);
            navigate('/')
            
        })
        .catch(error=>console.error(error))

    }

    return (
        <div className='me-5'>
            <Button variant="outline-success w-75 my-2" onClick={googleSign} >sign in <FcGoogle /> </Button> <br />
            <Button variant="outline-success w-75 my-2">sign in <FaGithub /> </Button>
            <div className='w-75 mx-auto'>
                <h3 className='border border-2 border-warning p-1 mt-3'>Find us on</h3>
                <ListGroup className='text-start'>
                        <ListGroup.Item action as={Link} to={''}  > <FaFacebookSquare /> Facebook</ListGroup.Item>
                        <ListGroup.Item action as={Link} to={''} > <FaLinkedin /> Linked in</ListGroup.Item>
                        <ListGroup.Item action as={Link} to={''} ><FaYoutube /> Youtube</ListGroup.Item>
                        <ListGroup.Item action as={Link} to={''} > <FaFacebookSquare /> Diigo</ListGroup.Item>
                        <ListGroup.Item action as={Link} to={''} > <FaFacebookSquare /> Reddit</ListGroup.Item>
                    </ListGroup>
            </div>
        </div>
    );
};

export default Right;