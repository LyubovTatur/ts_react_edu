import React from 'react';
import './content.scss';
import Button from "../button/button";
import Main from "../../pages/main";

const Content = () => {
    return (
        <div className='content'>
            <div className="col_1 col">1</div>
            <div className="col_2 col">
                <Main/>
                {/*<Button/>*/}
            </div>
            <div className="col_3 col">3</div>

        </div>
    );
};

export default Content;