import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WeaponForm from './components/WeaponForm';
import WeaponWrapper from './components/WeaponWrapper';
import WeaponItem from './components/WeaponItem';



const App: React.FC = () => {
  return (
    <div className='App'>
      <WeaponForm/>
      <WeaponWrapper/>
    </div>
  );
};

export default App;
