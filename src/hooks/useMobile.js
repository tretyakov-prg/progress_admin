import { useEffect, useState } from "react"

const useMobile = () => {
    
    const [mobile, setMobile] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('mobile') === null)
        {
            setMobileStorage(false);
        }
    },[mobile])


    const getMobileStorage = () => {
        return localStorage.getItem('mobile');
    }

    const setMobileStorage = (tmobile) => {
        setMobile(tmobile);
        localStorage.setItem('mobile', tmobile);
    }

    return {mobile, getMobileStorage, setMobileStorage};
}

export default useMobile;