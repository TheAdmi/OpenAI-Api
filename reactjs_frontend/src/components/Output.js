import { useSelector } from 'react-redux';
import MarkdownPreview from '@uiw/react-markdown-preview';

function Output() {
  const output = useSelector((data) => data.Output);

  return (
    <section>
      {
        output ?
          (
            <div className='min-h-screen px-3 pb-8 sm:px-0'>
              <div id='output' className='p-1 mx-auto'></div>
              <MarkdownPreview className="p-3 m-4 rounded-lg relative w-full xl:w-3/5 lg:w-3/5 md:w-3/4 sm:w-3/4 mx-auto text-gray-900 dark:bg-[#000A1F] border-2 border-gray-900 dark:border-white"
                source={output} />
            </div>
          )
          : ""
      }
    </section>
  )
}

export default Output;