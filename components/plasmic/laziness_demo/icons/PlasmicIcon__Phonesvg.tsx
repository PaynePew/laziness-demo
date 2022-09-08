// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhonesvgIcon(props: PhonesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fillRule={"evenodd"}
      xmlSpace={"preserve"}
      clipRule={"evenodd"}
      viewBox={"0 0 58.282 58.282"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M24.186 22.5c-5.447 3.144 2.864 18.724 8.824 15.283l5.526 9.571c-2.515 1.452-4.643 2.367-7.559.7-8.094-4.627-17.005-20.053-16.75-29.255.087-3.196 1.97-4.448 4.433-5.87l5.526 9.57zm2.284-.26a1.236 1.236 0 01-1.686-.452l-5.21-9.023a1.236 1.236 0 01.452-1.685l2.738-1.581a1.237 1.237 0 011.686.451l5.21 9.024c.34.588.137 1.345-.452 1.685l-2.738 1.58zm14.232 24.65a1.236 1.236 0 01-1.686-.452l-5.21-9.023a1.236 1.236 0 01.452-1.685l2.738-1.581a1.237 1.237 0 011.686.451l5.21 9.024c.34.588.137 1.345-.452 1.685l-2.738 1.581z"
          }
        ></path>

        <path
          d={
            "M29.141 0v.007c8.05 0 15.335 3.26 20.604 8.53a29.046 29.046 0 018.53 20.603h.007v.002h-.007c0 8.05-3.26 15.335-8.53 20.604a29.046 29.046 0 01-20.604 8.529v.007h-.001v-.007c-8.05 0-15.335-3.26-20.604-8.53a29.046 29.046 0 01-8.53-20.604H0h.006c0-8.05 3.26-15.336 8.53-20.605A29.046 29.046 0 0129.14.006V0h.001zm0 3.476v.007-.007c-7.08 0-13.495 2.875-18.142 7.522-4.648 4.648-7.523 11.063-7.523 18.142h.007v.002h-.007c0 7.079 2.875 13.494 7.523 18.14 4.647 4.648 11.063 7.524 18.142 7.524v-.007h.001v.007c7.08 0 13.494-2.876 18.141-7.523 4.648-4.648 7.523-11.063 7.523-18.142h-.007v-.001h.007c0-7.08-2.875-13.494-7.523-18.141C42.636 6.35 36.22 3.476 29.141 3.476z"
          }
          fillRule={"nonzero"}
        ></path>
      </g>
    </svg>
  );
}

export default PhonesvgIcon;
/* prettier-ignore-end */
