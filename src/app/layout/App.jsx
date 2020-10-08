import React, { Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import ModalManager from '../common/modals/ModalManager';

const App = () => {
  const { key } = useLocation();

  return (
    <Fragment>
      <ModalManager />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route
          path={'/(.+)'}
          render={() => (
            <Fragment>
              <Navbar />
              <Container className='main'>
                <Switch>
                  <Route path='/events' exact component={EventDashboard} />
                  <Route
                    path={['/events/new', '/events/:id/edit']}
                    component={EventForm}
                    key={key}
                  />
                  <Route path='/events/:id' component={EventDetailedPage} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Switch>
    </Fragment>
  );
};

export default App;
