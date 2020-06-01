import { r as registerInstance, h } from './index-be579b61.js';

const tiqqeButtonCss = "button{border:none;cursor:pointer;border-radius:2px;padding:8px 8px;width:88px;outline:0;font-weight:500;font-family:\"Roboto\", sans-serif;font-size:14px;position:relative;overflow:hidden}button.primary{background-color:var(--app-primary-color, #448aff);color:var(--app-primary-text-color, #ffffff)}button.secondary{background-color:var(--app-secondary-color, #ffb944);color:var(--app-secondary-text-color, #1a1a1a)}button.danger{background-color:var(--app-danger-color, #f34a4a);color:var(--app-danger-text-color, #ffffff)}button.success{background-color:var(--app-success-color, #3dd800);color:var(--app-success-text-color, #ffffff)}";

const ButtonComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", { class: this.color }, h("span", null, this.label)));
    }
};
ButtonComponent.style = tiqqeButtonCss;

export { ButtonComponent as tiqqe_button };
