import { useEffect } from "react";
import { useState } from "react";

export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date());
        }, 60*1000)

    }, [])
}