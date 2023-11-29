import { Github } from "react-bootstrap-icons";

function GithubButton() {
  return (
    <div className="fixed bottom-3 right-3 lg:right-4 lg:bottom-4">
      <a href="https://github.com/abdellah-agrm" className="inline-flex items-center lg:mr-0 p-2 backdrop-blur-sm bg-white/50 hover:bg-white/20 text-white dark:bg-white/20 dark:hover:bg-white/30 shadow-xl rounded-lg sm:p-3">
        <Github className="h-6 w-6 fill-gray-900 dark:fill-white" />
        <p className="ml-3 font-medium tracking-wide text-gray-900 dark:text-white truncate">My github</p>
      </a>
    </div>
  )
}

export default GithubButton;
