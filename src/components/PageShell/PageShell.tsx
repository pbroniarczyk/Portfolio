import { FC, ReactNode } from "react";

import "./page-shell.scss";

type Props = {
  children: ReactNode;
};

const PageShell: FC<Props> = ({ children }) => {
  return (
    <div className="view-wrapper" style={{ backgroundImage: `url(/bg.jpg)` }}>
      {children}
    </div>
  );
};

export default PageShell;
