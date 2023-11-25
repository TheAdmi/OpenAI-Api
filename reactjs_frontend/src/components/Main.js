import { Toaster } from 'react-hot-toast';
import GetStarted from "./GetStarted";
import Output from "./Output";
import "../assets/style.css";
import Navbar from './Navbar';
import GithubButton from './Items/GithubButton';

function Main() {
  return (
    <section className="heroSection min-h-screen bg-gradient-to-bl from-[#efc6c2] to-[#dd98f3] dark:bg-gradient-bl dark:from-[#000A1F] dark:to-[#000A1F]">
      <Toaster />
      <div className='min-h-screen'>
        <Navbar />
        <div className="relative heroElem z-10 w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1">
          <p className="text-xl font-medium mb-0 text-gray-700 dark:text-gray-300">Hello there!</p>
          <h1 className="heroTitle text-gray-900 dark:text-white inline-block px-2 sm:px-0 max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
            Dive into a <span className="heroShiny1 text-rose-500">World</span> of innovative {" "}
            <span className="heroShiny2 text-rose-500">AI</span> solutions.
          </h1>
          <GetStarted />
        </div>

        <div className="heroElems">
          <img className="sqD w-32 h-auto lg:w-56 lg:h-auto bottom-20 left-[-44px] lg:bottom-20 lg:left-[-70px]"
            src="/imgs/shape_3.png" alt="shape" style={{ animationDelay: "0.2s" }} />
          <img className="sqD w-32 h-auto lg:w-52 lg:h-auto left-0 top-20 lg:left-0 lg:top-20"
            src="/imgs/shape_2.png" alt="shape" style={{ animationDelay: "0.3s" }} />
          <img className="sqD hidden sm:block w-32 h-auto lg:w-36 lg:h-auto bottom-14 right-72 lg:bottom-14 lg:right-72"
            src="/imgs/shape_3.png" alt="shape" style={{ animationDelay: "0.4s" }} />
          <img className="sqD w-32 h-auto lg:w-32 lg:h-auto top-96 left-20 lg:top-96 sm:left-80"
            src="/imgs/shape_4.png" alt="shape" style={{ animationDelay: "0.5s" }} />
          <img className="sqD w-32 h-auto lg:w-52 lg:h-auto right-0 bottom-16 lg:right-0 lg:bottom-16"
            src="/imgs/shape_5.png" alt="shape" style={{ animationDelay: "0.6s" }} />
          <img className="sqD hidden sm:block w-32 h-auto lg:w-32 lg:h-auto top-24 right-56 lg:top-24 lg:right-56"
            src="/imgs/shape_3.png" alt="shape" style={{ animationDelay: "0.7s" }} />
          <img className="sqD w-32 h-auto lg:w-32 lg:h-auto right-8 top-52 lg:right-8 lg:top-44"
            src="/imgs/shape_1.png" alt="shape" style={{ animationDelay: "0.8s" }} />
          <img className="sqD w-32 h-auto lg:w-44 lg:h-auto top-44 left-14 lg:top-44 lg:left-36"
            src="/imgs/shape_3.png" alt="shape" style={{ animationDelay: "0.9s" }} />
        </div>
      </div>
      <Output />
      <GithubButton />
    </section>
  )
}

export default Main;