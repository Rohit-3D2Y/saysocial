import { ArrowRight } from 'lucide-react';
import { Link } from "react-router";

export default function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:gap-12">
          {/* Top Left: Label and Heading */}
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase text-blue-600">[ABOUT US]</p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Story, Captured in Every Frame.
            </h1>
          </div>
          {/* Horizontal Row of Three Smaller Square Boxes */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:gap-5">
            {/* First Box: Woman with Laptop */}
            <div className="relative h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-96 rounded-[30px] overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/af/1e/ff/af1eff01f27046f2bff12a865f19ecfb.jpg"
                alt="Smiling woman working on a laptop"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Second Box: Group of People */}
            <div className="relative h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-[30px] overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/8a/95/b9/8a95b9e0b049b2179d7282d98364a5a2.jpg"
                alt="Happy group of diverse people lying down"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Third Box: ADZ Blue Square */}
            <div className="h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-[30px] bg-blue-600 flex items-center justify-center">
              <span className="text-white text-4xl md:text-7xl font-bold font-serif tracking-widest">SAY</span>
            </div>
          </div>
          {/* Paragraphs and Call-to-Action */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Bold Paragraph */}
            <p className="text-xl font-medium leading-relaxed md:text-5xl">
              Capturing brilliance in every flash where moments turn timeless, stories shine bright, and creativity
              meets perfection in every shot.
            </p>
            {/* Right Supporting Paragraph and Link */}
            {/* Removed translate-x-64 translate-y-20 for responsiveness */}
            <div className=" hidden md:block space-y-2 translate-x-40 translate-y-40">
              <p className="text-base md:text-2xl text-muted-foreground leading-relaxed ">
                Turning fleeting moments into timeless masterpieces where every flash captures
                emotion, beauty, and perfection. We blend creativity, precision.
              </p>
              <Link
                href="/#"
                className="inline-flex items-center gap-1 text-base font-semibold text-primary hover:underline"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
