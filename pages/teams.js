import Sidebar from "../components/sidebar";
import Head from "next/head";
import TeamProfiles from "../components/teamprofiles";
function teams() {
  return (
    <div>
      <Head>
        <title>Teams</title>
      </Head>
      <Sidebar title="Teams" Content={[<TeamProfiles key="8" />]} />
    </div>
  );
}

export default teams;
