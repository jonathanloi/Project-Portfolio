import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "About | Jonathan Loi",
  description: "About Jonathan Loi",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <BackButton />

      <div className="mt-10">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
          About me
        </h1>

        {/* Photo + Text layout */}
        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-14 items-start">
  
          {/* Photo */}
          <div className="shrink-0">
            <div className="w-48 sm:w-56 overflow-hidden rounded-2xl">
              <Image
                src="/Puffin/Profile.jpg"
                alt="Jonathan Loi"
                width={960}
                height={1280}
                className="w-full h-full object-cover object-bottom"
              />
            </div>  
          </div>

          {/* Text content */}
          <div className="max-w-2xl space-y-6 text-neutral-700 leading-relaxed">
            <p>
              I’m Jonathan, an Engineering Product Development graduate from SUTD. 
              My degree taught me to take an idea from sketch to prototype to working product, and that’s the part of building I enjoy most.
            </p>

            <p>
              For my final-year capstone, I worked with clinicians at Changi General Hospital on <strong>Puffin</strong>, a smart inhaler casing and companion app that helps asthma patients track their adherence. 
              I led the mobile app’s frontend and UX in React Native, and reworked the interface several times based on feedback from doctors.
            </p>

            <p>
             Since graduating, I’ve been teaching myself web development with Next.js and TypeScript. This site is part of that, and I built it in the open as I learned.
            </p>

            <p>
              I’m looking for roles where engineers build innovative solutions and solve real-world problems.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-black">
          <p className="text-neutral-600 mb-6">
            Want to work together or just say hi?
          </p>
          <Link
            href="/contact"
            className="inline-block border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors rounded-sm"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
