import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

const Navbar = ({ setFormOpen }) => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header as={NavLink} to='/' exact>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '15px' }}
          />
          Re-events
        </Menu.Item>
        <Menu.Item name='Events' as={NavLink} to='/events' exact />
        <Menu.Item as={NavLink} to='/events/new'>
          <Button
            onClick={setFormOpen}
            positive
            inverted
            content='Create Event'
          />
        </Menu.Item>
        <SignedOutMenu />
        <SignedInMenu />
      </Container>
    </Menu>
  );
};

export default Navbar;
