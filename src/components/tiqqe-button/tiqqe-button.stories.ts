import centeredContent from '@storybook/addon-centered/html';

export default {
    title: 'TIQQE button',
    decorators: [centeredContent],
};

export const Default = () => `
  <tiqqe-button color="primary">Primary</tiqqe-button>
  <tiqqe-button color="secondary">Secondary</tiqqe-button>
  <tiqqe-button color="danger">Danger</tiqqe-button>
`;
