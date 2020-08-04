import Sidebar from "../components/sidebar";
import Head from "next/head";
import Calendar from "../components/calendar/calendar";
function contacts() {
  return (
    <div>
      <Head>
        <title>Calendar</title>
      </Head>
      <Sidebar title="Calendar" content={[<Calendar key="6" />]} />
    </div>
  );
}

export default contacts;
