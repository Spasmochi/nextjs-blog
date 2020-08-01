import Sidebar from "../components/sidebar";
import Projectslist from "../components/projectslist";

import React from "react";

function projects() {
  return (
    <div>
      <Sidebar title="Projects" content={[<Projectslist />]} />
    </div>
  );
}

export default projects;
