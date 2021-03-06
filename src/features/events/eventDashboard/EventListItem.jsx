import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import { format } from 'date-fns';

import EventListAttendee from './EventListAttendee';
import { deleteEvent } from '../../../app/store/actions/event';

const EventListItem = ({ event }) => {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted By {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span style={{ marginRight: '10px' }}>
          <Icon name='clock' color='grey' />{' '}
          {format(event.date, 'MMMM d, yyyy h:mm a')}
        </span>
        <span>
          <Icon name='map marker alternate' color='grey' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <div style={{ marginTop: '10px' }}>
          <Button
            onClick={() => dispatch(deleteEvent(event.id))}
            color='red'
            floated='right'
            size='small'
            content='Delete'
          />
          <Button
            as={Link}
            to={`/events/${event.id}`}
            color='teal'
            floated='right'
            size='small'
            content='View'
          />
        </div>
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
