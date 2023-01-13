import React from "react";

function Footer() {
  return (
    <div className="flex flex-col gap-10 bg-[#ffff]   ">
      <div className=""></div>
      <div className="flex flex-row justify-center items-center gap-8 text-[0.75rem] font-extrabold">
        <button className="hover:text-gray-500">SHOP WITH US</button>
        <button className="hover:text-gray-500">STORES</button>
        <button className="hover:text-gray-500">CUSTOMER CARE</button>
        <button className="hover:text-gray-500">FOLLOW US</button>
        <button className="hover:text-gray-500">PURITY CHECK</button>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 text-[0.75rem] font-extrabold">
        <button className="hover:text-gray-500">NEED ASSISTANCE?</button>
        <button className="hover:text-gray-500">08100001101</button>
      </div>
      <div className="text-[0.67rem] font-bold">
        <p>Get in touch</p>
        <p>
          Ajanlekoko Street, Iyana Orun,Shege State.
          <br />
          P.O.BOX 14450
        </p>
        <p></p>
        <p>sinwan@farms.site</p>
      </div>
      <div className="gap-4 text-[0.75rem] font-extrabold">
        <p>Agricultural Company,2022</p>
        <p>Copyright © 2023 - v2.19.9</p>
      </div>
    </div>
  );
}
export default Footer;
