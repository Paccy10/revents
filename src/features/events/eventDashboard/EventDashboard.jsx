import React from 'react';
import { Grid } from 'semantic-ui-react';

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={8}>
        <h1>Hello there</h1>
      </Grid.Column>
      <Grid.Column width={8}>
        <h1>Hello here</h1>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
