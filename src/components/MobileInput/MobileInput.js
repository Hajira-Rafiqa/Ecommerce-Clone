import React, { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { phoneRegEx } from "../../utils";
import styles from "./MobileInput.module.css";



function MobileInput(setMobileExist ){
    const [mobile, setMobile] = useState({
        number: undefined,
        valid: false
    });

    const handleChange = (e) => {
        if (phoneRegEx.test(e.target.value)) {
            setMobile({ ...mobile, number: e.target.value, valid: true })
        }
        else {
            setMobile({ ...mobile, number: e.target.value, valid: false })
        }
    }

    const handleClick = () => {
        localStorage.setItem("goKwikMobileNumber", mobile.number || "");
        setMobileExist(true);
    }

    return (
        <>
            <div className={styles.mobileInputWrapper}>
                <input type="text" placeholder="Enter mobile number" onChange={handleChange} />
                <br />
                <br />
                Enter the same number used on Man Matters
                <button disabled={!mobile.valid} onClick={handleClick}>Wow! Get my Paytm Card  &#12297;</button>
            </div>
        </>
    );
}

export default MobileInput;