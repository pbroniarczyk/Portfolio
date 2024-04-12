import { FC, ReactNode } from "react";

import "./page-shell.scss";

type Props = {
  children: ReactNode;
};

const PageShell: FC<Props> = ({ children }) => {
  return (
    <div className="view-wrapper" style={{ backgroundImage: `url(/bg.jpg)` }}>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {children}
      </main>
    </div>
  );
};

export default PageShell;
