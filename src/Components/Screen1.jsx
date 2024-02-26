import { useState } from "react";

const Screen1 = ({ stepcount, setstepcount, settechnology }) => {
  const [tech, setTech] = useState("");
  const handleClick = (e) => {
    setTech(e);
    settechnology(e);
  };

  return (
    <>
      <div className="rounded-lg h-[60%]  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600 p-6 py-12">
        <li
          type="1"
          className={`-4 text-lg ${
            tech == "Blockchain Development"
              ? "bg-blue-300 w-[50%] rounded-xl px-4 py-2"
              : "xla:text-2xl sma3:text-xl"
          } `}
        >
          Blockchain Development
        </li>
        <li
          type="1"
          className={`-4 text-lg ${
            tech == "Classic Development"
              ? "bg-blue-300 w-[50%] rounded-xl px-4 py-2"
              : "xla:text-2xl sma3:text-xl"
          } `}
        >
          Classic Development
        </li>
        <li
          type="1"
          className={`-4 text-lg ${
            tech == "Shopify Store"
              ? "bg-blue-300 w-[50%] rounded-xl px-4 py-2"
              : "xla:text-2xl sma3:text-xl"
          } `}
        >
          Shopify Store
        </li>
        <li
          type="1"
          className={`-4 text-lg ${
            tech == "Tiktok Store"
              ? "bg-blue-300 w-[50%] rounded-xl px-4 py-2"
              : "xla:text-2xl sma3:text-xl"
          } `}
        >
          TikTok Store 
        </li>
      </div>

      <div className="flex md:flex-row sma3:flex-col gap-4 mb-6  w-full  ">
        <div className="flex flex-row gap-4 h-[70px] p-2">
        <button
          className=" px-4 rounded-lg xla:text-2xl  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600"
          value={"Blockchain Development"}
          onClick={(e) => handleClick(e.target.value)}
        >
          1
        </button>

        <button
          className=" px-4  rounded-lg xla:text-2xl  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600"
          value={"Classic Development"}
          onClick={(e) => handleClick(e.target.value)}
        >
          2
        </button>
        <button
          className=" px-4  rounded-lg xla:text-2xl  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600"
          value={"Shopify Store"}
          onClick={(e) => handleClick(e.target.value)}
        >
          3
        </button>
        <button
          className=" px-4  rounded-lg xla:text-2xl  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600"
          value={"Tiktok Store"}
          onClick={(e) => handleClick(e.target.value)}
        >
          4
        </button>
        </div>
        <div className="flex flex-row md:justify-end sma3:justify-start items-center w-full ">
          <button
            onClick={() => {
              if (tech !== "") {
                setstepcount(stepcount + 1);
              }
            }}
            className="lg:w-[130px] md:w-[100px] sma3:w-[100px] h-[60px] sma3:h-[40px] rounded-lg xla:text-2xl  bg-slate-100 mb-4 ml-2 shadow-md shadow-slate-500 text-center text-xl"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default Screen1;
