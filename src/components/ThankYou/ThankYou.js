import { FunctionComponent } from "react";
import { faqs } from "./helpers";
import styles from "./ThankYou.module.css";

function ThankYou () 
{
    return (
        <>
            {
                faqs.map(({ question, answer, imgSrc }, idx) => (
                    <div className={styles.faqRow} key={idx}>
                        <img src={imgSrc} alt={`faq${idx + 1}-img`} />
                        <div className={styles.answerWrapper}>
                            <strong>{question}</strong>
                            <br />
                            <span>{answer}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ThankYou;