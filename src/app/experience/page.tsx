import { PageNavigation } from "@/components/Navigation";

import { projects } from "./projects";

export default function Experience() {
  return (
    <div className="view__experience">
      <PageNavigation direction="LEFT" label="experience" />

      <section className="flex items-start gap-6 max-w-4xl">
        <div className="flex flex-col gap-6">
          <p>
            Since 2017 I have been working at{" "}
            <a
              href="https://emplocity.com/en/"
              className="marked hover:underline"
              target="_blank"
              rel="noopener"
            >
              Emplocity
            </a>
            , where I create and maintain applications using the React library and TypeScript, or
            for other clients. <br />I work in the SCRUM methodology using Jira to manage project
            tasks together with other developers, designer and project manager. We have developed a
            workflow consisting in automatic application deployment with Jenkins
          </p>

          <p>
            In addition to working on applications used by our clients, I also work directly for
            Emplocity's clients on the development of their applications such as application
            supporting the submission of applications and their approval by ministry
            representatives. A platform for purchasing advertising space in sports (e.g. banners on
            stadiums, space on athletes' uniforms, etc.). Porting the web application-game to the
            desktop version with the possibility of saving the results on disk for the purposes of
            the competition.
          </p>

          <p className="text-xl font-bold mt-10">Main projects I've worked on:</p>

          <div className="block sm:grid grid-cols-4 gap-y-6 sm:px-5">
            {projects.map((project) => [
              <h4 className="font-bold text-l text-left">{project.name}</h4>,
              <p className="col-span-3 mb-5 sm:mb-0 sm:ml-5">{project.description}</p>,
            ])}
          </div>
        </div>
      </section>
    </div>
  );
}
