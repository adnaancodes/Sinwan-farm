import React from "react";
import img3 from "../assets/images/img3.jpg";

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center mt-[2%]">
      <h1 className="text-[4rem]">𝕷𝖎𝖛𝖊 𝕳𝖊𝖆𝖑𝖙𝖍𝖞</h1>
      <h2 className="text-[1rem] font-extrabold">Far away from toxins</h2>
      <div className="w-[100%]   flex items-center justify-center mt-[4rem] ">
        <img src={img3} alt="" className="w-[70%] rounded-[2rem] " />
      </div>
      <p className="w-[65%] mt-[3rem]">
        Eating fresh fruits and vegetables is a great way to stay away from the
        restaurant check-out line and save money. The convenience of buying
        fresh foods prevents you from being responsible for your own meals.
        Additionally, fresh foods are a great source of antioxidants and
        vitamins, which can help you feel better. No one likes the taste of
        orange peel, but freshly squeezed orange juice is actually full of
        health benefits. Eating fresh fruits and vegetables is a great way to
        avoid eating carbohydrates and sugar which are both important factors in
        diseases such as diabetes and obesity.
      </p>
    </div>
  );
}

export default Homepage;
