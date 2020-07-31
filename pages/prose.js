import Sidebar from "../components/sidebar";
import Head from "next/head";
import Content from "../components/content";

function prose() {
  return (
    <div className="">
      <Head>
        <title>Prose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar title="Prose" content={[<Content key="2" />]} />
    </div>
  );
}

export default prose;
