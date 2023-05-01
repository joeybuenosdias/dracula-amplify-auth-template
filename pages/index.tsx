import { withAuthenticator } from "@aws-amplify/ui-react";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import type { GetServerSidePropsResult } from "next";
import type { ReactElement } from "react";
import { Github } from "src/features/github";
import { Layout } from "src/components/layout";

type Data = {
  renderedAt: string;
}

export function getServerSideProps(): GetServerSidePropsResult<Data> {
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

function Home({ signOut, user }: WithAuthenticatorProps): ReactElement {
  return (
    <div style={{ padding: 50 }}>
      <Layout />
      <Github />
      <h1>Logged in as {user?.username}.</h1>
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
}

export default withAuthenticator(Home);
