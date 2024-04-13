"use client";

import clsx from "clsx";
import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { animatePageOut } from "@/animations";

import ArrowRightWhiteIcon from "@/assets/icons/arrow-right-white.png";
import ArrowRightNavyIcon from "@/assets/icons/arrow-right-navy.png";
import "./square-link.scss";

type Props = {
  className?: string;
  direction: "LEFT" | "RIGHT" | "UP" | "DOWN";
  label: string;
  link: string;
  variant?: "LARGE" | "SMALL";
};

const SquareLink: FC<Props> = ({ className, direction, label, link, variant = "LARGE" }) => {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(link, router);
  };

  const [isHovered, setHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setHovered((prevState) => !prevState);

  const rootClass = clsx(
    "square-link w-20 h-20",
    `square-link--${direction}`,
    `square-link--${variant}`,
    className
  );
  const labelClass = clsx("square-link__label-wrapper", {
    "square-link__label-wrapper--visible": isHovered,
  });

  return (
    <div className={rootClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
      <button className="block w-20 h-20" onClick={handleClick}>
        <Image src={isHovered ? ArrowRightNavyIcon : ArrowRightWhiteIcon} alt="" className="w-8" />

        <div className={labelClass}>
          <span className="square-link__label">{label}</span>
        </div>
      </button>
    </div>
  );
};

export default SquareLink;
