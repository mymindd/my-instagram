import { useSession, signOut } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex items-center justify-between mt-13 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src={session.user.image}
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-semibold">{session.user.username}</h2>
        <h3 className="text-sm text-gray-400">{session.user.name}</h3>
      </div>

      <button onClick={signOut} className="text-blue-500 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
