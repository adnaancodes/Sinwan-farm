import React from "react";

function Confirmation() {
  return (
    <div>
      <form
        className="flex justify-center items-center space-x-4 text-[0.85rem] text-[black]"
        action=""
      >
        <input
          className="w-[1.5rem] h-[1.5rem]"
          type="radio"
          id="man"
          name="gender"
          value="man"
        />
        <label htmlFor="man">Man</label>
        <input
          className="w-[1.5rem] h-[1.5rem]"
          type="radio"
          id="woman"
          name="gender"
          value="woman"
        />
        <label htmlFor="woman">Woman</label>
        <input
          className="w-[1.5rem] h-[1.5rem]"
          type="radio"
          id="abirun"
          name="gender"
          value="abirun"
        />
        <label htmlFor="abirun">Abirun</label>
      </form>
      <form
        action=""
        className="flex flex-col gap-[0.5rem]justify-center items-center mt-[5%] "
      >
        <div className="flex flex-row gap-[0.75rem]justify-center ml-[37%] mb-[3%]">
          <input type="checkbox" id="decp" className="mt-[0.35rem] mr-[1rem]" />
          <p className="w-[40%] text-left">
            Having read the Information notice, I authorize Sinwan CTO to the
            processing of my Personal Data for Marketing purposes.
          </p>
        </div>
        <button
          type="button"
          className="outline-none w-[36%] h-[8vh] text-[0.95rem] rounded-[10px] bg-gray-100 font-bold hover:bg-gray-200"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default Confirmation;
