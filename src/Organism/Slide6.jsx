import React, { useState } from "react";
import Confirmation from "../Molecule/Confirmation";

function Slide6() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="w-[50%] text-[1.2rem] font-medium">
        Sinwan Farms is a farm founded on Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Dolore obcaecati cum quidem soluta impedit
        placeat aliquam porro enim. Quaerat nemo quis soluta ea cupiditate
        fugiat atque delectus? Odit, hic facere?
      </p>

      <h1 className="font-bold mt-[9%] text-[0.75rem]">
        RECEIVE THE NEWSLETTER
      </h1>
      <p className="text-[0.75rem] text-[gray]">
        Stay up-to-date with the new products,agricultural events and exclusive
        content.
      </p>
      <form
        action=""
        className="flex flex-col w-[100%] h-[30vh] justify-center items-center"
      >
        <label htmlFor="" className="mr-[16%] text-[black]">
          Email address
        </label>
        <input
          type="email"
          required
          onClick={(e) => setShow(true)}
          className="border-[2px] border-[tomato] outline-[blue] bg-[blue w-[30%] h-[8vh] rounded-[15px] z-[1] pl-[1rem] shadow-lg"
        />
      </form>
      {show ? <Confirmation /> : ""}
    </div>
  );
}

export default Slide6;
