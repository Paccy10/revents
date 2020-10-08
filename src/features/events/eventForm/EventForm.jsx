import React from 'react';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { createEvent, updateEvent } from '../../../app/store/actions/event';
import AppTextInput from '../../../app/common/form/AppTextInput';
import AppTextArea from '../../../app/common/form/AppTextArea';
import AppSelectInput from '../../../app/common/form/AppSelectInput';
import AppDatePicker from '../../../app/common/form/AppDatePicker';
import { categoryData } from '../../../app/api/categoryOptions';

const validationSchema = Yup.object({
  title: Yup.string().required().label('Title'),
  category: Yup.string().required().label('Category'),
  description: Yup.string().required().label('Description'),
  city: Yup.string().required().label('City'),
  venue: Yup.string().required().label('Venue'),
  date: Yup.string().required().label('Date'),
});

const EventForm = ({ match, history }) => {
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const dispatch = useDispatch();
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const handleSubmit = (values) => {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Fabrice Manzi',
            hostPhotoURL: '/assets/user.png',
            attendees: [],
          })
        );
    history.push('/events');
  };

  return (
    <Grid centered>
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <Segment clearing>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, dirty, isValid }) => (
              <Form className='ui form'>
                <Header color='teal' content='Event Details' />
                <AppTextInput name='title' placeholder='Event Title' />
                <AppSelectInput
                  name='category'
                  placeholder='Category'
                  options={categoryData}
                />
                <AppTextArea
                  name='description'
                  placeholder='Event Description'
                  rows={3}
                />
                <Header color='teal' content='Event Location Details' />
                <AppTextInput name='city' placeholder='City' />
                <AppTextInput name='venue' placeholder='Venue' />
                <AppDatePicker
                  name='date'
                  placeholderText='Date'
                  timeFormat='HH:mm'
                  showTimeSelect
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm a'
                />
                <Button
                  type='submit'
                  floated='right'
                  positive
                  content='Submit'
                  loading={isSubmitting}
                  disabled={!isValid || !dirty || isSubmitting}
                />
                <Button
                  as={Link}
                  to='/events'
                  floated='right'
                  content='Cancel'
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default EventForm;
