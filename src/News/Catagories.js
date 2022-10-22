import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagories = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews) ;

    
        return (
            <div>
                <h2>This is Category has news: {categoryNews.length}</h2>
            
            </div>
        );
    };
    

export default Catagories;