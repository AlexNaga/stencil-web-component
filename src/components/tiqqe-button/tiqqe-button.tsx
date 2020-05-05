import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'tiqqe-button',
  styleUrl: 'tiqqe-button.css',
  shadow: true,
})
export class TiqqeButton {
  @Prop() color: string;
  // @Prop() color: ['red', 'green', blue'];

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
