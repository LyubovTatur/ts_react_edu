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
                    <div className="col_1 col">
                        <Navbar/>
                    </div>
                    <div className="col_2 col">
                        {children}
                    </div>

                </div>
                <Footer/>
            </div>
        </>
    );
};

export default MainLayout;