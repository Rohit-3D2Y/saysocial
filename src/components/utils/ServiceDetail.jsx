import React from "react";
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
          { name: "Reel 1", image: "https://source.unsplash.com/600x400/?instagram,reel", description: "Engaging Instagram reel content." },
          { name: "Reel 2", image: "https://source.unsplash.com/600x400/?social,video", description: "Trendy reels to capture attention." },
          { name: "Reel 3", image: "https://source.unsplash.com/600x400/?reels,media", description: "Creative short videos." },
          { name: "Reel 4", image: "https://source.unsplash.com/600x400/?short,video", description: "Quick content for Instagram." },
        ],
      },
      {
        heading: "Brand Films",
        items: [
          { name: "Film 1", image: "https://source.unsplash.com/600x400/?brand,film", description: "Showcase your brand identity." },
          { name: "Film 2", image: "https://source.unsplash.com/600x400/?corporate,film", description: "High-quality corporate films." },
          { name: "Film 3", image: "https://source.unsplash.com/600x400/?studio,shoot", description: "Studio-based professional films." },
          { name: "Film 4", image: "https://source.unsplash.com/600x400/?ad,film", description: "Creative ad films." },
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
          { name: "Post 1", image: "https://source.unsplash.com/600x400/?instagram,post", description: "Creative Instagram posts." },
          { name: "Grid 1", image: "https://source.unsplash.com/600x400/?instagram,grid", description: "Beautiful grid layouts." },
          { name: "Post 2", image: "https://source.unsplash.com/600x400/?social,graphic", description: "Eye-catching designs." },
          { name: "Post 3", image: "https://source.unsplash.com/600x400/?art,design", description: "Unique digital artwork." },
        ],
      },
      {
        heading: "Branding & Print",
        items: [
          { name: "Logo", image: "https://source.unsplash.com/600x400/?logo,design", description: "Professional logo designs." },
          { name: "Brochure", image: "https://source.unsplash.com/600x400/?brochure,design", description: "Corporate brochures." },
          { name: "Magazine", image: "https://source.unsplash.com/600x400/?magazine,cover", description: "Stylish magazine layouts." },
          { name: "Festival", image: "https://source.unsplash.com/600x400/?festival,design", description: "Festival-themed graphics." },
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
          { name: "Wedding", image: "https://source.unsplash.com/600x400/?wedding,event", description: "Elegant wedding visuals." },
          { name: "Engagement", image: "https://source.unsplash.com/600x400/?engagement,party", description: "Beautiful engagement designs." },
          { name: "Reception", image: "https://source.unsplash.com/600x400/?reception,event", description: "Classy reception coverage." },
          { name: "Godh Bharai", image: "https://source.unsplash.com/600x400/?celebration,event", description: "Traditional event coverage." },
        ],
      },
      {
        heading: "Exhibitions & Festivals",
        items: [
          { name: "Navratri", image: "https://source.unsplash.com/600x400/?navratri,event", description: "Colorful Navratri celebrations." },
          { name: "Exhibition", image: "https://source.unsplash.com/600x400/?exhibition,booth", description: "Dynamic exhibition planning." },
          { name: "Live Shows", image: "https://source.unsplash.com/600x400/?concert,show", description: "Vibrant live shows." },
          { name: "Corporate Event", image: "https://source.unsplash.com/600x400/?corporate,event", description: "Professional event coverage." },
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
          { name: "UI/UX", image: "https://source.unsplash.com/600x400/?ux,design", description: "Intuitive user experiences." },
          { name: "Frontend", image: "https://source.unsplash.com/600x400/?frontend,code", description: "Responsive front-end apps." },
          { name: "Backend", image: "https://source.unsplash.com/600x400/?backend,code", description: "Robust backend systems." },
          { name: "Mobile Optimization", image: "https://source.unsplash.com/600x400/?mobile,app", description: "Smooth mobile experience." },
        ],
      },
      {
        heading: "App Solutions",
        items: [
          { name: "Custom App", image: "https://source.unsplash.com/600x400/?app,development", description: "Tailored apps for businesses." },
          { name: "App Store Optimization", image: "https://source.unsplash.com/600x400/?appstore,seo", description: "Boost app visibility." },
          { name: "Cross-Platform", image: "https://source.unsplash.com/600x400/?crossplatform,app", description: "One code, all platforms." },
          { name: "Progressive Web App", image: "https://source.unsplash.com/600x400/?pwa,app", description: "Installable web apps." },
        ],
      },
    ],
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="p-10 text-red-500">Service not found</div>;
  }

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div
        className="relative h-[40vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="max-w-2xl text-lg md:text-xl">{service.description}</p>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="px-6 md:px-20 py-12 space-y-16">
        {service.sections.map((section, sIdx) => (
          <div key={sIdx}>
            <h2 className="text-3xl font-semibold mb-6">{section.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    <a
                      href="#"
                      className="text-indigo-600 text-sm font-medium mt-3 inline-block"
                    >
                      View More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
