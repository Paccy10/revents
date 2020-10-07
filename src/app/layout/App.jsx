import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

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
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/events' exact component={EventDashboard} />
          <Route path='/events/new' exact component={EventForm} />
          <Route path='/events/:id' component={EventDetailedPage} />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default App;
