import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';


export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current); //reference of html element 
    }, []);

    return <div ref={ref} />;
}