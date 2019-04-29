import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';

// import linearGradient from "../_adaptationConfigs/linearGradient";
// import trianglify from "../_adaptationConfigs/trianglify";
// import particles from "../_adaptationConfigs/particles";
// import bubbles from "../_adaptationConfigs/bubbles";
// import perfectPurple from "../_adaptationConfigs/perfect_purple";
// import wallPattern from "../_adaptationConfigs/wallPattern";
// import strings25 from "../_adaptationConfigs/strings25";
import generateArt from "../_adaptationConfigs/generateArt";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
// import pulse from "../_adaptationConfigs/pulse";
import abstractParticles from "../_adaptationConfigs/abstractParticles";
import postmodern from '../_adaptationConfigs/postmodern';

const ConfigPage = (props) => {
  const {configId} = props;
  const [newConfig, setNewConfig] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/configs/${configId}`)
      .then(res => res.json())
      .then(data => setNewConfig(data));
  }, []);

  const getArt = newConfig  => ({
    [abstractParticles.fileName]: abstractParticles,
    [generateArt.fileName]: generateArt,
    [postmodern.fileName]: postmodern,
    [gradientWaves.fileName]: gradientWaves,
  })[newConfig.title];

  return (
    newConfig && <Modal {...getArt(newConfig)} customConfig={newConfig} />
  ); 
};

export default ConfigPage;