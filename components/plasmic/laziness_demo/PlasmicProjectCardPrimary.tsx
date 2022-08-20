// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: VqqXUhJrgP
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicProjectCardPrimary.module.css"; // plasmic-import: VqqXUhJrgP/css

export type PlasmicProjectCardPrimary__VariantMembers = {};

export type PlasmicProjectCardPrimary__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjectCardPrimary__VariantsArgs;
export const PlasmicProjectCardPrimary__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProjectCardPrimary__ArgsType = {
  projectImage?: React.ReactNode;
  location?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProjectCardPrimary__ArgsType;
export const PlasmicProjectCardPrimary__ArgProps = new Array<ArgPropType>(
  "projectImage",
  "location",
  "title",
  "subtitle",
  "description"
);

export type PlasmicProjectCardPrimary__OverridesType = {
  root?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultProjectCardPrimaryProps {
  projectImage?: React.ReactNode;
  location?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

function PlasmicProjectCardPrimary__RenderFunc(props: {
  variants: PlasmicProjectCardPrimary__VariantsArgs;
  args: PlasmicProjectCardPrimary__ArgsType;
  overrides: PlasmicProjectCardPrimary__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

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
      {p.renderPlasmicSlot({
        defaultContents: (
          <div className={classNames(projectcss.all, sty.freeBox__n3Jd5)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__j44Q)}
              displayHeight={"100%" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/laziness_demo/images/circleStructure.webp",
                fullWidth: 5333,
                fullHeight: 3000,
                aspectRatio: undefined
              }}
            />
          </div>
        ),

        value: args.projectImage
      })}

      <h5 className={classNames(projectcss.all, projectcss.h5, sty.h5__iwMn3)}>
        {p.renderPlasmicSlot({
          defaultContents: "青埔區|桃園市",
          value: args.location,
          className: classNames(sty.slotTargetLocation)
        })}
      </h5>

      <h4
        data-plasmic-name={"h4"}
        data-plasmic-override={overrides.h4}
        className={classNames(projectcss.all, projectcss.h4, sty.h4)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "桃園市大巨蛋改建估算",
          value: args.title
        })}
      </h4>

      <h5 className={classNames(projectcss.all, projectcss.h5, sty.h5__sosEi)}>
        {p.renderPlasmicSlot({
          defaultContents: "本案為標案前期之工程估價",
          value: args.subtitle
        })}
      </h5>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算，桃園市大巨蛋改建估算。​",
          value: args.description
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h4", "freeBox"],
  h4: ["h4"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h4: "h4";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectCardPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectCardPrimary__VariantsArgs;
    args?: PlasmicProjectCardPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectCardPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProjectCardPrimary__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProjectCardPrimary__ArgProps,
          internalVariantPropNames: PlasmicProjectCardPrimary__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProjectCardPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectCardPrimary";
  } else {
    func.displayName = `PlasmicProjectCardPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectCardPrimary = Object.assign(
  // Top-level PlasmicProjectCardPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h4: makeNodeComponent("h4"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicProjectCardPrimary
    internalVariantProps: PlasmicProjectCardPrimary__VariantProps,
    internalArgProps: PlasmicProjectCardPrimary__ArgProps
  }
);

export default PlasmicProjectCardPrimary;
/* prettier-ignore-end */
