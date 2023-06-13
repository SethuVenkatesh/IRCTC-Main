import React, { useEffect, useState } from "react";

function Captcha() {
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890@#$=&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [captcha, setCaptcha] = useState('');

    useEffect(() => {
        generateCaptcha(6);
      }, []);

    const regenerateCaptcha =() =>{
        generateCaptcha(6);
    }

    const generateCaptcha = (length) => {
        let result = '';
        const characterLength = characters.length;
        for(let i=0;i<length;i++)
        {
            result += characters.charAt(Math.floor(Math.random() * characterLength));
        }
        setCaptcha(result);
    }

    return (
        <div>
          <span className={`font-normal	text-xl	leading-6`}>{captcha}</span> 
          <span onClick={() => regenerateCaptcha(6)}>
            <img src="https://www.svgrepo.com/show/165646/reload.svg" alt="reload" className={`w-6 h-6 float-right invert rotate-[120deg]`}></img>
          </span>
        </div>
    );
    
}

export default Captcha;