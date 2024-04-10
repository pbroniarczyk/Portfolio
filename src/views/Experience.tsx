import { Link } from 'react-router-dom';

import PageShell from '../hoc/PageShell';

const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
      <p>
        <Link to="/experience">Experience</Link>
      </p>
    </div>
  );
};

export default PageShell(Experience);
