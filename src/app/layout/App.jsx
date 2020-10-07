import React, { Fragment, useState } from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectedEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <Fragment>
      <Navbar setFormOpen={handleFormOpen} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </Fragment>
  );
};

export default App;
