// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Confetti from "react-confetti";
// import music from "./assets/music.mp3";

// export default function App() {
//   const [position, setPosition] = useState({ x: 50, y: 50 });
//   const [playing, setPlaying] = useState(false);
//   const [showMain, setShowMain] = useState(false);
//   const [showCake, setShowCake] = useState(false);
//   const [showGoodbye, setShowGoodbye] = useState(false);
//   const [timer, setTimer] = useState(5);
//   const [blown, setBlown] = useState(false);

//   const audioRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth) * 100;
//     const y = (e.clientY / window.innerHeight) * 100;
//     setPosition({ x, y });
//   };

//   const startExperience = () => {
//     setShowMain(true);
//     setPlaying(true);
//     setTimeout(() => audioRef.current.play(), 300);
//   };

//   const toggleMusic = () => {
//     if (playing) audioRef.current.pause();
//     else audioRef.current.play();
//     setPlaying(!playing);
//   };

//   const goToCakePage = () => {
//     setShowCake(true);
//     setTimer(5);
//     setBlown(false);
//   };

//   const goToGoodbye = () => {
//     setShowGoodbye(true);
//     setShowCake(false);
//     setShowMain(false);
//   };

//   useEffect(() => {
//     if (!showCake) return;
//     if (timer <= 0) {
//       setBlown(true);
//       return;
//     }
//     const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//     return () => clearInterval(interval);
//   }, [timer, showCake]);

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       className="min-h-screen text-white transition-all duration-500 animated-gradient"
//       style={{
//         background: `radial-gradient(circle at ${position.x}% ${position.y}%, #ff4e50, #f9d423, #24c6dc, #514a9d)`,
//         backgroundSize: "400% 400%",
//       }}
//     >
//       {/* MUSIC */}
//       <audio ref={audioRef} loop>
//         <source src={music} type="audio/mpeg" />
//       </audio>

//       {/* INTRO PAGE */}
//       {!showMain && !showCake && !showGoodbye && (
//         <div className="flex flex-col items-center justify-center h-screen text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-bold mb-8"
//           >
//             Hey 👋
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="max-w-lg text-lg mb-10"
//           >
//              🎁
//           </motion.p>

//           <motion.button
//             whileHover={{ scale: 1.15 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={startExperience}
//             className="bg-white text-black px-8 py-3 rounded-full text-lg shadow-xl"
//           >
//             click here 
//           </motion.button>
//         </div>
//       )}

//       {/* MAIN BIRTHDAY PAGE */}
//       {showMain && !showCake && !showGoodbye && (
//         <>
//           <Confetti />
//           <button
//             onClick={toggleMusic}
//             className="fixed top-5 right-5 bg-white text-black px-4 py-2 rounded-full shadow-lg"
//           >
//             {playing ? "Pause Music ⏸️" : "Play Music 🎵"}
//           </button>

//           <section className="flex flex-col items-center justify-center h-screen text-center">
//             <motion.h1
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               whileHover={{ scale: 1.2 }}
//               transition={{ duration: 1 }}
//               className="text-6xl font-bold cursor-pointer"
//             >
//               Happy Birthday 🎂
//             </motion.h1>

//             <motion.h2
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.15 }}
//               transition={{ delay: 1 }}
//               className="text-4xl mt-6 cursor-pointer"
//             >
//               Dear Jasleen ❤️
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ delay: 2 }}
//               className="mt-8 max-w-xl text-lg"
//             >
//               I made this little website just to make you smile today. Because
//               someone as special as you deserves something unique.
//             </motion.p>

//             <motion.button
//               onClick={goToCakePage}
//               className="mt-10 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg"
//               whileHover={{ scale: 1.1 }}
//             >
//               See Your Birthday Cake 🎂
//             </motion.button>
//           </section>
//         </>
//       )}

//       {/* CAKE PAGE */}
//       {showCake && !showGoodbye && (
//         <section className="flex flex-col items-center justify-center h-screen text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className="relative flex flex-col items-center"
//           >
//             {/* Cake Layers */}
//             <div className="bg-white w-80 h-20 rounded-t-3xl relative z-10 shadow-lg flex justify-center items-end">
//               {/* Candles */}
//               <div className="absolute top-[-60px] flex space-x-8">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className="flex flex-col items-center">
//                     {!blown ? (
//                       <div className="w-4 h-10 bg-yellow-400 rounded-sm relative flex justify-center items-start">
//                         <div className="absolute -top-5 w-4 h-4 rounded-full bg-orange-400 animate-flame"></div>
//                       </div>
//                     ) : (
//                       <div className="w-4 h-10 bg-yellow-400 rounded-sm relative flex justify-center items-start">
//                         <div className="absolute -top-5 w-4 h-4 rounded-full bg-gray-400 animate-smoke"></div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white w-96 h-20 rounded-t-3xl mt-1 shadow-lg"></div>
//             <div className="bg-white w-[28rem] h-20 rounded-b-3xl mt-1 shadow-lg"></div>

//             {/* Cake Plate */}
//             <div className="bg-gray-800 w-[28rem] h-6 rounded-b-full -mt-1 shadow-inner"></div>

//             {/* Timer & Message */}
//             <div className="mt-10 text-center">
//               <p className="text-3xl font-bold">
//                 Make a wish! {timer > 0 && `(${timer})`}
//               </p>

//               {/* Show Next Button after countdown */}
//               {blown && (
//                 <motion.button
//                   onClick={goToGoodbye}
//                   className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full shadow-lg text-white text-lg"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   Next 🎉
//                 </motion.button>
//               )}
//             </div>
//           </motion.div>

//           <style>{`
//             @keyframes flame {
//               0% { transform: scaleY(1) translateY(0); opacity: 1; }
//               50% { transform: scaleY(1.5) translateY(-2px); opacity: 0.8; }
//               100% { transform: scaleY(1) translateY(0); opacity: 1; }
//             }
//             @keyframes smoke {
//               0% { transform: translateY(0) scale(0.5); opacity: 0.6; }
//               50% { transform: translateY(-15px) scale(1); opacity: 0.4; }
//               100% { transform: translateY(-30px) scale(1.2); opacity: 0; }
//             }
//             .animate-flame { animation: flame 0.5s infinite; }
//             .animate-smoke { animation: smoke 1s forwards; }

//             /* Animated Gradient Background */
//             .animated-gradient {
//               background-size: 400% 400%;
//               animation: gradientAnimation 15s ease infinite;
//             }

//             @keyframes gradientAnimation {
//               0% { background-position: 0% 50%; }
//               50% { background-position: 100% 50%; }
//               100% { background-position: 0% 50%; }
//             }
//           `}</style>
//         </section>
//       )}

//       {/* GOODBYE PAGE */}
//       {showGoodbye && (
//         <section className="flex flex-col items-center justify-center h-screen text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-6xl font-bold mb-6"
//           >
//             🎉 Hope you had a great birthday! 🎉
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-2xl max-w-lg"
//           >
//             Wishing you happiness, love, and laughter always. ❤️
//           </motion.p>
//         </section>
//       )}
//     </div>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import music from "./assets/music.mp3";

export default function App() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [playing, setPlaying] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [showGoodbye, setShowGoodbye] = useState(false);
  const [timer, setTimer] = useState(5);
  const [blown, setBlown] = useState(false);

  const audioRef = useRef(null);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setPosition({ x, y });
  };

  const startExperience = () => {
    setShowMain(true);
    setPlaying(true);
    setTimeout(() => audioRef.current.play(), 300);
  };

  const toggleMusic = () => {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const goToCakePage = () => {
    setShowCake(true);
    setTimer(5);
    setBlown(false);
  };

  const goToGoodbye = () => {
    setShowGoodbye(true);
    setShowCake(false);
    setShowMain(false);
  };

  useEffect(() => {
    if (!showCake) return;
    if (timer <= 0) {
      setBlown(true);
      return;
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, showCake]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen overflow-x-hidden text-white transition-all duration-500 animated-gradient"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, #ff4e50, #f9d423, #24c6dc, #514a9d)`,
        backgroundSize: "400% 400%",
      }}
    >
      {/* MUSIC */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      {/* INTRO PAGE */}
      {!showMain && !showCake && !showGoodbye && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
          >
            Hey 👋
            Bangalan kahan ghoom rahi ho , kaisa raha tumhara din ?
            Thik toh ho na tum !
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-lg text-base sm:text-lg mb-10"
          >
            🎁
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={startExperience}
            className="bg-white text-black px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg shadow-xl"
          >
            Click Here
          </motion.button>
        </div>
      )}

      {/* MAIN PAGE */}
      {showMain && !showCake && !showGoodbye && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />

          <button
            onClick={toggleMusic}
            className="fixed top-4 right-4 bg-white text-black px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full shadow-lg"
          >
            {playing ? "Pause Music ⏸️" : "Play Music 🎵"}
          </button>

          <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer"
            >
              Happy Birthday 🎂
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 1 }}
              className="text-2xl sm:text-3xl md:text-4xl mt-6 cursor-pointer"
            >
              Dear jo bhi birthday wale ka naam hai 
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-8 max-w-xl text-base sm:text-lg"
            >
              I made this little website just to make you smile today. Because
              someone as special as you deserves something unique.
            </motion.p>

            <motion.button
              onClick={goToCakePage}
              className="mt-10 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              See Your Birthday Cake 🎂
            </motion.button>
          </section>
        </>
      )}

      {/* CAKE PAGE */}
      {showCake && !showGoodbye && (
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative flex flex-col items-center"
          >
            {/* Top Layer */}
            <div className="bg-white w-[60vw] max-w-[320px] h-16 sm:h-20 rounded-t-3xl relative z-10 shadow-lg flex justify-center items-end">
              {/* Candles */}
              <div className="absolute top-[-60px] flex space-x-6 sm:space-x-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {!blown ? (
                      <div className="w-3 sm:w-4 h-10 bg-yellow-400 rounded-sm relative flex justify-center items-start">
                        <div className="absolute -top-4 w-3 sm:w-4 h-4 rounded-full bg-orange-400 animate-flame"></div>
                      </div>
                    ) : (
                      <div className="w-3 sm:w-4 h-10 bg-yellow-400 rounded-sm relative flex justify-center items-start">
                        <div className="absolute -top-4 w-3 sm:w-4 h-4 rounded-full bg-gray-400 animate-smoke"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Layer */}
            <div className="bg-white w-[70vw] max-w-[380px] h-16 sm:h-20 rounded-t-3xl mt-1 shadow-lg"></div>

            {/* Bottom Layer */}
            <div className="bg-white w-[75vw] max-w-[420px] h-16 sm:h-20 rounded-b-3xl mt-1 shadow-lg"></div>

            {/* Plate */}
            <div className="bg-gray-800 w-[75vw] max-w-[420px] h-5 sm:h-6 rounded-b-full -mt-1 shadow-inner"></div>

            {/* Timer */}
            <div className="mt-10 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                Make a wish! {timer > 0 && `(${timer})`}
              </p>

              {blown && (
                <motion.button
                  onClick={goToGoodbye}
                  className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full shadow-lg text-white text-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  Next 🎉
                </motion.button>
              )}
            </div>
          </motion.div>

          <style>{`
            @keyframes flame {
              0% { transform: scaleY(1); opacity: 1; }
              50% { transform: scaleY(1.4) translateY(-2px); opacity: 0.8; }
              100% { transform: scaleY(1); opacity: 1; }
            }

            @keyframes smoke {
              0% { transform: translateY(0) scale(0.5); opacity: 0.6; }
              100% { transform: translateY(-30px) scale(1.2); opacity: 0; }
            }

            .animate-flame {
              animation: flame 0.5s infinite;
            }

            .animate-smoke {
              animation: smoke 1s forwards;
            }

            .animated-gradient {
              background-size: 400% 400%;
              animation: gradientAnimation 15s ease infinite;
            }

            @keyframes gradientAnimation {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </section>
      )}

      {/* GOODBYE PAGE */}
      {showGoodbye && (
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            🎉 Hope you had a great birthday! 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl max-w-lg"
          >
            Wishing you happiness, love, and laughter always. ❤️
          </motion.p>
        </section>
      )}
    </div>
  );
}