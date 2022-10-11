import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";

function MomoForm() {
  const [showSteps, setShowSteps] = useState(null);

  const networks = [
    {
      network: "Vodafone",
      steps: [
        "Dail *110# and select 'Send Money'",
        "Select 'Vodafone Network'",
        "Select 'To enter reciepient number'",
        "Enter '050 2458 051' as the reciepient number",
        "Enter Amount to send",
        "Confirm the name is 'Gates Vert' and enter your pin afterwards.",
      ],
    },
    {
      network: "MTN",
      steps: [
        "Dail *110# and select 'Send Money'",
        "Select 'Vodafone Network'",
        "Select 'To enter reciepient number'",
        "Enter '050 2458 051' as the reciepient number",
        "Confirm the name is 'Gates Vert' and enter your pin afterwards.",
      ],
    },
    {
      network: "AirtelTigo",
      steps: [
        "Dail *110# and select 'Send Money'",
        "Select 'Vodafone Network'",
        "Select 'To enter reciepient number'",
        "Enter '050 2458 051' as the reciepient number",
        "Confirm the name is 'Gates Vert' and enter your pin afterwards.",
      ],
    },
  ];

  const NetworkCard = ({ name, steps }) => (
    <div className="w-full h-fit grid grid-cols-1 gap-1">
      <Button style="tetiary-btn" click={() => setShowSteps(name)}>
        {name}
      </Button>
      <AnimatePresence>
        {showSteps === name && (
          <motion.div
            initial={{
              opacity: 0,
              height: "0px",
            }}
            animate={{
              opacity: 1,
              height: "fit-content",
            }}
            exit={{
              opacity: 0,
              height: "0px",
            }}
          >
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="w-full h-fit grid grid-cols-1 gap-2">
      {networks?.map((network, index) => (
        <NetworkCard name={network.network} steps={network.steps} key={index} />
      ))}
    </div>
  );
}

export default MomoForm;
