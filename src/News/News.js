import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNews from './MainNews';
import Left from './Left';
import Right from './Right';


const News = () => {
    return (
        <div className='row text-center'>
           <div className='col-md-2 d-md-block d-none' ><Left></Left></div>
           <div className='col-md-7' ><MainNews></MainNews></div>
           <div className='col' ><Right></Right></div>
        </div>
    );
};

export default News;