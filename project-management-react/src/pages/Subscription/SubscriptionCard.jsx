import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { createPayment } from "@/Redux/Payment/Action"; // Import the action to handle payment

const SubscriptionCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleUpgrade = () => {
        const jwt = localStorage.getItem("jwt"); // Get the user's JWT from localStorage
        dispatch(
            createPayment({
                planName: data.planName,
                price: data.price, // Pass the price in the smallest unit (e.g., cents for Stripe)
                quantity: 1, // Always set quantity to 1
                jwt,
            })
        );
    };

    return (
        <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
            <p>{data.planName}</p>
            <p>
                <span className="text-xl font-semibold">${data.price}/</span>
                <span>{data.planType}</span>
            </p>
            {data.planType === "ANNUALLY" && <p className="text-green-500">30% off</p>}

            <Button onClick={handleUpgrade} className="w-full">
                {data.buttonName}
            </Button>

            {data.features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                    <CheckCircledIcon />
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
};


export default SubscriptionCard;
