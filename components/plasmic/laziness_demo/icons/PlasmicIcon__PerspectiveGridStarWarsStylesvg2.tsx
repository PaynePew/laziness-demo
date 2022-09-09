// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PerspectiveGridStarWarsStylesvg2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PerspectiveGridStarWarsStylesvg2Icon(
  props: PerspectiveGridStarWarsStylesvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 1629.1 1611.829"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.55 1596.735l1600-1573.283v1564.925L14.55 15.094v1581.641zm0-1506.325l1600 1423.447M14.55 165.726l1600 1273.61M14.55 241.042l1600 1123.774M14.55 316.359l1600 973.937m-1600-898.621l1600 824.1m-1600-748.784l1600 674.265m-1600-598.948l1600 524.427m-1600-449.111l1600 374.591M14.55 692.94l1600 224.755m-1600-149.439l1600 74.919m-1600 .398l1600-74.919m-1600 150.235l1600-224.755m-1600 300.071l1600-374.591m-1600 449.907l1600-524.427m-1600 599.744l1600-674.265m-1600 749.581l1600-824.101m-1600 899.417l1600-973.937m-1600 1049.253l1600-1123.774m-1600 1199.091l1600-1273.61m-1600 1348.926l1600-1423.447m-76.19.398v1415.089m-76.191-1340.171v1265.253m-76.191-1190.334v1115.416m-76.19-1040.498v965.58m-76.191-890.662v815.743m-76.19-740.825v665.907m-76.191-590.988v516.07m-76.19-441.152V989.03m-76.191-291.314v216.397m-76.19-141.479v66.56m-76.19 8.359v-83.277M700.264 922.47V689.359M624.073 997.39V614.44m-76.19 457.867V539.522m-76.19 607.704V464.603m-76.191 757.541V389.685m-76.19 907.377V314.767M243.121 1371.98V239.848M166.93 1446.899V164.93M90.74 1521.817V90.012"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default PerspectiveGridStarWarsStylesvg2Icon;
/* prettier-ignore-end */
