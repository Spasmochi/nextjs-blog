import Sidebar from "../components/sidebar";
import Head from "next/head";
import TeamProfiles from "../components/teamprofiles";
function contacts() {
  return (
    <div>
      <Head>
        <title>contacts</title>
      </Head>
      <Sidebar title="Contacts" content={[<TeamProfiles key="4" />]} />
    </div>
  );
}

export default contacts;
