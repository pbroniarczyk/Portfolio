import PageShell from '../hoc/PageShell';
import Navigation from '../components/Navigation/Navigation';

const Home = () => {
  return (
    <div className="view view--home">
      <h1 className="headline">
        <strong>Paweł Broniarczyk</strong>
      </h1>
      <h2>Frontend Developer</h2>
      <Navigation />
    </div>
  );
};

export default PageShell(Home);
