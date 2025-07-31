import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "production",
    title: "Production/Video ",
    description:
      "Your website is like your digital handshake—it’s the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    tags: [
      "Insta Reels",
      "Brand films",
      "Campaigns",
      "Exhibitions",
      "Corporate Videos",
      "Ad Films",
    ],
    bg: "bg-[#c0ecbf]",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "With our Digital Marketing services, you won’t just stand out—you’ll shine. We’ll help you show up where your customers are hanging out, always finding clever ways to boost your visibility and drive those sweet, sweet clicks.",
    tags: [
      "Insta posts",
      "Insta grids",
      "OOH Media",
      "Branding Logo",
      "Festivals",
      "Magazine",
      "Brochure",
    ],
    bg: "bg-[#fae0be]",
  },
  {
    id: "live-events",
    title: "Live Events",
    description:
      "Your brand is so much more than a logo—it’s your story, your personality, and your promise to customers. We bring your identity to life in a way that’s bold, beautiful, and 100% you.",
    tags: [
      "Logo Design",
      "Weddings",
      "Exhibitions",
      "Events (navratri)",
      "Godh Bharai",
      "Engagements",
    ],
    bg: "bg-[#fafabf]",
  },
  {
    id: "web-development",
    title: "Website/App Development",
    description:
      "Got a brilliant app idea? Let’s make it a reality! Our apps are made with love (and a whole lot of coding).",
    tags: [
      "UI/UX for Website",
      "Custom App Development",
      "Mobile Optimization",
      "App Store Optimization",
      "Front-end development",
    ],
    bg: "bg-[#f6c2f4]",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].id);
  const sectionRefs = useRef({});

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      for (let service of services) {
        const section = sectionRefs.current[service.id];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center mb-2 bg-[#e86294] rounded-2xl pr-4 text-sm font-semibold text-white gap-2">
          <span className="inline-flex items-center">
            <span className="w-8 h-8 mr-1 bg-[#101b36] rounded-full flex justify-center items-center">
              <i className="fa-regular fa-star"></i>
            </span>
          </span>
          Services
        </div>
        <h2 className="text-3xl md:text-5xl brico tracking-tight text-[#101b36]">
          Services <span className="text-[#e86294]">designed</span> to help your
          brand{" "}
          <span className="text-black">
            <span className="text-[#e86294]">shine</span> brighter.
          </span>
        </h2>
      </div>
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 gap-10 py-10">
        {/* Left Sticky Nav */}
        <aside className="w-full md:w-1/4 sticky top-28 h-fit text-xl brico tracking-tight space-y-2 hidden md:block">
          {services.map((service) => (
            <div
              key={service.id}
              className={`cursor-pointer px-2 py-1 rounded-md transition-all ${
                active === service.id
                  ? "font-medium text-[#101b36]"
                  : "text-gray-500"
              }`}
              onClick={() => {
                sectionRefs.current[service.id]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {active === service.id ? "→ " : ""}
              {service.title}
            </div>
          ))}
        </aside>

        {/* Right Scrollable Services */}
        <div className="w-full md:w-3/4 space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => (sectionRefs.current[service.id] = el)}
              className="rounded-2xl p-10 bg-[#101b36] text-white"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 brico tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-200 mt-5">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-10">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className=" border-2 border-gray-400 text-sm px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="mt-10 brico tracking-tight items-center bg-[#e86294] cursor-pointer transform transition-transform duration-300 hover:scale-105 text-white text-xl font-medium py-4 px-4 rounded-2xl"
                onClick={() => navigate(`${service.id}`)}
              >
                View Details
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
