import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import settings from "../settings";
import { Button } from "semantic-ui-react";

import { allAdaptationTypes } from "./adaptations";

import s from "./Configs.module.css";

const ConfigPage = props => {
  const { configId } = props;
  const [newConfig, setNewConfig] = useState(null);

  useEffect(() => {
    fetch(`${settings.API_PATH_PROD}/configs/${configId}`)
      .then(res => res.json())
      .then(data => setNewConfig(data))
      .catch(err => console.error(err.message));
  }, []);

  const deleteOne = () => {
    fetch(`${settings.API_PATH_PROD}/configs/deleteOne/${configId}`, {
      method: "POST"
    })
      .then(() => (window.location.href = "/configs"))
      .catch(error => console.error(error.message));
  };

  const getArt = newConfig =>
    allAdaptationTypes.find(
      adaptation => adaptation.fileName === newConfig.title
    );

  return (
    newConfig && (
      <>
        <Button className={s["delete-config-button"]} onClick={deleteOne}>
          Delete
        </Button>
        <Modal
          {...getArt(newConfig)}
          initState={newConfig}
          withCloseButton={false}
        />
      </>
    )
  );
};

export default ConfigPage;
