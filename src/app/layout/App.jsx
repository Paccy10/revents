import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

const App = () => {
  return (
    <Fragment>
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
                    path={['/events/new', '/events/edit']}
                    component={EventForm}
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
