import React from "react";
import { useAds } from "../providers/AdsProvider";
import Login from "./Login";
//import { Link } from "@reach/router"
import { Box, Heading, Card, Stack, Text } from "braid-design-system";

export default (props) => {
  const { title, children } = props
  const { state } = useAds();

  const { user } = state;
  return (
    <div>
      {/*
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="login">Login </Link>
      <Link to="dashboard">Dashboard</Link>
    </nav>
    */}

      <React.Fragment>
        <Box background="brand" paddingY="xxlarge" paddingX="gutter">
          <Stack space="medium">
            <Heading level="1">Job Ads System</Heading>
            <Text>{title}</Text>
          </Stack>
        </Box>
        <Box paddingX={["xsmall", "gutter"]} style={{ marginTop: "-40px" }}>
          <Card>
            <Stack space="medium">{user !== null ? children : <Login />}</Stack>
          </Card>
        </Box>
      </React.Fragment>
    </div>
  );
};
