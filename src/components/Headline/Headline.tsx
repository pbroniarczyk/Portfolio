import { FC } from "react";

type Props = {
  label: string;
};

const Headline: FC<Props> = ({ label }) => {
  return (
    <div className="headline">
      <h3 className="headline__label text-4xl font-semibold capitalize">{label}</h3>
    </div>
  );
};

export default Headline;
