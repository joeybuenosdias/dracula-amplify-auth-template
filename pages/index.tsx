import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";

export function getServerSideProps() {
  const renderedAt = new Date();
  const formattedBuildDate = renderedAt.toLocaleDateString("en-US", {
    dateStyle: "long",
  });
  const formattedBuildTime = renderedAt.toLocaleTimeString("en-US", {
    timeStyle: "long",
  });
  return {
    props: {
      renderedAt: `${formattedBuildDate} at ${formattedBuildTime}`,
    },
  };
}

const Home: NextPage = ({ signOut, user }: WithAuthenticatorProps) => {
  return (
    <div style={{ padding: 50 }}>
      <h1>Logged in as {user?.username}.</h1>
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
};

export default withAuthenticator(Home);
