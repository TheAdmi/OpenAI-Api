import ModeSwitcher from "./Items/ModeSwitcher";
import { OpenAi } from './Items/Logos';

function Navbar() {
  return (
    <nav className="p-6 mx-auto justify-between">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold fill-gray-800 dark:fill-white lg:text-3xl0 pb-1">
          <OpenAi />
        </div>
        <span className="p-2 backdrop-blur-sm bg-white/50 hover:bg-white/20 shadow-xl text-white dark:bg-white/20 dark:hover:bg-white/30 rounded-lg">
          <ModeSwitcher />
        </span>
      </div>
    </nav>
  )
}

export default Navbar;