import React from 'react';

import Showcase from './Showcase';
import Summary from './Summary';
import Skills from './Skills';
import Certification from './Certification';
//import MainNav from './MainNav';

const Home = () => {
  return (
    <div>
      <Showcase />
      <br />
      <br />
      <Summary title="Brief Profile" />
      <br />
      <br />
      <Skills />
      <br />
      <br />
      <Certification />
      <br />
      <br />
    </div>
  );
};

export default Home;
