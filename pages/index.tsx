import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dashboard from "./dashboard";
import Login from "./login";
import SideMenu from "../components/SideMenu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer></footer>
    </div>
  );
};

export default Home;
