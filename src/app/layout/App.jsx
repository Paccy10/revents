import React, { Fragment, useState } from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Fragment>
      <Navbar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </Fragment>
  );
};

export default App;
