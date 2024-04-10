import React from 'react';

function PageShell(ViewComponent: React.ElementType) {
  return class Component extends React.Component {
    render() {
      return (
        <div className="view-wrapper">
          <ViewComponent />
        </div>
      );
    }
  };
}

export default PageShell;
