import React, { useState } from "react";
import classnames from "classnames";
import backgroundsList from "../backgroundsList";
import MiniCard from "../../MiniCard/MiniCard";
import { Card, Button } from "semantic-ui-react";

import s from "./LegacyCards.module.css";

const ITEMS_PER_CHUNK = 8;

export default () => {
  const [page, setPage] = useState(0);
  const all = backgroundsList;
  const adaptations = all.slice(0, (page + 1) * ITEMS_PER_CHUNK);

  return (
    <div>
      <Card.Group className={classnames(s["cards"], "cards")}>
        {adaptations.map((template, index) => (
          <MiniCard key={index} {...template} />
        ))}
      </Card.Group>
      {(page + 1) * ITEMS_PER_CHUNK < all.length && (
        <div className={s["load-more-wrapper"]}>
          <Button
            basic
            color="black"
            size="large"
            onClick={() => setPage(page + 1)}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
