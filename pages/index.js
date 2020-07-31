import Head from "next/head";
import Sidebar from "../components/sidebar";
import GridList from "../components/gridList";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar title="Dashboard" content={[<GridList />]} />
      </main>
    </div>
  );
}
