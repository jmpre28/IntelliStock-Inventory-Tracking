import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.replace('/');
  };

  return (
    <header style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1em' }}>
      <div>
        <Link to="/home">
          <h1 style={{ margin: 0, paddingRight: '10px', paddingTop: '5px' }}>Intellistock</h1>
        </Link>
        <p style={{ margin: 0 }}>Keep track of your inventory</p>
      </div>
      <div>
        {Auth.loggedIn() && (
          <Link to="/" style={{ marginRight: '10px' }}>
            {Auth.getProfile().data.username}'s profile
          </Link>
        )}
        {Auth.loggedIn() && (
          <Button icon color="green" onClick={logout} size="mini">
            <Icon name="log out" />
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;

