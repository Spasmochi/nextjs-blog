import Head from "next/head";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
      </main>
    </div>
  );
}
