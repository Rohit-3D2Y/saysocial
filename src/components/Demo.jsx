import React from "react";

const bentoData = [
  {
    title: "Create and schedule content quicker.",
    button: "Create Post",
    bg: "bg-[#c0ecbf] text-3xl",
    col: "col-span-1",
    row: "row-span-2",
    class:"text-5xl tracking-tighter font-normal px-10 py-10 leading-10 brico ",
    extra: (
      <div className="mt-8">
        <button className="px-4 py-2 bg-[#e86294] text-xl tracking-normal rounded-full font-medium text-white flex items-center gap-2 relative">
          Create Post <span className="text-purple-200 text-lg"><i className="fa-solid fa-star-of-life"></i></span>
          <span className="absolute top-8 left-2/3 text-indigo-500 text-3xl"><i className="fa-solid fa-arrow-pointer"></i></span>
        </button>
      </div>
    ),
  },
  {
    title: "Social Media 10x Faster with AI",
    subtitle: "Over 4,000 5-star reviews",
    bg: "bg-[#e86294] text-white",
    center: true,
    stars: true,
    class:"text-3xl brico text-center",
    col: "col-span-2",
  
    row: "row-span-1",
  },
  {
    title: "Schedule to social media.",
    subtitle:
      "Optimize post timings to publish content at the perfect time for your audience.",
    img: "/schedule-graph.png",
    bg: "bg-[#101b36] text-white",
    class:"",
    col: "col-span-1",
    row: "row-span-2",
  },
  {
    title: "Write your content using AI.",
    img: "/ai-chat.png",
    bg: "bg-[#fafabf]",
    class:"",
    col: "col-span-1",
    row: "row-span-2",
  },
  {
    title: "Manage multiple accounts and platforms.",
    icons: ["/ig.png", "/x.png"],
    bg: "bg-[#fae0be]",
    class:"",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    title: "Maintain a consistent posting schedule.",
    img: "/calendar.png",
    bg: "bg-[#fafabf]",
    col: "col-span-1",
    row: "row-span-1",
    class:"",
  },
  {
    title: "> 56% faster audience growth",
    img: "/avatars.png",
    bg: "bg-[#c0ecbf]",
    class:"",
    col: "col-span-1",
    row: "row-span-1",
  },
  {
    title: "Grow followers with non-stop content.",
    img: "/follower-growth.png",
    bg: "bg-[#7C5CFC] text-white",
    class:"",
    col: "col-span-1",
    row: "row-span-1",
  },
];

const BentoSocial = () => {
  return (
    <div className="min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[minmax(150px,_1fr)]">
        {bentoData.map((box, i) => (
          <div
            key={i}
            className={`rounded-2xl p-4 ${box.bg} ${box.col} ${box.row} ${box.class} flex flex-col justify-between overflow-hidden shadow-md`}
          >
            <div>
              <h2>
                {box.title}
              </h2>
              {box.subtitle && (
                <p className="text-sm mt-2 opacity-80">{box.subtitle}</p>
              )}
              {box.stars && (
                <div className="mt-3 flex gap-1 justify-center">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx}>🌟 </span>
                    ))}
                </div>
              )}
              {box.extra && box.extra}
              {box.icons && (
                <div className="flex gap-2 mt-4">
                  {box.icons.map((icon, idx) => (
                    <img key={idx} src={icon} alt="icon" className="w-6 h-6" />
                  ))}
                </div>
              )}
            </div>
            {box.img && (
              <img
                src={box.img}
                alt="graphic"
                className="mt-4 max-h-28 object-contain self-end"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoSocial;
