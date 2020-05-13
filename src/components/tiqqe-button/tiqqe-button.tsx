import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'tiqqe-button',
    styleUrl: 'tiqqe-button.scss',
    shadow: true
})

export class ButtonComponent {
  @Prop() color: 'plain' | 'primary' | 'secondary' | 'danger' = 'plain'

  render() {
      return (
          <button class={`${this.color}`}>
              <slot />
          </button>
      );
  }
}
