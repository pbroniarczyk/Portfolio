import Image from "next/image";

import { PageNavigation } from "@/components/Navigation";

import ProfileImg from "@/assets/images/profile-photo.png";

export default function About() {
  return (
    <div className="view__about max-w-4xl flex flex-col-reverse sm:flex-row items-start gap-16">
      <div className="view__content ">
        <PageNavigation direction="RIGHT" label="about" />

        <section className="max-w-4xl">
          <div className="bio__content flex flex-col gap-6">
            <p>
              Hello Wo... <br />
              Hi! My name is Paweł and (...)
            </p>
            <p>
              My interest in web development started way back when I played around with page styles
              for my band's MaySpace page. Add a couple years and I started being serious about it
              when I started learning HTML, CSS and JS (the classics). Since 2017, I build
              interfaces and applications at Emplocity.
            </p>

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
        className="mx-auto sm:mr-auto"
        width={150}
        height={150}
        alt="profile image"
      />
    </div>
  );
}
