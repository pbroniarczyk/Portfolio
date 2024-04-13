import Headline from "@/components/Headline/Headline";
import SquareLink from "@/components/SquareLink/SquareLink";
import SocialLink from "@/components/SocialLink/SocialLink";

import githubIcon from "@/assets/icons/github-icon.png";
import linkedinIcon from "@/assets/icons/linkedin-icon.png";

export default function Contact() {
  return (
    <div className="view__contact">
      <div className="view__navigation flex justify-start gap-6 items-center mb-10 ">
        <Headline label="contact" />
        <SquareLink direction="UP" label="back" link="/" variant="SMALL" />
      </div>

      <section className="flex items-start gap-6 max-w-4xl">
        <div className="bio__content flex flex-col gap-6">
          <p>
            If you have any <span className="marked">questions</span> feel free to contact me.
            <br />
            You can find me on social media or simply write me an{" "}
            <a className="marked hover:underline" href="mailto:pbroniarczyk@outlook.com">
              email
            </a>
            .
          </p>

          <div className="flex justify-center gap-6">
            <SocialLink icon={githubIcon} link="https://github.com/pbroniarczyk" name="GitHub" />
            <SocialLink
              icon={linkedinIcon}
              link="https://linkedin.com/in/pawelbroniarczyk"
              name="LinkedIn"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
