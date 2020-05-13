import withAssets from "./stencil";
import { addParameters, addDecorator } from "@storybook/client-api";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import newViewports from "./viewports";

addDecorator(
  withAssets({
    // Add addtional key value pair assets.
    // The key is the id of the script or style tag
  })
);

addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[0].includes("docs-")) {
        if (a[0].includes("intro-")) {
          return -1;
        }

        return 0;
      }

      return 1;
    }
  },
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === "string" ? notes : notes.markdown || notes.text;
      }
      return null;
    }
  },
  viewport: {
    viewports: newViewports
  }
});
