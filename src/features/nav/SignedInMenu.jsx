import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

const SignedOutMenu = () => {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Pacifique'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/events/new'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My Profile' icon='user' />
          <Dropdown.Item text='Logout' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedOutMenu;
