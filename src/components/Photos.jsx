import React from "react";

const clientImages = [
  { src: "https://i.pinimg.com/736x/89/78/b2/8978b231a64e9bc069c9c0417f75e967.jpg", alt: "Client Image 1" },
  { src: "https://i.pinimg.com/736x/c2/9f/c3/c29fc34a4700d44772b80e2539df66c0.jpg", alt: "Client Image 2" },
  { src: "https://i.pinimg.com/736x/22/c3/be/22c3bea88ca3d299d06930ca3b71ba19.jpg", alt: "Client Image 3" },
  { src: "https://i.pinimg.com/1200x/ee/4d/d2/ee4dd2f09c49994ac5044502f2ed9010.jpg", alt: "Client Image 4" },
  { src: "https://i.pinimg.com/736x/06/11/7d/06117d9e94cca2234310f6594ca99efb.jpg", alt: "Client Image 5" },
  { src: "https://i.pinimg.com/736x/97/35/44/973544a303949658279e487414e8cb46.jpg", alt: "Client Image 6" },
  { src: "https://i.pinimg.com/736x/94/df/4f/94df4f8a1c47bcf54c5e6f381339fb59.jpg", alt: "Client Image 7" },
  { src: "https://i.pinimg.com/736x/71/45/65/714565a8a5164d0adf9cca98bd2887b9.jpg", alt: "Client Image 8" },
];

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Inline animation styles */}
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-x {
            display: flex;
            width: max-content;
            animation: scroll-x 30s linear infinite;
          }
        `}
      </style>

      {/* Main Content Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32 text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Some Of The Clients <br /> We&apos;ve Worked With
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            We partner with businesses to create solutions that drive real results. From improving workflows to boosting
            their online presence, these case studies showcase how we&apos;ve helped our clients grow and succeed
            through collaboration and innovation.
          </p>
        </div>

        {/* Client Showcase Section with Infinite Scroll */}
        <div className="mt-12 w-full overflow-hidden py-12">
          <div className="animate-scroll-x space-x-4">
            {/* First + Second set of images for seamless loop */}
            {[...clientImages, ...clientImages].map((image, index) => (
              <div
                key={index}
                className="relative w-[230px] h-[370px] flex-shrink-0 overflow-hidden shadow-lg"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
