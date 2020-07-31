import Sidebar from "../components/sidebar";
import Head from "next/head";

function teams() {
  return (
    <div>
      <Head>
        <title>Teams</title>
      </Head>
      <Sidebar title="Teams" Content={[]} />
    </div>
  );
}

export default teams;
