import Headline from "@/components/Headline/Headline";
import SquareLink from "@/components/SquareLink/SquareLink";

export default function Experience() {
  return (
    <div className="view__experience">
      <div className="view__navigation flex justify-start gap-6 items-center mb-10 ">
        <SquareLink direction="LEFT" label="back" link="/" variant="SMALL" />
        <Headline label="experience" />
      </div>

      <section className="flex items-start gap-6 max-w-4xl">
        <div className="bio__content flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  );
}
