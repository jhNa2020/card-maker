import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {

    const navigate = useNavigate ();
    
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            !user &&  navigate({
                pathname: '/',
                state: { id: null},
            });;
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor />
                <Preview />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;