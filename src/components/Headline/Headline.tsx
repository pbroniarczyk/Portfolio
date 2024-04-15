import { FC } from "react";

type Props = {
  label: string;
};

const Headline: FC<Props> = ({ label }) => {
  return (
    <div className="headline">
      <h3 className="headline__label font-semibold capitalize text-5xl">{label}</h3>
    </div>
  );
};

export default Headline;
