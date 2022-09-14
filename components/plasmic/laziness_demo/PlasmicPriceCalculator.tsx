// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: d8mQqWAV6f
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: kcMTy-wpYm5s_7/component
import TextInput from "../../TextInput"; // plasmic-import: f3MaxzneYzglDZ/component

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicPriceCalculator.module.css"; // plasmic-import: d8mQqWAV6f/css

import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: Zu9y5vY-DbAu23/icon
import SearchIcon from "../landing_page_starter/icons/PlasmicIcon__Search"; // plasmic-import: lDxLgl1XFFiQRC/icon
import CheckIcon from "../landing_page_starter/icons/PlasmicIcon__Check"; // plasmic-import: gHCuOW8JEryqrm/icon

export type PlasmicPriceCalculator__VariantMembers = {};

export type PlasmicPriceCalculator__VariantsArgs = {};
type VariantPropType = keyof PlasmicPriceCalculator__VariantsArgs;
export const PlasmicPriceCalculator__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPriceCalculator__ArgsType = {
  rcMin?: number;
  rcSecond?: number;
  rcThird?: number;
  srcMin?: number;
  srcSecond?: number;
  srcThird?: number;
  srcMax?: number;
  ssMin?: number;
  ssSecond?: number;
  ssThird?: number;
  ssMax?: number;
  rcFurMin?: number;
  rcFurSecond?: number;
  rcFurThird?: number;
  rcFurMax?: number;
  srcFurMin?: number;
  srcFurSecond?: number;
  srcFurThird?: number;
  srcFurMax?: number;
  ssFurMin?: number;
  ssFurSecond?: number;
  ssFurThird?: number;
  ssFurMax?: number;
  rcMax?: number;
};

type ArgPropType = keyof PlasmicPriceCalculator__ArgsType;
export const PlasmicPriceCalculator__ArgProps = new Array<ArgPropType>(
  "rcMin",
  "rcSecond",
  "rcThird",
  "srcMin",
  "srcSecond",
  "srcThird",
  "srcMax",
  "ssMin",
  "ssSecond",
  "ssThird",
  "ssMax",
  "rcFurMin",
  "rcFurSecond",
  "rcFurThird",
  "rcFurMax",
  "srcFurMin",
  "srcFurSecond",
  "srcFurThird",
  "srcFurMax",
  "ssFurMin",
  "ssFurSecond",
  "ssFurThird",
  "ssFurMax",
  "rcMax"
);

export type PlasmicPriceCalculator__OverridesType = {
  root?: p.Flex<"div">;
  structureButton?: p.Flex<typeof Button>;
  furnishButton?: p.Flex<typeof Button>;
  rcButton?: p.Flex<typeof Button>;
  srcButton?: p.Flex<typeof Button>;
  ssButon?: p.Flex<typeof Button>;
  areaInputMin?: p.Flex<typeof TextInput>;
  areaInputSecond?: p.Flex<typeof TextInput>;
  areaInputThird?: p.Flex<typeof TextInput>;
  areaInputFourth?: p.Flex<typeof TextInput>;
  areaInputMax?: p.Flex<typeof TextInput>;
  calculateButton?: p.Flex<typeof Button>;
};

export interface DefaultPriceCalculatorProps {
  rcMin?: number;
  rcSecond?: number;
  rcThird?: number;
  srcMin?: number;
  srcSecond?: number;
  srcThird?: number;
  srcMax?: number;
  ssMin?: number;
  ssSecond?: number;
  ssThird?: number;
  ssMax?: number;
  rcFurMin?: number;
  rcFurSecond?: number;
  rcFurThird?: number;
  rcFurMax?: number;
  srcFurMin?: number;
  srcFurSecond?: number;
  srcFurThird?: number;
  srcFurMax?: number;
  ssFurMin?: number;
  ssFurSecond?: number;
  ssFurThird?: number;
  ssFurMax?: number;
  rcMax?: number;
  className?: string;
}

function PlasmicPriceCalculator__RenderFunc(props: {
  variants: PlasmicPriceCalculator__VariantsArgs;
  args: PlasmicPriceCalculator__ArgsType;
  overrides: PlasmicPriceCalculator__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          rcMin: 8500 as const,
          rcSecond: 13200 as const,
          rcThird: 15750 as const,
          srcMin: 9500 as const,
          srcSecond: 16200 as const,
          srcThird: 22750 as const,
          srcMax: 59000 as const,
          ssMin: 9250 as const,
          ssSecond: 15450 as const,
          ssThird: 21000 as const,
          ssMax: 54000 as const,
          rcFurMin: 15950 as const,
          rcFurSecond: 24600 as const,
          rcFurThird: 29400 as const,
          rcFurMax: 74000 as const,
          srcFurMin: 16800 as const,
          srcFurSecond: 27150 as const,
          srcFurThird: 35350 as const,
          srcFurMax: 91000 as const,
          ssFurMin: 16600 as const,
          ssFurSecond: 26550 as const,
          ssFurThird: 33950 as const,
          ssFurMax: 87000 as const,
          rcMax: 39000 as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnCpqQwRKrRf2Hx()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__gIeAp)}
      >
        <Button
          data-plasmic-name={"structureButton"}
          data-plasmic-override={overrides.structureButton}
          className={classNames("__wab_instance", sty.structureButton)}
          color={"red" as const}
        >
          {"結構體估算"}
        </Button>

        <Button
          data-plasmic-name={"furnishButton"}
          data-plasmic-override={overrides.furnishButton}
          className={classNames("__wab_instance", sty.furnishButton)}
          color={"pink" as const}
        >
          {"含裝修估算"}
        </Button>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__s1Sgp)}
      >
        <Button
          data-plasmic-name={"rcButton"}
          data-plasmic-override={overrides.rcButton}
          className={classNames("__wab_instance", sty.rcButton)}
          color={"red" as const}
        >
          {"RC"}
        </Button>

        <Button
          data-plasmic-name={"srcButton"}
          data-plasmic-override={overrides.srcButton}
          className={classNames("__wab_instance", sty.srcButton)}
          color={"pink" as const}
        >
          {"SRC/SC"}
        </Button>

        <Button
          data-plasmic-name={"ssButon"}
          data-plasmic-override={overrides.ssButon}
          className={classNames("__wab_instance", sty.ssButon)}
          color={"pink" as const}
        >
          {"SS"}
        </Button>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__l9Vh2)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__pVw6L
          )}
        >
          {"500m3(含)以下:"}
        </div>

        <TextInput
          data-plasmic-name={"areaInputMin"}
          data-plasmic-override={overrides.areaInputMin}
          className={classNames("__wab_instance", sty.areaInputMin)}
          placeholder={"請輸入各棟樓地板面積" as const}
          type={"number" as const}
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__csPd)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kaj0E
          )}
        >
          {"500~1500m3(含)以下:"}
        </div>

        <TextInput
          data-plasmic-name={"areaInputSecond"}
          data-plasmic-override={overrides.areaInputSecond}
          className={classNames("__wab_instance", sty.areaInputSecond)}
          placeholder={"請輸入各棟樓地板面積" as const}
          type={"number" as const}
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__aUoTx)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___0MeZy
          )}
        >
          {"1500~3500m3(含)以下:"}
        </div>

        <TextInput
          data-plasmic-name={"areaInputThird"}
          data-plasmic-override={overrides.areaInputThird}
          className={classNames("__wab_instance", sty.areaInputThird)}
          placeholder={"請輸入各棟樓地板面積" as const}
          type={"number" as const}
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__yaXz5)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__j4P0T
          )}
        >
          {"3500~10000m3(含)以下:"}
        </div>

        <TextInput
          data-plasmic-name={"areaInputFourth"}
          data-plasmic-override={overrides.areaInputFourth}
          className={classNames("__wab_instance", sty.areaInputFourth)}
          placeholder={"請輸入各棟樓地板面積" as const}
          type={"number" as const}
        />
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__zHll6)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__j7KRg
          )}
        >
          {"10000m3以上:"}
        </div>

        <TextInput
          data-plasmic-name={"areaInputMax"}
          data-plasmic-override={overrides.areaInputMax}
          className={classNames("__wab_instance", sty.areaInputMax)}
          placeholder={"請輸入各棟樓地板面積" as const}
          type={"number" as const}
        />
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__v9Pxl)}
      >
        <Button
          data-plasmic-name={"calculateButton"}
          data-plasmic-override={overrides.calculateButton}
          className={classNames("__wab_instance", sty.calculateButton)}
          color={"red" as const}
        >
          {"開始計算"}
        </Button>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "structureButton",
    "furnishButton",
    "rcButton",
    "srcButton",
    "ssButon",
    "areaInputMin",
    "areaInputSecond",
    "areaInputThird",
    "areaInputFourth",
    "areaInputMax",
    "calculateButton"
  ],
  structureButton: ["structureButton"],
  furnishButton: ["furnishButton"],
  rcButton: ["rcButton"],
  srcButton: ["srcButton"],
  ssButon: ["ssButon"],
  areaInputMin: ["areaInputMin"],
  areaInputSecond: ["areaInputSecond"],
  areaInputThird: ["areaInputThird"],
  areaInputFourth: ["areaInputFourth"],
  areaInputMax: ["areaInputMax"],
  calculateButton: ["calculateButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  structureButton: typeof Button;
  furnishButton: typeof Button;
  rcButton: typeof Button;
  srcButton: typeof Button;
  ssButon: typeof Button;
  areaInputMin: typeof TextInput;
  areaInputSecond: typeof TextInput;
  areaInputThird: typeof TextInput;
  areaInputFourth: typeof TextInput;
  areaInputMax: typeof TextInput;
  calculateButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCalculator__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCalculator__VariantsArgs;
    args?: PlasmicPriceCalculator__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCalculator__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPriceCalculator__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPriceCalculator__ArgProps,
          internalVariantPropNames: PlasmicPriceCalculator__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPriceCalculator__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCalculator";
  } else {
    func.displayName = `PlasmicPriceCalculator.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCalculator = Object.assign(
  // Top-level PlasmicPriceCalculator renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    structureButton: makeNodeComponent("structureButton"),
    furnishButton: makeNodeComponent("furnishButton"),
    rcButton: makeNodeComponent("rcButton"),
    srcButton: makeNodeComponent("srcButton"),
    ssButon: makeNodeComponent("ssButon"),
    areaInputMin: makeNodeComponent("areaInputMin"),
    areaInputSecond: makeNodeComponent("areaInputSecond"),
    areaInputThird: makeNodeComponent("areaInputThird"),
    areaInputFourth: makeNodeComponent("areaInputFourth"),
    areaInputMax: makeNodeComponent("areaInputMax"),
    calculateButton: makeNodeComponent("calculateButton"),

    // Metadata about props expected for PlasmicPriceCalculator
    internalVariantProps: PlasmicPriceCalculator__VariantProps,
    internalArgProps: PlasmicPriceCalculator__ArgProps
  }
);

export default PlasmicPriceCalculator;
/* prettier-ignore-end */
