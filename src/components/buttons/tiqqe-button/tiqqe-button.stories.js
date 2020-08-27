import { select, text } from '@storybook/addon-knobs';
import centeredContent from '@storybook/addon-centered/html';

export default {
  title: 'buttons|TIQQE button',
  decorators: [centeredContent],
};

const buttonColor = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
  success: 'success'
};

export const regular = () => {
  // Storybook Knobs ------------------------------------------//
  const color = select('color', buttonColor, buttonColor.primary);
  const label = text('button text', 'Button');
  // --------------------------------------------------------- //

  return `
    <tiqqe-button
      color=${color}
      label="${label}"
    />
  `;
};
