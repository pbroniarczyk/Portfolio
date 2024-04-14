"use client";

import clsx from "clsx";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { DirectionType } from "../Navigation/types";

import ArrowRightWhiteIcon from "@/assets/icons/arrow-right-white.png";
import ArrowRightNavyIcon from "@/assets/icons/arrow-right-navy.png";
import "./nav-link.scss";

type Props = {
  className?: string;
  direction: DirectionType;
  label: string;
  link: string;
  variant?: "LARGE" | "SMALL";
};

const NavLink: FC<Props> = ({ className, direction, label, link, variant = "LARGE" }) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setHovered((prevState) => !prevState);

  const rootClass = clsx(
    "nav-link w-20 h-20",
    `nav-link--${direction}`,
    `nav-link--${variant}`,
    className
  );

  return (
    <div className={rootClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
      <div className="nav-link__bg" />

      <Link
        href={link}
        className="nav-link__btn relative z-[1] flex items-center justify-center w-20 h-20"
      >
        {variant === "LARGE" ? (
          <span className="nav-link__label">{label}</span>
        ) : (
          <Image
            src={isHovered ? ArrowRightNavyIcon : ArrowRightWhiteIcon}
            alt=""
            className="nav-link__icon w-8"
          />
        )}
      </Link>
    </div>
  );
};

export default NavLink;
