import Image from "next/image";
import {
  SearchIcon,
  ChatIcon,
  PlusIcon,
  GlobeIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="sm:h-18 h-14 top-0 z-50 sticky bg-white border-b">
      <div className="flex justify-between max-w-6xl mx-3 xl:mx-auto pb-2">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative w-24 mt-3 sm:mt-0 cursor-pointer"
        >
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
          className="flex items-center mt-2 
        justify-end space-x-4"
        >
          {session ? (
            <>
              <HomeIcon
                onClick={() => router.push("/")}
                className="h-8 w-8 cursor-pointer"
              />
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
                onClick={signOut}
                src={session?.user?.image}
                className="h-8 w-8 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <>
              <button onClick={signIn}> Sign In</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
