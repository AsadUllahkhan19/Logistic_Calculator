import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionnairePopup from '../Components/QuestionnairePopup';

const Home = () => {
  const [openPopup , setOpenPopup] = useState(false);
    const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const divRef = useRef(null);

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    if (!isFocused) {
      setIsFocused(false);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const HandleClick = ()=>{
    setOpenPopup(true);

  }
  const closePopup = ()=>{
    setOpenPopup(false);
    navigate('/')
  }

  return (
    <div className="h-screen w-screen flex items-center justify-end bg-slate-100">
      <button
        className="px-6 py-4 h-[300px] xla:w-[100px] bg-gradient-to-r font-sans flex flex-col items-center text-md from-emerald-100 z-10 to-indigo-200 text-black border-l-4 border-b-4 border-indigo-400 rounded shadow-lg shadow-indigo-500/50 hover:border-indigo-400"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <span>C</span>
        <span>A</span>
        <span>L</span>
        <span>C</span>
        <span>U</span>
        <span>L</span>
        <span>A</span>
        <span>T</span>
        <span>O</span>
        <span>R</span>
      </button>
      {isFocused && (
        <div
          ref={divRef}
          className="bg-white p-8 xla:py-12 lg:pr-14 md:pr-20 xla:pr-[200px] xl:pr-[100px] pr-12 h-[300px] absolute right-22 top-50 z-0 flex flex-col w-[30%] xla:w-[40%] lg:w-[45%] md:w-[55%] sma:w-[80%] sma2:w-[90%] sma3:w-[90%] border-l-6 border-b-6 border-indigo-100 rounded shadow-lg shadow-indigo-200/50 hover:border-indigo-100"
          onBlur={handleBlur}
          tabIndex="0"
        >
          <span className="text-2xl mb-8 sma3:text-xl">
            Calculate your project's time, team and price estimation in just a few minutes.
          </span>
          <button className="h-200 w-40 xla:h-300 xla:w-60 xla:text-2xl bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black text-white py-4 text-lg" onClick={HandleClick}>
            Start Calculation
          </button>
        </div>
      )}
      {openPopup && <QuestionnairePopup onClose={closePopup}/> }
    </div>
  );
};

export default Home;
