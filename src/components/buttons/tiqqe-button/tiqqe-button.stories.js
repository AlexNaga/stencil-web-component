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
    const colorString = select('color', buttonColor, null);
    const labelString = text('button text', 'Button');
    // --------------------------------------------------------- //

    return `
    <tiqqe-button
      color=${colorString}
      value=${labelString}
      label=${labelString}
    />
  `;
};
