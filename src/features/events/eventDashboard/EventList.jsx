import React, { Fragment } from 'react';

import EventListItem from './EventListItem';

const EventList = ({ events, selectEvent, deleteEvent }) => {
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </Fragment>
  );
};

export default EventList;
