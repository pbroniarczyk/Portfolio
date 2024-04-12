import { FC, ReactElement } from "react";

type Props = {
  children: ReactElement;
};

const Template: FC<Props> = ({ children }) => {
  return (
    <div className="view-wrapper bg-custom-background bg-no-repeat bg-position-1">
      <main className="view flex min-h-screen flex-col items-center justify-center p-24">
        {children}
      </main>
    </div>
  );
};

export default Template;
