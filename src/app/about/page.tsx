import Image from "next/image";

import { PageNavigation } from "@/components/Navigation";

import ProfileImg from "@/assets/images/profile-photo.png";

export default function About() {
  return (
    <div className="view__about max-w-4xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col-reverse sm:flex-row items-start gap-16">
      <div className="view__content ">
        <PageNavigation direction="RIGHT" label="about" />

        <section className="">
          <div className="bio__content flex flex-col gap-6">
            <p>
              Hi! My name is <span className="marked">Pawel</span>, a frontend developer with 7+
              years of experience who builds things on the internet for people to click on. When I'm
              not sitting in front of my computer, I enjoy board games and painting minis.
            </p>
            <p>
              My interest in web development started way back when I played around with page styles
              for my band's MaySpace page. Add a couple years and I started being serious about it
              when I started learning HTML, CSS and JS (the classics). Since 2017, I build
              interfaces and applications at Emplocity.
            </p>

            <a
              href="/Paweł-Broniarczyk-EN.pdf"
              download="Paweł Broniarczyk EN"
              className="block border border-slate-50 hover:border-yellow-200 hover:text-yellow-200 w-fit px-3 py-2 my-8"
            >
              Download CV
            </a>

            <div className="flex flex-col sm:flex-row gap-4 mt-5 sm:mt-0 sm:gap-16 mr-auto sm:mx-auto">
              <ul className="list-disc pl-4">
                <p className="ml-[-16px]">Tech stack:</p>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>TypeScript</li>
              </ul>

              <ul className="list-disc pl-4">
                <p className="ml-[-16px]">For fun (aka still learning):</p>
                <li>Node.js</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Image
        src={ProfileImg}
        className="mx-auto sm:mr-auto sm:w-full drop-shadow-lg"
        width={150}
        height={150}
        alt="profile image"
      />
    </div>
  );
}
