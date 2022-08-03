import React from 'react';
// @ts-ignore
import styles from '../styles/content.module.scss';
// @ts-ignore
import stylesApp from '../styles/styles.module.scss';
import Button from "./button";
import Navbar from "./navbar.module";
import Header from "./header";
import Footer from "./footer";
// @ts-ignore
const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <div className={stylesApp.App}>
                <Header/>
                <div className={styles.content}>
                    {children}
                </div>
                <Footer/>
            </div>
            <style>
                {`body{
                padding:0;
                margin:0;
            }`}
            </style>
        </>
    );
};

export default MainLayout;