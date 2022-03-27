import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-5 sm:my-7 sm:border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-3">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-9 w-9 object-contain 
          border p-1 mr-3"
        />
        <p className="flex-1 font-semibold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img className="object-cover w-full " src={img} alt="" />

      {/* Button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45 h-6" />
        </div>

        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{username} </span>
        {caption}
      </p>
      {/* comments */}

      {/* imput box */}
      <form className="flex items-center p-2 border-t">
        <EmojiHappyIcon className="h-8" />
        <input
          type="text"
          placeholder="Add a comment"
          className="border-none flex-1 
        focus:ring-0 outline-none"
        />
        <button className="font-bold text-blue-300">Post</button>
      </form>
    </div>
  );
}

export default Post;
