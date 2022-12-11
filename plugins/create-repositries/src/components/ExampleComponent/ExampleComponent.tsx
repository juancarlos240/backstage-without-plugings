import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  HeaderLabel,
} from '@backstage/core-components';

import { identityApiRef, useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

export const ExampleComponent = () => {
  const [username, setUsername] = useState('')
  const identityApi = useApi(identityApiRef)

  useEffect(()=>{
    async function getBIdentity() {
      const profile = await identityApi.getProfileInfo();
      setUsername(profile.displayName ?? '')
    }

    getBIdentity()
  },[identityApi, username])



  return (
  <Page themeId="tool">
    <Header title="Welcome to your self service hub!" subtitle="Create anything you'd like following best practices">
      <HeaderLabel label="Owner" value="Team JuanX" />
      <HeaderLabel label="Lifecycle" value="Beta" />
    </Header>
    <Content>
      {username && <Grid item>
        Welcome { username}
      </Grid>}
     
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Create">
            <Button>Create GHE Repositries</Button>
            <Button>Create GHE Team</Button>
            <Button>Create Internal google group</Button>
            <Button>Create GCP project</Button>
          </InfoCard>
        </Grid>
        <Grid item>
          <InfoCard title="Access">
            <Button>Access to GHE Repositries</Button>
            <Button>Access to GHE Team</Button>
            <Button>Access to Internal google group</Button>
            <Button>Access to GCP project</Button>
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  </Page>
)}
