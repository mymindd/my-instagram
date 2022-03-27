import { useState, useEffect } from "react";
import faker from "@faker-js/faker";
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          className="flex items-center justify-between mt-3"
          key={profile.id}
        >
          <img className="w-8 h-8 rounded-full" src={profile.avatar} alt="" />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-sm  text-gray-400">Follow by xxx + 50 more</h3>
          </div>
          <button className="text-blue-500 text-sm font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
