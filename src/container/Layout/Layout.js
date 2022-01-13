import React, { useEffect, useState } from "react";
import GiftCard from "../../components/GiftCard/GiftCard";
import Header from "../../components/Header/Header";
import MobileInput from "../../components/MobileInput/MobileInput";
import ThankYou from "../../components/ThankYou/ThankYou";
import styles from  "./Layout.module.css";
//import './index.css';
//import './variables.css';


const Layout = () => {

    const [mobileExist, setMobileExist] = useState(localStorage.hasOwnProperty("goKwikMobileNumber"));

    useEffect(() => {
        window.addEventListener('storage', () => {
            setMobileExist(localStorage.hasOwnProperty("goKwikMobileNumber"));
        })
    }, []);

    return (
        <>
            <header className={styles.headerWrapper}>
                <Header />
                <GiftCard classname={styles.headerWrapper__card} />
            </header>
            <section className={styles.sectionWrapper}>
                {mobileExist ?
                    <ThankYou />
                    :
                    <>
                        You have WON Paytm Gift Card of Rs 200 for <b>placing the order on Man Matters</b>
                        <br />
                        <MobileInput setMobileExist={setMobileExist} />
                    </>
                }
            </section>
            <footer className={styles.footer}>
                Powered by <img src="https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/60145d3b8a7a980b66120449/logo-1615962415046-Webp.net-resizeimage.png" alt="" />
            </footer>
        </>
    );
}

export default Layout;