// eslint-disable-next-line no-unused-vars
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tiqqe-button',
  styleUrl: 'tiqqe-button.scss',
  shadow: true
})

export class ButtonComponent {
    @Prop() label: string;

    @Prop() color: 'primary' | 'secondary' | 'danger' | 'success';

    render() {
      return (
        <button class={this.color}>
          <span>{this.label}</span>
        </button>
      );
    }
}
