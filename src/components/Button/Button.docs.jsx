import React from "react";
import {
  Title,
  Subtitle,
  Props,
  Stories,
  Preview,
} from "@storybook/addon-docs/blocks";
import Button from "./index";

export default () => (
  <>
    <Title>Button</Title>
    <Preview>
      <Button appearance="primary">Primary</Button>
    </Preview>
    <Subtitle> Props</Subtitle>
    <Props />
    <Stories title="" />
  </>
);
