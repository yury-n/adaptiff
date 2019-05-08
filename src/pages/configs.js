import React, {useEffect, useState} from 'react';
import {Button} from "semantic-ui-react";
import {Link} from '@reach/router';
import settings from '../settings';

import s from './Configs.module.css';

export default () => {
  const [isAllDeleted, setIsAllDeleted] = useState(false);
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    fetch(`${settings.API_PATH_PROD}/configs`)
      .then(res => res.json())
      .then(data => data.length ? setConfigs(data) : setIsAllDeleted(true))
      .catch(err => console.error(err))
  }, [isAllDeleted]);

  const removeAll = () => {
    fetch(`${settings.API_PATH_PROD}/configs/delete`, {
      method: "POST",
    }).then(_ => setIsAllDeleted(true))
  };

  return (
    <>
      <div className={s['wrapper']}>
        {!isAllDeleted
          ? <Button onClick={removeAll}>Remove all</Button>
          : <>
              <Link to="/" className={s['back']}>Back</Link>
              <p>No items to show</p>
            </>}
      </div>
      <ol>
        {!isAllDeleted && configs.map(config => (
          <li key={config._id}>
            <Link to={`/configs/${config._id}`}>{config.title}</Link>
          </li>
        ))}
      </ol>
    </>
  )
}