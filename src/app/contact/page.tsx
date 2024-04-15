import { PageNavigation } from "@/components/Navigation";
import SocialLink from "@/components/SocialLink";

import githubIcon from "@/assets/icons/github-icon.png";
import linkedinIcon from "@/assets/icons/linkedin-icon.png";

export default function Contact() {
  return (
    <div className="view__contact">
      <div className="page-wrapper max-[370px]:flex max-[370px]:justify-center">
        <PageNavigation direction="UP" label="contact" />
      </div>

      <section className="flex items-start gap-6 max-w-4xl">
        <div className="bio__content flex flex-col gap-12 sm:gap-8">
          <p>
            If you have any <span className="marked">questions</span> feel free
            to&nbsp;contact&nbsp;me.
            <br />
            You can find me on social media or simply write&nbsp;me&nbsp;an&nbsp;
            <a className="marked-link" href="mailto:pbroniarczyk@outlook.com">
              email
            </a>
            .
          </p>

          <div className="flex justify-center gap-16 sm:gap-6">
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
