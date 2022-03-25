import Stories from "./Stories";

function Feed() {
  return (
    <main
      className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl
    xl:grid-cols-3 xl:max-w-4xl mx-auto"
    >
      {/* Left */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>

      {/* Right */}
      <section>
        {/* Mini profile */}

        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
