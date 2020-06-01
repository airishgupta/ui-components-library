import React from 'react';
import { boolean, object } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import Button from './index';
import notes from './Button.notes.md';
import document from './Button.docs';

export default {
  title: 'React/Button',
  component: Button,
  parameters: {
    notes,
    docs: {
      page: document,
    },
  },
};

export const Primary = () => {
  const eventsFromObject = actions({
    onClick: 'clicked',
    onMouseOver: 'hovered',
  });

  return (
    <Button
      disabled={boolean('Is Disabled', false)}
      appearance="primary"
      buttonInlineStyle={object('Inline Style', {})}
      {...eventsFromObject}
    >
      Primary
    </Button>
  );
};
