import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

const Navbar = ({ setFormOpen }) => {
  const [auth, setAuth] = useState(false);

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
        <Menu.Item name='Events' as={NavLink} to='/events' />
        {auth && (
          <Menu.Item as={NavLink} to='/events/new'>
            <Button
              onClick={setFormOpen}
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
        )}
        {auth ? (
          <SignedInMenu setAuth={setAuth} />
        ) : (
          <SignedOutMenu setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
};

export default Navbar;
