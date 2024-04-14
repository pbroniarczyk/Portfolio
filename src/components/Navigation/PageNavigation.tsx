import { FC } from "react";

import type { DirectionType } from "./types";

import Headline from "@/components/Headline";
import SquareLink from "@/components/NavLink";

type Props = {
  direction: DirectionType;
  label: string;
};

const PageNavigation: FC<Props> = ({ direction, label }) => {
  return (
    <div className="view__navigation flex justify-start gap-6 items-center mb-10 ">
      <SquareLink direction={direction} label="back" link="/" variant="SMALL" />
      <Headline label={label} />
    </div>
  );
};

export default PageNavigation;
