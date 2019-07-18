import React from 'react';
import { Button } from 'semantic-ui-react';

import s from './EditButton.module.css';

export const EditButton = ({ isShown }) => isShown && <Button className={s['button--edit']}>Edit</Button>;