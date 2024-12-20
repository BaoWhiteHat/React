import React, { useEffect } from 'react';

const SuccessPage = () => {
    useEffect(() => {
        alert("Payment successful!");
    }, []);

    return <div>Payment was successful! Thank you for your purchase.</div>;
};

export default SuccessPage;
