import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </Fragment>
  );
};

export default App;
