import Head from "next/head";
import Sidebar from "../components/sidebar";
import GridList from "../components/gridList";
import CardHeading from "../components/cards/cardheadingaction";
import Card from "../components/cards/card";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar
          title="Dashboard"
          content={[<GridList key="5" />, <Card content={[<CardHeading />]} />]}
        />
      </main>
    </div>
  );
}
