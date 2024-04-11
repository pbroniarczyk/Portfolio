import SquareLink from '../SquareLink/SquareLink';

import './navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation flex flex--collumn">
      <div className="navigation__row flex">
        <SquareLink className="about-btn" label="About" direction="LEFT" link="/about" />
        <SquareLink
          className="experience-btn"
          label="Experience"
          direction="RIGHT"
          link="/experience"
        />
      </div>

      <div className="navigation__row">
        <SquareLink className="contact-btn" label="Contact" direction="DOWN" link="/contact" />
      </div>
    </div>
  );
};

export default Navigation;
