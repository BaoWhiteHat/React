import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <Card className="mt-20 space-y-5 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <CheckCircleIcon className="text-green-500 h-9 w-9" />
          <p className="text-xl">Plan Upgraded Succesfully</p>
        </div>

        <div className="space-y-3">
                  <p className="text-green-500">state date: </p>
                  <p className="text-red-500">end date: </p>\
                  <p className="">plan type : </p>
                  
              </div>
              <Button onClick={()=> navigate("/")}>Go to home</Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
