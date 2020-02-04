import React from "react";
import { useAds } from "../providers/AdsProvider";

import SiteWrap from "./../components/SiteWrap"
import AdList from "./../components/AdList"

export default () => {
  const { state } = useAds();

  const { user } = state;
  return (
    <SiteWrap title={user !== null ? user.label:"Login"}>
    <AdList />
    </SiteWrap>
  );
};
