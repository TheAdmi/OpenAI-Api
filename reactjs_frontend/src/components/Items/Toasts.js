import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

export const LoadingToast = () => (
  toast(
    <div className="max-w-xs border rounded-xl shadow-lg bg-gradient-to-bl from-[#efc6c2] to-[#dd98f3] dark:bg-gradient-bl dark:from-[#000A1F] dark:to-[#000A1F] border-gray-900 dark:border-gray-700" role="alert">
      <div className="flex items-center px-3 py-4">
        <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-rose-500 rounded-full" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="ml-2 dark:text-gray-400 text-gray-900 font-medium">Please wait...</p>
      </div>
    </div>
    , {
      style: { background: 'none', boxShadow: 'none' },
      duration: 300000,
      position: 'top-center',
    })
);


export const TheToast = (text, status) => (
  toast(
    <div className="max-w-xs border rounded-xl shadow-lg bg-gradient-to-bl from-[#efc6c2] to-[#dd98f3] dark:bg-gradient-bl dark:from-[#000A1F] dark:to-[#000A1F] border-gray-900 dark:border-gray-700" role="alert">
      <div className="flex items-center px-3 py-4">
        {
          status === "success" ?
            (<CheckCircleIcon className="w-6 h-6 fill-rose-500" />)
            : (<ExclamationCircleIcon className="w-6 h-6 fill-rose-500" />)
        }
        <p className="ml-2 text-gray-900 dark:text-gray-400 font-medium">{text}</p>
      </div>
    </div>
    , {
      style: { background: 'none', boxShadow: 'none' },
      duration: 2500,
      position: 'top-center',
    })
);
