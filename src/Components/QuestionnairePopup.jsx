import { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoCaretForwardOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Screen1 from "./Screen1";
import QuestionsScreen from "./QuestionsScreen";
import Result from "./Result";

const QuestionnairePopup = ({ onClose }) => {
  const [stepcount, setStepcount] = useState(0);
  const [technology, setTechnology] = useState("");

  const handleClick = () => {
    setStepcount(stepcount + 1);
  };
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className="fixed backdrop-blur-sm backdrop-brightness-100   inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto shadow- "
    >
      <div className="w-screen h-screen flex items-center justify-center  ">
        <div className="flex flex-col md:w-[50%] sma3:w-[90%] h-auto rounded-lg shadow-lg lg:flex md:flex shadow-sky-200 bg-neutral-400 p-4">
          <div className="flex flex-col w-full h-full gap-6 ">
            <div className=" w-full flex flex-row justify-between">
              <div className="w-[20%] h-[30%]   ">
                <img
                  src="images\maclogo.png"
                  alt=""
                  className="h-[70%] w-full "
                />
              </div>
              <div className="flex flex-row gap-4">
                <button
                  className=" float-right"
                  onClick={() => {
                    setStepcount(stepcount - 1);
                  }}
                >
                  <MdArrowBackIos className="text-2xl " />
                </button>
                <button className="float-right" onClick={onClose}>
                  <ImCross />
                </button>
              </div>
            </div>
            {stepcount == 0 ? (
              <>
                <div className=" rounded-lg h-[60%]  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600 p-6 py-12">
                  <span className="text-xl font-bold  text-black">
                    Make a tiny step to know your idea better. Calculate the
                    time and team needed for your idea implementation.{" "}
                  </span>
                  <span className="text-xl font-bold text-cyan-700">
                    {" "}
                    A few answers from you, instant result from us
                  </span>
                </div>
                <div className="flex flex-row gap-4">
                  <button className=" px-4 py-2 rounded-lg  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600">
                    <IoCaretForwardOutline className="text-2xl" />
                  </button>

                  <button className=" px-4 py-2 rounded-lg  bg-slate-100 drop-shadow-xl shadow-inner  shadow-slate-600">
                    <IoCaretForwardOutline className="text-2xl" />
                  </button>
                </div>
                <div className=" flex flex-row justify-end ">
                  <button
                    onClick={handleClick}
                    className=" w-[130px] h-[40px] rounded-2xl bg-slate-100 mb-4 shadow-md shadow-slate-500 text-center text-xl"
                  >
                    <span className="flex flex-row justify-center items-center">
                      <MdArrowBackIos />
                      Start
                      <MdArrowForwardIos />
                    </span>
                  </button>
                </div>{" "}
              </>
            ) : stepcount == 1 ? (
              <Screen1
                stepcount={stepcount}
                setstepcount={setStepcount}
                technology={technology}
                settechnology={setTechnology}
              />
            ) : stepcount == 2 ? (
              <QuestionsScreen
                stepcount={stepcount}
                setstepcount={setStepcount}
                technology={technology}
              />
            ) : stepcount == 3 ? (
              <Result />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {console.log(technology, "technology")}
    </div>
  );
};
export default QuestionnairePopup;
