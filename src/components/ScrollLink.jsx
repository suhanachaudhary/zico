


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollLink = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
};

export default ScrollLink;
