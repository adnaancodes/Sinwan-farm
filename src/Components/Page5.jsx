import React from "react";
import orange from "../assets/images/orange.jpg";
import citrus from "../assets/images/citrus.jpg";
import pineapple from "../assets/images/pineapple.jpg";
import veggies from "../assets/images/veggies.jpg";
import blueberry from "../assets/images/blueberry.jpg";

function Page5() {
  const pictures = [
    {
      img: orange,
      description: "orange",
    },
    {
      img: pineapple,
      description: "pineapple",
    },
    {
      img: citrus,
      description: "citrus",
    },
    {
      img: veggies,
      description: "veggies",
    },
    {
      img: blueberry,
      description: "blueberry",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-[1rem] p-[.5rem] mt-[10rem] w-[100%] h-[10%]">
      {pictures.map(({ img, description }, i) => (
        <div
          key={i}
          className="flex flex-col items-center border-[1px solid lightblue] rounded-[1rem] w-[95%] h-[60vh]"
        >
          <img
            className="w-[100%] h-[15rem] object-cover
          rounded-[10px] "
            src={img}
            alt=""
          />
          <p className="bg-gradient-to-r from-yellow-500 to-orange-500 w-[100%] mt-[4%] rounded-[10px]">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Page5;
