// eslint-disable-next-line no-unused-vars
import { Component, Prop, h } from '@stencil/core';
export class ButtonComponent {
    render() {
        return (h("button", { class: this.color },
            h("span", null, this.label)));
    }
    static get is() { return "tiqqe-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tiqqe-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tiqqe-button.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'secondary' | 'danger' | 'success'",
                "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"success\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false
        }
    }; }
}
