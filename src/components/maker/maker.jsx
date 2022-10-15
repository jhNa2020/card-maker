import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';

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

            <Footer />
        </section>
    );
};

export default Maker;