import React from "react";
import MainLounge from "../../components/StudentLounge/MainLounge";
import Protected from "../../hooks/useProtected";
const page = () => {
  
  return (
    <div className="w-[98%] flex mx-auto">
      <Protected>
     
        <MainLounge />
      </Protected>
    </div>
  );
};

export default page;
