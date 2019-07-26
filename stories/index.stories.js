import React from "react";
import { storiesOf } from "@storybook/react";
import StaterComponent from "../src/lib";

storiesOf("Sample", module).add("Starter Component", () => (
  <div style={{ transform: " translate(25%, 30vh)" }}>
    <StaterComponent />
  </div>
));
