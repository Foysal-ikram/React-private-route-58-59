import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
    

    return (
        <div className='row m-5 px-5'>
            <div className='col'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='d-flex'>
                                <div className='mx-auto justify-content-center ' ><Link to="/booking"><Button variant="primary" >Booking</Button></Link></div>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <div className='col'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/75cf2e768dbb6a05855b2783ae6760cc.webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='d-flex'>
                                <div className='mx-auto justify-content-center ' ><Link to="/booking"><Button variant="primary" >Booking</Button></Link></div>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <div className='col'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/75cf2e768dbb6a05855b2783ae6760cc.webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className='d-flex'>
                                <div className='mx-auto justify-content-center ' ><Link to="/booking"><Button variant="primary" >Booking</Button></Link></div>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Home;