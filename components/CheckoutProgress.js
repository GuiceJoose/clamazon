import React from "react";

function CheckoutProgress({ currentStep }) {
  return (
    <div className="mb-5 flex flex-wrap">
      {["Shipping Information", "Review Order", "Place Order"].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2  
              text-center 
           ${
             index <= currentStep
               ? "border-indigo-500   text-indigo-500"
               : "border-gray-400 text-gray-400"
           }
              
           `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}

export default CheckoutProgress;
