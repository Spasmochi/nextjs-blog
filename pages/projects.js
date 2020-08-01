import Head from "next/head";
import Sidebar from "../components/sidebar";
import Projectslist from "../components/projectslist";

import React from "react";

function projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Sidebar title="Projects" content={[<Projectslist />]} />
    </div>
  );
}

export default projects;
