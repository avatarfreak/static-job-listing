import Head from "next/head";
import React from "react";
import Layout from "@layout/index";
import { JobProvider } from "context/JobProvider";
import { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "../src/styles/index.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="static job listing challeges accepted by avatarfreak"
        />
        <title>Static Job Listing </title>
      </Head>
      <Layout>
        <JobProvider>
          <Component {...pageProps} />
        </JobProvider>
      </Layout>
    </>
  );
};

export default MyApp;
