import * as React from "react";
import {
  PlasmicTextArea,
  DefaultTextAreaProps
} from "./plasmic/laziness_demo/PlasmicTextArea";
import { TextInputRef } from "@plasmicapp/react-web";

interface TextAreaProps extends DefaultTextAreaProps {}

function TextArea_(props: TextAreaProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicTextArea.useBehavior<TextAreaProps>(
    props,
    ref
  );
  return <PlasmicTextArea {...plasmicProps} />;
}

const TextArea = React.forwardRef(TextArea_);

export default Object.assign(TextArea, {
  __plumeType: "text-input"
});
