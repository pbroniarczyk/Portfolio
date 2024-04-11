import clsx from 'clsx';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg.svg';
import './square-link.scss';

type Props = {
  className: string;
  direction: 'LEFT' | 'RIGHT' | 'UP' | 'DOWN';
  label: string;
  link: string;
};

const SquareLink: FC<Props> = ({ className, direction, label, link }) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setHovered((prevState) => !prevState);

  const rootClass = clsx('square-link', `square-link--${direction}`, className);
  const labelClass = clsx('square-link__label-wrapper', {
    'square-link__label-wrapper--visible': isHovered,
  });

  return (
    <div className={rootClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
      <Link to={link}>
        <ArrowRightIcon />

        <div className={labelClass}>
          <span className="square-link__label">{label}</span>
        </div>
      </Link>
    </div>
  );
};

export default SquareLink;
