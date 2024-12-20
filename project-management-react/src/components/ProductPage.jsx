import { useEffect } from 'react';

const createCheckoutSession = async (productDetails) => {
    try {
        const response = await fetch('/api/payment/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productDetails),
        });

        const sessionUrl = await response.text();
        if (sessionUrl.includes('http')) {
            window.location.href = sessionUrl; // Redirect to the Stripe checkout session URL
        } else {
            alert(sessionUrl); // Handle error if not successful
        }
    } catch (error) {
        console.error('Error creating checkout session:', error);
    }
};

const ProductPage = () => {
    const productDetails = {
        name: "Premium Plan",
        amount: 5000, // Price in cents ($50.00)
        quantity: 1,
        currency: 'USD',
    };

    useEffect(() => {
        createCheckoutSession(productDetails);
    }, []);

    return <div>Redirecting to payment...</div>;
};

export default ProductPage;
