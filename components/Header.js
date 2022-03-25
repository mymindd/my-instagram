import Image from "next/image";
import {
  SearchIcon,
  ChatIcon,
  PlusIcon,
  GlobeIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="sm:h-18 h-14 top-0 z-50 sticky bg-white border-b">
      <div className="flex justify-between max-w-6xl mx-3 xl:mx-auto pb-2">
        {/* left */}
        <div className="relative w-24 mt-3 sm:mt-0 cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* center */}
        <div className="max-w-xs">
          <div className="relative hidden sm:inline-grid mt-1 p-2 rounded-md">
            <div className="absolute inset-y-0 pl-5 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-100 block w-full pl-10 sm:text-sm 
            border-none focus:ring-white rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div
          className="flex items-center mt-3 
        justify-end space-x-4"
        >
          <HomeIcon className="h-8 w-8 cursor-pointer" />
          <div className="relative">
            <ChatIcon className="h-8 w-8 cursor-pointer" />
            <div
              className="absolute -top-2 -right-1 
            text-xs h-5 w-5 bg-red-500 rounded-full 
            flex items-center
            justify-center text-white"
            >
              3
            </div>
          </div>
          <PlusIcon className="h-6 w-6 cursor-pointer border-2 border-black rounded-md" />
          <GlobeIcon className="h-8 w-8 cursor-pointer" />
          <HeartIcon className="h-8 w-8 cursor-pointer" />
          <img
            src="data:image/jpeg;base64,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"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;