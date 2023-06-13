import React, { useEffect, useState } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';


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
          <span className="font-normal	text-xl	leading-6 select-none">{captcha}</span> 
          <RefreshIcon onClick={()=>regenerateCaptcha()} className="float-right cursor-pointer"/>
        </div>
    );
    
}

export default Captcha;