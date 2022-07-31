import React from 'react';

const Main = () => {
    const menuItems =[
        {text:'Main', href:'/'},
        {text:'Track list', href:'/tracks'},
        {text:'Album list', href:'/albums'},
    ]
    return (
        <div>
            <h1> main.tsx </h1>
        </div>
    );
};

export default Main;