import React from 'react';
import { useParams } from 'react-router-dom';

// Updated services data with tags as objects having name, image, and description
const services = [
  {
    id: "production",
    title: "Production/Video",
    description:
      "Your website is like your digital handshake—it’s the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    tags: [
      {
        name: "Insta Reels",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
        description: "Short, engaging videos perfect for Instagram stories and reels.",
      },
      {
        name: "Brand films",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
        description: "High-quality films that build your brand identity.",
      },
      {
        name: "Campaigns",
        image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80",
        description: "Strategic marketing campaigns to reach your audience.",
      },
      {
        name: "Exhibitions",
        image: "https://images.unsplash.com/photo-1531306728371-4bd7523e12ff?auto=format&fit=crop&w=600&q=80",
        description: "Showcasing your brand at events with impact.",
      },
      {
        name: "Corporate Videos",
        image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=600&q=80",
        description: "Professional videos for company promotion.",
      },
      {
        name: "Ad Films",
        image: "https://images.unsplash.com/photo-1532374382149-9822f06ff460?auto=format&fit=crop&w=600&q=80",
        description: "Creative commercials that grab attention.",
      },
    ],
    bg: "bg-[#e86294]",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "With our Digital Marketing services, you won’t just stand out—you’ll shine. We’ll help you show up where your customers are hanging out, always finding clever ways to boost your visibility and drive those sweet, sweet clicks.",
    tags: [
      {
        name: "Insta posts",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        description: "Creative and eye-catching Instagram posts.",
      },
      {
        name: "Insta grids",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        description: "Beautiful grid layouts that tell your brand story.",
      },
      {
        name: "OOH Media",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        description: "Out-of-home advertising media design.",
      },
      {
        name: "Branding Logo",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
        description: "Unique logo designs that define your brand.",
      },
      {
        name: "Festivals",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
        description: "Festival-themed graphic creations.",
      },
      {
        name: "Magazine",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
        description: "Attractive layouts and designs for magazines.",
      },
      {
        name: "Brochure",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
        description: "Professional brochure designs to promote your products.",
      },
    ],
    bg: "bg-[#fae0be]",
  },
  {
    id: "live-events",
    title: "Live Events",
    description:
      "Your brand is so much more than a logo—it’s your story, your personality, and your promise to customers. We bring your identity to life in a way that’s bold, beautiful, and 100% you.",
    tags: [
      {
        name: "Logo Design",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        description: "Custom logos for your events and occasions.",
      },
      {
        name: "Weddings",
        image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80",
        description: "Elegant wedding event graphics and coverage.",
      },
      {
        name: "Exhibitions",
        image: "https://images.unsplash.com/photo-1531306728371-4bd7523e12ff?auto=format&fit=crop&w=600&q=80",
        description: "Dynamic exhibition event planning and design.",
      },
      {
        name: "Events (navratri)",
        image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80",
        description: "Colorful and vibrant Navratri event coordination.",
      },
      {
        name: "Godh Bharai",
        image: "https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&w=600&q=80",
        description: "Cultural celebration coverage and design.",
      },
      {
        name: "Engagements",
        image: "https://images.unsplash.com/photo-1514516872009-55e2bbbf1378?auto=format&fit=crop&w=600&q=80",
        description: "Beautiful engagement event planning and visuals.",
      },
    ],
    bg: "bg-[#fafabf]",
  },
  {
    id: "web-development",
    title: "Website/App Development",
    description:
      "Got a brilliant app idea? Let’s make it a reality! Our apps are made with love (and a whole lot of coding).",
    tags: [
      {
        name: "UI/UX for Website",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        description: "User-centric design for intuitive experiences.",
      },
      {
        name: "Custom App Development",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
        description: "Tailored applications for your business needs.",
      },
      {
        name: "Mobile Optimization",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        description: "Optimizing performance for all mobile devices.",
      },
      {
        name: "App Store Optimization",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
        description: "Boost your app’s visibility in app stores.",
      },
      {
        name: "Front-end development",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
        description: "Building engaging and responsive front-ends.",
      },
    ],
    bg: "bg-[#f6c2f4]",
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="p-10 text-red-500">Service not found</div>;
  }

  return (
    <div className="px-20 py-10">
      <div className="flex flex-col">
        <h1 className="text-[#e86294] text-xl brico mb-6">Your trusted brand on us</h1>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-5xl brico max-w-3xl">{service.title}</h2>
          <div>circle circle</div>
        </div>

        <p className="mb-10 max-w-3xl">{service.description}</p>

        <div className="flex flex-wrap gap-5 py-20 justify-center items-center">
          {service.tags.map((tag, idx) => (
            <div
              key={idx}
              className={`h-[600px] w-[23%] bg-gray-300 rounded-3xl flex flex-col overflow-hidden shadow-lg`}
            >
              <div className="h-1/2 w-full px-5 flex flex-col p-10 font-semibold text-left">
                <div className='flex gap-5 mb-5'>
                  <div>popular</div>
                  <div>best</div>
                </div>
                <h3 className="brico text-4xl mb-2">{tag.name}</h3>
                <p className="text-sm text-gray-700">{tag.description}</p>
              </div>
              <div className="h-1/2 w-full">
                <img
                  src={tag.image}
                  alt={`${service.title} - ${tag.name}`}
                  className="w-full h-full object-cover rounded-t-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
