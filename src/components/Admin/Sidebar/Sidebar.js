import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Sidebar = () => {
  const [radioValue, setRadioValue] = useState('1');
  const { user } = useAuth();

  const radios = [
    { name: 'Usuarios', value: '1', routeTo: 'users' },
    { name: 'Ordenes', value: '2', routeTo: 'orders' },
    { name: 'Productos', value: '3', routeTo: 'products' },
    { name: 'Categorias', value: '4', routeTo: 'categories' },
  ];

  return (
    <aside>
      <div className='admin-info-block'>
        <div className='d-flex flex-column align-items-center py-4 px-2'>
          <img src='https://gravatar.com/avatar/a02f0cd317c4805ecc316db0e3741327?s=100&d=robohash&r=x' alt='admin avatar' className=' rounded-circle bg-dark' id='admin-avatar' />
          <h2 className='text-white mb-0 mt-3 fs-5'>{user.fullName}</h2>
        </div>
      </div>
      <nav>
        <ButtonGroup className='col-12 px-2' vertical>
          {radios.map((radio, idx) => (
            <ToggleButton
              className='rounded-0'
              key={idx}
              id={`radio-${idx}`}
              type='radio'
              variant='outline-light'
              name='radio'
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <NavLink to={radio.routeTo} className='nav-link'>{radio.name}</NavLink>
            </ToggleButton>
          ))}
        </ButtonGroup>
      </nav>
    </aside>
  );
};

export default Sidebar;
