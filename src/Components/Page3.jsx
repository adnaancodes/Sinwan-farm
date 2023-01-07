import React from "react";
import cherry from "../assets/images/cherry.jpg";
function Page3() {
  return (
    <div className="w-[100%] h-[100vh] mt-[10%] flex flex-row justify-center items-center">
      <div className="bg-[white] shadow-md shadow-[] w-[80%] h-[90vh] flex flex-row justify-center items-center rounded-[20px]">
        <div className=" w-[50%] h-[100%]">
          <img src={cherry} alt="" className="w-[100%] h-[100%] edgeround" />
        </div>
        <div className="w-[50%] h-[80%] flex flex-col justify-center items-center gap-[2rem] ">
          <h1 className="text-[2rem] font-extrabold">Cherry</h1>
          <p className="w-[65%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            excepturi velit illo vero similique ab? Similique maiores ipsum iste
            quae ipsam, magnam distinctio, itaque non laboriosam sint delectus,
            eligendi exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
