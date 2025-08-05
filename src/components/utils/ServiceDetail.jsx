import { useState } from "react";
import { useParams } from "react-router-dom";

const services = [
  {
    id: "production",
    title: "Production/Video",
    description:
      "Your website is like your digital handshake—it’s the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    heroImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Instagram Reels",
        items: [
          {
            name: "Reel 1",
            image: "https://source.unsplash.com/600x400/?instagram,reel",
            description: "Engaging Instagram reel content.",
          },
          {
            name: "Reel 2",
            image: "https://source.unsplash.com/600x400/?social,video",
            description: "Trendy reels to capture attention.",
          },
          {
            name: "Reel 3",
            image: "https://source.unsplash.com/600x400/?reels,media",
            description: "Creative short videos.",
          },
          {
            name: "Reel 4",
            image: "https://source.unsplash.com/600x400/?short,video",
            description: "Quick content for Instagram.",
          },
        ],
      },
      {
        heading: "Brand Films",
        items: [
          {
            name: "Film 1",
            image: "https://source.unsplash.com/600x400/?brand,film",
            description: "Showcase your brand identity.",
          },
          {
            name: "Film 2",
            image: "https://source.unsplash.com/600x400/?corporate,film",
            description: "High-quality corporate films.",
          },
          {
            name: "Film 3",
            image: "https://source.unsplash.com/600x400/?studio,shoot",
            description: "Studio-based professional films.",
          },
          {
            name: "Film 4",
            image: "https://source.unsplash.com/600x400/?ad,film",
            description: "Creative ad films.",
          },
        ],
      },
      {
        heading: "Campaigns",
        items: [
          {
            name: "Promo Campaign",
            image: "https://source.unsplash.com/600x400/?marketing,campaign",
            description: "Brand promotion through visuals.",
          },
          {
            name: "Festive Campaign",
            image: "https://source.unsplash.com/600x400/?festival,video",
            description: "Festive season ad campaign.",
          },
          {
            name: "Seasonal Campaign",
            image: "https://source.unsplash.com/600x400/?seasonal,ad",
            description: "Targeted seasonal ads.",
          },
          {
            name: "Social Campaign",
            image: "https://source.unsplash.com/600x400/?social,awareness",
            description: "Social message campaigns.",
          },
        ],
      },
      {
        heading: "Exhibitions",
        items: [
          {
            name: "Expo Walkthrough",
            image: "https://source.unsplash.com/600x400/?exhibition,event",
            description: "Immersive exhibition videos.",
          },
          {
            name: "Stall Highlight",
            image: "https://source.unsplash.com/600x400/?stall,video",
            description: "Focused stall showcases.",
          },
          {
            name: "Product Demo",
            image: "https://source.unsplash.com/600x400/?product,showcase",
            description: "Live product demonstrations.",
          },
          {
            name: "Crowd Coverage",
            image: "https://source.unsplash.com/600x400/?crowd,event",
            description: "Event footfall coverage.",
          },
        ],
      },
      {
        heading: "Corporate Videos",
        items: [
          {
            name: "Office Tour",
            image: "https://source.unsplash.com/600x400/?office,tour",
            description: "Showcasing office interiors and culture.",
          },
          {
            name: "CEO Message",
            image: "https://source.unsplash.com/600x400/?ceo,speech",
            description: "Leadership speaking to audience.",
          },
          {
            name: "Annual Review",
            image: "https://source.unsplash.com/600x400/?corporate,annual",
            description: "Year-end business summary.",
          },
          {
            name: "CSR Coverage",
            image: "https://source.unsplash.com/600x400/?csr,video",
            description: "Corporate social responsibility visuals.",
          },
        ],
      },
      {
        heading: "Ad Films",
        items: [
          {
            name: "Product Ad",
            image: "https://source.unsplash.com/600x400/?product,ad",
            description: "Feature-driven ad for product.",
          },
          {
            name: "Lifestyle Ad",
            image: "https://source.unsplash.com/600x400/?lifestyle,ad",
            description: "Ad blending into lifestyle visuals.",
          },
          {
            name: "TV Commercial",
            image: "https://source.unsplash.com/600x400/?tv,commercial",
            description: "Traditional broadcast commercial.",
          },
          {
            name: "YouTube Pre-Roll",
            image: "https://source.unsplash.com/600x400/?youtube,ad",
            description: "Online pre-roll advertisements.",
          },
        ],
      },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "With our Digital Marketing services, you won’t just stand out—you’ll shine. We’ll help you show up where your customers are hanging out, always finding clever ways to boost your visibility and drive those sweet, sweet clicks.",
    heroImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Instagram Graphics",
        items: [
          {
            name: "Post 1",
            image: "https://source.unsplash.com/600x400/?instagram,post",
            description: "Creative Instagram posts.",
          },
          {
            name: "Grid 1",
            image: "https://source.unsplash.com/600x400/?instagram,grid",
            description: "Beautiful grid layouts.",
          },
          {
            name: "Post 2",
            image: "https://source.unsplash.com/600x400/?social,graphic",
            description: "Eye-catching designs.",
          },
          {
            name: "Post 3",
            image: "https://source.unsplash.com/600x400/?art,design",
            description: "Unique digital artwork.",
          },
        ],
      },
      {
        heading: "Branding & Print",
        items: [
          {
            name: "Logo",
            image: "https://source.unsplash.com/600x400/?logo,design",
            description: "Professional logo designs.",
          },
          {
            name: "Brochure",
            image: "https://source.unsplash.com/600x400/?brochure,design",
            description: "Corporate brochures.",
          },
          {
            name: "Magazine",
            image: "https://source.unsplash.com/600x400/?magazine,cover",
            description: "Stylish magazine layouts.",
          },
          {
            name: "Festival",
            image: "https://source.unsplash.com/600x400/?festival,design",
            description: "Festival-themed graphics.",
          },
        ],
      },
      {
        heading: "OOH Media",
        items: [
          {
            name: "Billboard Design",
            image: "https://source.unsplash.com/600x400/?billboard,ad",
            description: "High-visibility billboard graphics.",
          },
          {
            name: "Bus Shelter",
            image: "https://source.unsplash.com/600x400/?bus,shelter",
            description: "Transit media graphics.",
          },
          {
            name: "Standee",
            image: "https://source.unsplash.com/600x400/?standee,print",
            description: "Vertical displays for events.",
          },
          {
            name: "Metro Wrap",
            image: "https://source.unsplash.com/600x400/?metro,ad",
            description: "Train and metro branding visuals.",
          },
        ],
      },
      {
        heading: "Branding Logo",
        items: [
          {
            name: "Minimal Logo",
            image: "https://source.unsplash.com/600x400/?minimal,logo",
            description: "Modern minimalist logo design.",
          },
          {
            name: "Iconic Logo",
            image: "https://source.unsplash.com/600x400/?icon,design",
            description: "Logos with strong symbolic identity.",
          },
          {
            name: "Lettermark",
            image: "https://source.unsplash.com/600x400/?typography,logo",
            description: "Logos made from initials.",
          },
          {
            name: "Abstract Logo",
            image: "https://source.unsplash.com/600x400/?abstract,logo",
            description: "Creative abstract designs.",
          },
        ],
      },
      {
        heading: "Festivals",
        items: [
          {
            name: "Diwali Post",
            image: "https://source.unsplash.com/600x400/?diwali,graphic",
            description: "Vibrant festive wishes design.",
          },
          {
            name: "Holi Poster",
            image: "https://source.unsplash.com/600x400/?holi,colors",
            description: "Colorful Holi greeting creatives.",
          },
          {
            name: "Ganesh Chaturthi",
            image: "https://source.unsplash.com/600x400/?ganpati,art",
            description: "Ganesh-themed posts.",
          },
          {
            name: "Eid Card",
            image: "https://source.unsplash.com/600x400/?eid,design",
            description: "Traditional Eid greeting card.",
          },
        ],
      },
      {
        heading: "Magazine",
        items: [
          {
            name: "Cover Design",
            image: "https://source.unsplash.com/600x400/?magazine,cover",
            description: "Eye-catching magazine covers.",
          },
          {
            name: "Interior Layout",
            image: "https://source.unsplash.com/600x400/?magazine,page",
            description: "Organized internal layouts.",
          },
          {
            name: "Editorial Page",
            image: "https://source.unsplash.com/600x400/?editorial,design",
            description: "Professional editorial spreads.",
          },
          {
            name: "Ad Page",
            image: "https://source.unsplash.com/600x400/?magazine,ad",
            description: "In-magazine brand promotions.",
          },
        ],
      },
      {
        heading: "Brochure",
        items: [
          {
            name: "Tri-Fold",
            image: "https://source.unsplash.com/600x400/?brochure,design",
            description: "Corporate tri-fold brochures.",
          },
          {
            name: "Bi-Fold",
            image: "https://source.unsplash.com/600x400/?flyer,design",
            description: "Sleek bi-fold leaflets.",
          },
          {
            name: "Event Brochure",
            image: "https://source.unsplash.com/600x400/?event,brochure",
            description: "Promotional brochures for events.",
          },
          {
            name: "Product Booklet",
            image: "https://source.unsplash.com/600x400/?product,brochure",
            description: "Product feature booklets.",
          },
        ],
      },
    ],
  },
  {
    id: "live-events",
    title: "Live Events",
    description:
      "Your brand is so much more than a logo—it’s your story, your personality, and your promise to customers. We bring your identity to life in a way that’s bold, beautiful, and 100% you.",
    heroImage:
      "https://images.unsplash.com/photo-1531306728371-4bd7523e12ff?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Weddings & Engagements",
        items: [
          {
            name: "Wedding",
            image: "https://source.unsplash.com/600x400/?wedding,event",
            description: "Elegant wedding visuals.",
          },
          {
            name: "Engagement",
            image: "https://source.unsplash.com/600x400/?engagement,party",
            description: "Beautiful engagement designs.",
          },
          {
            name: "Reception",
            image: "https://source.unsplash.com/600x400/?reception,event",
            description: "Classy reception coverage.",
          },
          {
            name: "Godh Bharai",
            image: "https://source.unsplash.com/600x400/?celebration,event",
            description: "Traditional event coverage.",
          },
        ],
      },
      {
        heading: "Exhibitions & Festivals",
        items: [
          {
            name: "Navratri",
            image: "https://source.unsplash.com/600x400/?navratri,event",
            description: "Colorful Navratri celebrations.",
          },
          {
            name: "Exhibition",
            image: "https://source.unsplash.com/600x400/?exhibition,booth",
            description: "Dynamic exhibition planning.",
          },
          {
            name: "Live Shows",
            image: "https://source.unsplash.com/600x400/?concert,show",
            description: "Vibrant live shows.",
          },
          {
            name: "Corporate Event",
            image: "https://source.unsplash.com/600x400/?corporate,event",
            description: "Professional event coverage.",
          },
        ],
      },
      {
        heading: "Logo Design",
        items: [
          {
            name: "Event Branding",
            image: "https://source.unsplash.com/600x400/?event,logo",
            description: "Unique logos for events.",
          },
          {
            name: "Wedding Logo",
            image: "https://source.unsplash.com/600x400/?wedding,logo",
            description: "Couple-themed custom logos.",
          },
          {
            name: "Festival Logo",
            image: "https://source.unsplash.com/600x400/?festival,logo",
            description: "Traditional event logos.",
          },
          {
            name: "Occasion Logo",
            image: "https://source.unsplash.com/600x400/?celebration,logo",
            description: "Event-specific identities.",
          },
        ],
      },
    ],
  },
  {
    id: "web-development",
    title: "Website/App Development",
    description:
      "Got a brilliant app idea? Let’s make it a reality! Our apps are made with love (and a whole lot of coding).",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Web Development",
        items: [
          {
            name: "UI/UX",
            image: "https://source.unsplash.com/600x400/?ux,design",
            description: "Intuitive user experiences.",
          },
          {
            name: "Frontend",
            image: "https://source.unsplash.com/600x400/?frontend,code",
            description: "Responsive front-end apps.",
          },
          {
            name: "Backend",
            image: "https://source.unsplash.com/600x400/?backend,code",
            description: "Robust backend systems.",
          },
          {
            name: "Mobile Optimization",
            image: "https://source.unsplash.com/600x400/?mobile,app",
            description: "Smooth mobile experience.",
          },
        ],
      },
      {
        heading: "App Solutions",
        items: [
          {
            name: "Custom App",
            image: "https://source.unsplash.com/600x400/?app,development",
            description: "Tailored apps for businesses.",
          },
          {
            name: "App Store Optimization",
            image: "https://source.unsplash.com/600x400/?appstore,seo",
            description: "Boost app visibility.",
          },
          {
            name: "Cross-Platform",
            image: "https://source.unsplash.com/600x400/?crossplatform,app",
            description: "One code, all platforms.",
          },
          {
            name: "Progressive Web App",
            image: "https://source.unsplash.com/600x400/?pwa,app",
            description: "Installable web apps.",
          },
        ],
      },
      {
        heading: "UI/UX for Website",
        items: [
          {
            name: "Wireframe",
            image: "https://source.unsplash.com/600x400/?wireframe,design",
            description: "Low-fidelity wireframes.",
          },
          {
            name: "Prototype",
            image: "https://source.unsplash.com/600x400/?prototype,ui",
            description: "Clickable prototypes.",
          },
          {
            name: "Responsive UX",
            image: "https://source.unsplash.com/600x400/?responsive,design",
            description: "Optimized for all devices.",
          },
          {
            name: "Dark Mode UI",
            image: "https://source.unsplash.com/600x400/?dark,ui",
            description: "Modern dark-themed layouts.",
          },
        ],
      },
      {
        heading: "Custom App Development",
        items: [
          {
            name: "eCommerce App",
            image: "https://source.unsplash.com/600x400/?ecommerce,app",
            description: "Online shopping platforms.",
          },
          {
            name: "Service App",
            image: "https://source.unsplash.com/600x400/?service,app",
            description: "Service booking solutions.",
          },
          {
            name: "Content App",
            image: "https://source.unsplash.com/600x400/?media,app",
            description: "Content delivery apps.",
          },
          {
            name: "IoT App",
            image: "https://source.unsplash.com/600x400/?iot,app",
            description: "Smart device interfaces.",
          },
        ],
      },
      {
        heading: "Mobile Optimization",
        items: [
          {
            name: "AMP Integration",
            image: "https://source.unsplash.com/600x400/?amp,web",
            description: "Speed-optimized mobile pages.",
          },
          {
            name: "Touch UI",
            image: "https://source.unsplash.com/600x400/?touch,interface",
            description: "Mobile-friendly interactions.",
          },
          {
            name: "Fast Loading",
            image: "https://source.unsplash.com/600x400/?mobile,performance",
            description: "Performance-focused dev.",
          },
          {
            name: "SEO Friendly",
            image: "https://source.unsplash.com/600x400/?seo,mobile",
            description: "Mobile-first indexing.",
          },
        ],
      },
      {
        heading: "App Store Optimization",
        items: [
          {
            name: "Keyword Research",
            image: "https://source.unsplash.com/600x400/?seo,keywords",
            description: "Optimized metadata and keywords.",
          },
          {
            name: "App Preview",
            image: "https://source.unsplash.com/600x400/?app,preview",
            description: "Engaging app preview videos.",
          },
          {
            name: "Store Graphics",
            image: "https://source.unsplash.com/600x400/?appstore,design",
            description: "Custom visuals for listing.",
          },
          {
            name: "Review Strategy",
            image: "https://source.unsplash.com/600x400/?review,stars",
            description: "Boosting user engagement.",
          },
        ],
      },
      {
        heading: "Front-end development",
        items: [
          {
            name: "React UI",
            image: "https://source.unsplash.com/600x400/?react,web",
            description: "Fast-reacting web interfaces.",
          },
          {
            name: "Next.js Pages",
            image: "https://source.unsplash.com/600x400/?nextjs,code",
            description: "SSR-ready modern apps.",
          },
          {
            name: "Tailwind UI",
            image: "https://source.unsplash.com/600x400/?tailwind,css",
            description: "Rapid UI styling.",
          },
          {
            name: "Animation",
            image: "https://source.unsplash.com/600x400/?animation,ui",
            description: "Smooth interactive transitions.",
          },
        ],
      },
    ],
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const [activeTag, setActiveTag] = useState("All");

  if (!service) {
    return <div className="p-10 text-red-500">Service not found</div>;
  }

  const sectionHeadings = service.sections.map((section) => section.heading);

  const filteredSections =
    activeTag === "All"
      ? service.sections
      : service.sections.filter((section) => section.heading === activeTag);

  return (
    <div className="w-full bg-[#f7f3ea] min-h-screen">
      <div
        className="relative h-[50vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#101b36]/80 to-[#e86294]/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <div className="inline-flex items-center mb-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-semibold">
            <span className="w-2 h-2 bg-[#e86294] rounded-full mr-2"></span>
            {service.title}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 brico tracking-tight">
            Our <span className="text-[#e86294]">Creative</span> Work
          </h1>
          <p className="max-w-3xl text-xl md:text-2xl font-light leading-relaxed">
            Discover our portfolio of exceptional projects and see how we bring
            ideas to life
          </p>
        </div>
      </div>

      <div className="bg-[#f7f3ea] shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 brico tracking-tight text-[#101b36]">
              Explore by <span className="text-[#e86294]">Category</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose a category to see our specialized work
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTag("All")}
              className={`px-6 py-3 rounded-2xl text-sm font-medium brico tracking-tight transition-all duration-300 ${
                activeTag === "All"
                  ? "bg-[#101b36] text-white"
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-[#101b36] hover:text-[#101b36]"
              }`}
            >
              Show All
            </button>

            {sectionHeadings.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-3 rounded-2xl text-sm font-medium brico tracking-tight transition-all duration-300 ${
                  activeTag === tag
                    ? `${
                        idx % 2 === 0 ? "bg-[#e86294]" : "bg-[#101b36]"
                      } text-white`
                    : `bg-white border-2 border-gray-300 text-gray-700 hover:border-${
                        idx % 2 === 0 ? "[#e86294]" : "[#101b36]"
                      } hover:text-${idx % 2 === 0 ? "[#e86294]" : "[#101b36]"}`
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {filteredSections.map((section, sIdx) => (
          <div key={sIdx} className="mb-20">
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center mb-4 ${
                  sIdx % 2 === 0 ? "bg-[#e86294]" : "bg-[#101b36]"
                } rounded-full px-4 py-2 text-sm font-semibold text-white`}
              >
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 brico tracking-tight text-[#101b36]">
                {section.heading}
              </h2>
              <div
                className={`w-24 h-1 ${
                  sIdx % 2 === 0
                    ? "bg-gradient-to-r from-[#e86294] to-[#d54f7e]"
                    : "bg-gradient-to-r from-[#101b36] to-[#2a3a5a]"
                } mx-auto rounded-full`}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.slice(0, 3).map((item, iIdx) => (
                <div
                  key={iIdx}
                  className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                    iIdx === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      iIdx === 0 ? "h-96 md:h-[600px]" : "h-80 md:h-72"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101b36]/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-[#e86294]/0 group-hover:bg-[#e86294]/20 transition-all duration-300"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2 brico tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.description}
                      </p>
                      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                        <span className="text-sm font-medium mr-2">
                          View Project
                        </span>
                        <div
                          className={`w-8 h-8 ${
                            (sIdx + iIdx) % 2 === 0
                              ? "bg-[#e86294]"
                              : "bg-[#101b36]"
                          } rounded-full flex items-center justify-center transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300`}
                        >
                          <i className="fa-solid fa-arrow-right text-white text-xs"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {section.items.length > 3 && (
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 brico tracking-tight text-[#101b36]">
                  More from {section.heading}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.slice(3).map((item, iIdx) => (
                    <div
                      key={iIdx + 3}
                      className="group bg-[#101b36] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2 brico tracking-tight text-white group-hover:text-[#e86294] transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-gray-300 text-sm mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center text-[#e86294] text-sm font-medium">
                            <span className="mr-2">Learn More</span>
                            <i className="fa-solid fa-arrow-right transform transition-transform duration-300 group-hover:translate-x-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
