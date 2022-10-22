import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Left = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCatagories(data))

    }, [])


    return (
        <div className='ms-2 mt-5 '>
            {
                catagories.map(catagory => 
                    <ListGroup>
                        <ListGroup.Item action as={Link} to={`/catagory/${catagory.id}`} >{catagory.name}</ListGroup.Item>
                    </ListGroup>
                
                )
            }
        </div>
    );
};

export default Left;