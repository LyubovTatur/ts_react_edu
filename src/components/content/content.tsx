import React from 'react';
import './content.scss';
import Button from "../button/button";

const Content = () => {
    return (
        <div className='content'>
            <div className="col_1 col">1</div>
            <div className="col_2 col">
                2
                <Button/>
            </div>
            <div className="col_3 col">3</div>

        </div>
    );
};

export default Content;