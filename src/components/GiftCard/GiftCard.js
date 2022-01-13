import React from "react";
import styles from "./GiftCard.module.css";



function GiftCard(classname)
{
    return (
        <div className={classname}>
            <div className={styles.giftCard}>
                {[1, 2].map((_, idx) => 
                    <img className={styles[`giftCard__background--${idx + 1}`]} 
                    src="https://pngimage.net/wp-content/uploads/2018/06/%D0%B7%D0%B0%D0%B2%D0%B8%D1%82%D1%83%D1%88%D0%BA%D0%B0-png-4.png" alt={`bg${idx + 1}`} />)}
                    <img className={styles["giftCard__img--paytm"]} 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png" alt="paytm" />
                
                    <div className={styles.giftCard__textWrapper}>
                    <div>
                        <h2>Gift</h2>
                        <h2>Card</h2>
                    </div>
                    <div>
                            &#x20B9;
                        <span>200</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiftCard;