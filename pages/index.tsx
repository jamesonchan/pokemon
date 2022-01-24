import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
 
  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <Head>
        <title>Roundest-mon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-2xl text-center">Which Pokemon is roundest?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl mx-auto  ">
        <div className="w-16 h-16 bg-red-200" />
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-200" />
      </div>
    </div>
  );
};

export default Home;
