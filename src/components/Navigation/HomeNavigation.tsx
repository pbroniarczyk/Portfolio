import NavLink from "@/components/NavLink";

export default function HomeNavigation() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex gap-14">
        <NavLink label="About" direction="LEFT" link="/about" />
        <NavLink label="Exp" direction="RIGHT" link="/experience" />
      </div>

      <div className="translate-y-[-1rem]">
        <NavLink label="Contact" direction="DOWN" link="/contact" />
      </div>
    </div>
  );
}
