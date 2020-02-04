import React from "react";
import { useAds } from "../providers/AdsProvider";

import SiteWrap from "./../components/SiteWrap"

import { Heading, Stack } from "braid-design-system";

export default () => {
  const { state } = useAds();

  const { user } = state;
  return (
    <SiteWrap title={user !== null ? user.label:"Login"}>
    <Stack space="large" dividers>
          <Heading level="3">Add New Job</Heading>
    </Stack>
    </SiteWrap>
  );
};