import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

const Navbar = ({ setFormOpen }) => {
  const { authenticated } = useSelector((state) => state.auth);

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
        {authenticated && (
          <Menu.Item as={NavLink} to='/events/new' exact>
            <Button
              onClick={setFormOpen}
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default Navbar;
