import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';

import { openModal } from '../../app/store/actions/modal';

const SignedOutMenu = ({ setAuth }) => {
  const dispatch = useDispatch();
  return (
    <Menu.Item position='right'>
      <Button
        basic
        inverted
        content='Login'
        onClick={() => dispatch(openModal({ modalType: 'LoginForm' }))}
      />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
