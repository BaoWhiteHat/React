import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserSubscription, upgradeSubscription } from "@/Redux/Subscription/Action";
// import { useEffect } from "react-redux";


const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { subscription } = useSelector(store => store)
    
    const queryParams = new URLSearchParams(location.search);

    const paymentId = queryParams.get("payment_id");   
    const planType = queryParams.get("planType");

    useEffect(() => {
        dispatch(upgradeSubscription({ planType }));
        dispatch(getUserSubscription())
     }, [])

  return (
    <div className="flex justify-center">
      <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <CheckCircledIcon className="text-green-500 h-9 w-9" />
          <p className="text-xl">Plan Upgraded Succesfully</p>
        </div>

        <div className="space-y-3">
                  <p className="text-green-500">start date: { subscription.userSubscription?.subscriptionStartDate }</p>
                  <p className="text-red-500">end date: { subscription.userSubscription?.getSubscriptionEndDate }</p>
                  <p className="">plan type : { subscription.userSubscription?.planType }</p>
                  
              </div>
              <Button onClick={()=> navigate("/")}>Go to home</Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
