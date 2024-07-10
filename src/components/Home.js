// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import profile from "../assets/profile.png";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full w-full md:w-1/2 text-white">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white text-glow">
//             I'm a{" "}
//             <ReactTyped
//               strings={["Designer", "Software Developer", "Web Developer"]}
//               typeSpeed={100}
//               loop
//               backSpeed={20}
//             />
//           </h2>
//           <p className="text-gray-400 py-4 max-w-md">
//             As a fresher, I have successfully completed over five projects using
//             Node.js, React.js, CSS, and JavaScript, and I am currently
//             passionate about solving problems using Java.
//           </p>
//           <div>
//             <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300 ml-2">
//                 <FaArrowRight size={25} className="ml=l" />
//               </span>
//             </button>
//           </div>
//         </div>
//         {/* <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={sanjay}
//             alt="my profile"
//             className="rounded-2xl max-w-xs md:max-w-md mx-auto"
//           />
//         </div> */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={profile}
//             alt="my profile"
//             className="rounded-2xl w-40 h-40 md:w-56 md:h-56 mx-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import profile from "../assets/profile.png";
// import { ReactTyped } from "react-typed";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center"
//     >
//       <div className="max-w-screen-lg mx-auto flex gap-20 flex-col items-center justify-around  h-full w-[80%] px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full w-[50%]  md:w-1/2 text-white">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white text-glow">
//             I'm a{" "}
//             <ReactTyped
//               strings={["Designer", "Software Developer", "Web Developer",]}
//               typeSpeed={100}
//               loop
//               backSpeed={20}
//             />
//           </h2>
//           <p className="text-gray-400 py-4 max-w-md">
//             As a fresher, I have successfully completed over five projects using
//             Node.js, React.js, CSS, and JavaScript, and I am currently
//             passionate about solving problems using Java.
//           </p>
//           <div>
//             <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300 ml-2">
//                 <FaArrowRight size={25} className="ml=l" />
//               </span>
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2  w-[30%] mt-8 md:mt-0">
//           <img
//             src={profile}
//             alt="my profile"
//             className="rounded-2xl w-40 h-40 md:w-56  md:h-60 mx-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React from "react";
import { FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.png";
import { ReactTyped } from "react-typed"; // Correct this to named import

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex gap-8 flex-col items-center justify-center h-full px-4 md:flex-row md:gap-16 lg:gap-20">
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 text-white">
          <h2 className="text-4xl sm:text-7xl font-bold text-white text-glow">
            I'm a{" "}
            <ReactTyped
              strings={["Designer", "Software Developer", "Web Developer"]}
              typeSpeed={100}
              loop
              backSpeed={20}
            />
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            As a fresher, I have successfully completed over five projects using
            Node.js, React.js, CSS, and JavaScript, and I am currently
            passionate about solving problems using Java.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaArrowRight size={25} className="ml=l" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0 md:w-1/2">
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl w-40 h-40 md:w-56 md:h-56 lg:w-60 lg:h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


