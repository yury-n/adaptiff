import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';

export default () => {
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/configs')
      .then(res => res.json())
      .then(data => setConfigs(data))
      .catch(err => console.error(err))
  }, []);

  return (
    <ul>
      {configs.map(config => (
        <li key={config._id}>
          <Link to={`/configs/${config._id}`}>{config.title}</Link>          
        </li>
      ))}
    </ul>
  )
}