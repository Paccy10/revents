import React, { Fragment } from 'react';

import EventListItem from './EventListItem';

const EventList = ({ events, selectEvent }) => {
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} selectEvent={selectEvent} />
      ))}
    </Fragment>
  );
};

export default EventList;
