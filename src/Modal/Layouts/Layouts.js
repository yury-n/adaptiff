import React from "react";
import classnames from "classnames";
import Layout from "./Layout/Layout";

import s from "./Layouts.module.css";

export default () => {
  return (
    <div className={s["layouts"]}>
      <div className={classnames(s["layout"], s["layout-active"])}>
        <div className={s["layout-active-frame"]} />
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
      <div className={s["layout"]}>
        <Layout width={120} />
      </div>
      <div className={s["layout"]}>
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
      <div className={s["layout"]}>
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
      <div className={s["layout"]}>
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
      <div className={s["layout"]}>
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
      <div className={s["layout"]}>
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
      <div className={s["layout"]}>
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
      <div className={s["layout"]}>
        <div className={s["inner-layout"]}>
          <div style={{ fontWeight: "bold" }}>Sample text sample</div>
          <div
            style={{
              padding: "0 13%",
              fontSize: "10px",
              lineHeight: "normal",
              marginTop: "5%"
            }}
          >
            Sample text sample text sample text sample text sample text sample
          </div>
        </div>
      </div>
    </div>
  );
};
