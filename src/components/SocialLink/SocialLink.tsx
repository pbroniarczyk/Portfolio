import { FC } from "react";
import Image from "next/image";

import type { StaticImageData } from "next/image";

type Props = {
  link: string;
  icon: string | StaticImageData;
  name: string;
};

const SocialLink: FC<Props> = ({ icon, link, name }) => {
  return (
    <a href={link} target="_blank" rel="noopener" className="flex gap-2 items-center group">
      <Image src={icon} alt={name} className="w-[10px] h-[10px]" />
      <span className="group-hover:underline">{name}</span>
    </a>
  );
};

export default SocialLink;
