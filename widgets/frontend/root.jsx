import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = () => {
  const obj1 = {
    title: "Con Air",
    content: "You can't cage the Cage."
  };

  const obj2 = {
    title: "Wicker Man",
    content: "NOT THE BEES!"
  };

  const obj3 = {
    title: "FaceOff",
    content: "NOOOOOOO!"
  };

  const objArr = [obj1, obj2, obj3];


  return(
    <div>
      <Clock/>
      <Weather />
      <Tabs objects={objArr}/>
    </div>

  );
};

export default Root;
