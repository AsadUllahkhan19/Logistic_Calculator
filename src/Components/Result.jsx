import { useNavigate } from "react-router-dom";

const team = ["Graphic Designer", "UI Designer", "Deeveloper", "QA"];
const Result = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
   
    navigate("/calendar")
  }
  return (
    <>
      <div className="rounded-lg lg:h-[52%] sma3:h-auto bg-gradient-to-r from-indigo-200  to-emerald-100 drop-shadow-xl shadow-inner shadow-slate-600 pt-4 px-4">
        <span className="text-2xl font-bold sma3:text-lg">
          The estimated team and time for your project:
        </span>

        <li className="lg:text-lg sma3:text-sm " type="square">
          0.4 months with 2 developers; or 0.3 months with 3 developers
        </li>
        {team.map((item, index) => (
          <li className="lg:text-lg sma3:text-sm " type="square">
            {item}
          </li>
        ))}

        <span className="lg:text-xl sma3:text-lg font-bold mt-2">
          Book a call to get an extensive estimation.
        </span>
      </div>

      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="<Enter your name>"
          className="lg:h-12 sma3:h-10 rounded-lg p-4 placeholder:text-lg "
        />
        <input
          type="email"
          placeholder="<Enter your email>"
          className="lg:h-12 sma3:h-10 rounded-lg p-4 placeholder:text-lg "
        />
      </form>
      <div className="w-full ">
        <button className="h-12 lg:w-[35%] sma3:w-[50%] bg-slate-700 text-white float-right m-4 rounded-lg font-bold lg:text-lg sma3:text-md font-serif hover:bg-transparent hover:text-slate-700 hover:border-2 hover:border-slate-700 " onClick={handleClick}>Book A Call</button>
      </div>
    </>
  );
};
export default Result;
