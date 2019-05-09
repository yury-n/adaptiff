import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import settings from '../settings';

import linearGradient from "../_adaptationConfigs/linearGradient";
import trianglify from "../_adaptationConfigs/trianglify";
import particles from "../_adaptationConfigs/particles";
import bubbles from "../_adaptationConfigs/bubbles";
import perfectPurple from "../_adaptationConfigs/perfect_purple";
import wallPattern from "../_adaptationConfigs/wallPattern";
import strings25 from "../_adaptationConfigs/strings25";
import generateArt from "../_adaptationConfigs/generateArt";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import pulse from "../_adaptationConfigs/pulse";
import abstractParticles from "../_adaptationConfigs/abstractParticles";
import postmodern from '../_adaptationConfigs/postmodern';
import {Button} from 'semantic-ui-react';

import s from './Configs.module.css';

const ConfigPage = (props) => {
  const {configId} = props;
  const [newConfig, setNewConfig] = useState(null);

  useEffect(() => {
    fetch(`${settings.API_PATH_PROD}/configs/${configId}`)
      .then(res => res.json())
      .then(data => setNewConfig(data))
      .catch(err => console.error(err.message))
  }, []);

  const deleteOne = () => {
    fetch(`${settings.API_PATH_PROD}/configs/deleteOne/${configId}`, {
      method: "POST",
    })
      .then(() => window.location.href = '/configs')
      .catch(error => console.error(error.message))
  };

  const getArt = newConfig  => ({
    [abstractParticles.fileName]: abstractParticles,
    [trianglify.fileName]: trianglify,
    [particles.fileName]: particles,
    [bubbles.fileName]: bubbles,
    [perfectPurple.fileName]: perfectPurple,
    [linearGradient.fileName]: linearGradient,
    [wallPattern.fileName]: wallPattern,
    [generateArt.fileName]: generateArt,
    [postmodern.fileName]: postmodern,
    [gradientWaves.fileName]: gradientWaves,
    [strings25.fileName]: strings25,
    [pulse.fileName]: pulse,
  })[newConfig.title];

  return (
    newConfig && (
      <>
        <Button className={s["delete-config-button"]} onClick={deleteOne}>Delete</Button>
        <Modal {...getArt(newConfig)} customConfig={newConfig} />
      </>
    )
  );
};

export default ConfigPage;