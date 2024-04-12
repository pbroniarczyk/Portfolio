import SquareLink from "../SquareLink/SquareLink";

export default function Navigation() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex gap-14">
        <SquareLink label="About" direction="LEFT" link="/about" />
        <SquareLink label="Experience" direction="RIGHT" link="/experience" />
      </div>

      <div className="translate-y-[-1rem]">
        <SquareLink label="Contact" direction="DOWN" link="/contact" />
      </div>
    </div>
  );
}
