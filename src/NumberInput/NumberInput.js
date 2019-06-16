import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Input } from "semantic-ui-react";

import s from "./NumberInput.module.css";

const NumberInput = React.memo(
  ({ className, value: valueProp, onChange: onChangeProp }) => {
    const [value, setValue] = useState(valueProp);
    useEffect(() => {
      setValue(valueProp);
    }, [valueProp]);
    return (
      <Input
        value={value}
        className={classnames(s["input"], className)}
        onKeyUp={event => {
          if (event.key === "Enter") {
            onChangeProp(value);
          }
        }}
        onChange={event => setValue(+event.target.value)}
        onBlur={event => onChangeProp(value)}
      />
    );
  }
);

export default NumberInput;
