import Head from "next/head";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NextJS Test App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="components/all.css" />
      </Head>

      <main>
        <Sidebar />
      </main>
    </div>
  );
}
