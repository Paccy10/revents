import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'semantic-ui-react';
import * as Yup from 'yup';

import ModalWrapper from '../../app/common/modals/ModalWrapper';
import AppTextInput from '../../app/common/form/AppTextInput';

const validationSchema = Yup.object({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

const LoginForm = () => {
  return (
    <ModalWrapper size='mini' header='Sign In to Re-vents '>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className='ui form'>
            <AppTextInput name='email' placeholder='E-mail Address' />
            <AppTextInput
              name='password'
              placeholder='Password'
              type='password'
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              fluid
              size='large'
              color='teal'
              content='Login'
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginForm;
