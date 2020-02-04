import React from "react";
import { useAds } from "../providers/AdsProvider";
import {
  Heading,
  Stack,
  Columns,
  Column,
} from "braid-design-system";
import ButtonLink from "./ButtonLink";

export default ({}) => {
  const { state } = useAds();
  const { user, jobs } = state;
  const myJobs = user !== null ? jobs[user.value] : {};
  const myJobsLength = Object.keys(myJobs).length;
  return (
    <Stack space="large" dividers>
          <Columns space="small">
            <Column>
              <Heading level="3">My Jobs</Heading>
            </Column>
            <Column width="content">
            <ButtonLink linkPath="addjob" label="Add" />
            </Column>
          </Columns>
      {myJobsLength ? <div>aaa</div> : <div>no jobs</div>}
    </Stack>
  );
};
