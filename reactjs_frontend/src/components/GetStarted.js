import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { POST_DATA_SUCCESS } from '../redux/Actions';
import { animateScroll as scroll } from 'react-scroll';
import { LoadingToast, TheToast } from './Items/Toasts';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function GetStarted() {
  const [isClicked, setIsClicked] = useState(false);
  const [prompt, setPrompt] = useState("");
  const dispatch = useDispatch(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    LoadingToast();
    try {
      const response = await axios.post('http://localhost:3300/OpenAIResponse', { "prompt": prompt });
      dispatch(POST_DATA_SUCCESS(response.data.result));
      toast.remove();
      TheToast("Done! See the result..", "success")
      scroll.scrollToBottom({
        containerId: 'output',
        duration: 500,
        smooth: true,
        spy: true
      });
    } catch (error) {
      toast.remove();
      TheToast("Something went wrong!", "error");
    }
  }

  return (
    <div>
      {!isClicked ? (
        <button className="cursor-pointer text-gray-900 dark:text-white hover:bg-rose-500/20 backdrop-blur-sm hover:border-rose-500 dark:hover:border-rose-500 font-bold whitespace-nowrap px-10 py-2.5 border-2 border-gray-900 dark:border-white text-xl rounded-full transition-colors"
          onClick={() => setIsClicked(true)} >
          Get started
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="relative w-full mx-auto">
            <input type="text" className="block md:w-[30rem] sm:w-[25rem] w-[20rem] text-gray-900 dark:text-white text-lg font-normal bg-transparent outline-none whitespace-nowrap py-2.5 pl-5 pr-11 placeholder:text-gray-800 dark:placeholder:text-gray-200 border-2 border-gray-900 dark:border-white rounded-full transition-colors focus:border-rose-500 focus:backdrop-blur-sm focus:bg-rose-500/20"
              placeholder="typing here.." onChange={(e)=>setPrompt(e.target.value)} required/>
            <button type="submit" className="absolute right-0 bottom-0 rounded-full p-1.5 m-1.5">
              <PaperAirplaneIcon className='h-7 w-auto fill-rose-500' />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GetStarted;