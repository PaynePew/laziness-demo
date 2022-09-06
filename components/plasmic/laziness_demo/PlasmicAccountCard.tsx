// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: CKUgB3T9na
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

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicAccountCard.module.css"; // plasmic-import: CKUgB3T9na/css

export type PlasmicAccountCard__VariantMembers = {};

export type PlasmicAccountCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicAccountCard__VariantsArgs;
export const PlasmicAccountCard__VariantProps = new Array<VariantPropType>();

export type PlasmicAccountCard__ArgsType = {
  email?: React.ReactNode;
  company?: React.ReactNode;
  name?: React.ReactNode;
  jobTitle?: React.ReactNode;
  phoneNumber?: React.ReactNode;
  address?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAccountCard__ArgsType;
export const PlasmicAccountCard__ArgProps = new Array<ArgPropType>(
  "email",
  "company",
  "name",
  "jobTitle",
  "phoneNumber",
  "address"
);

export type PlasmicAccountCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultAccountCardProps {
  email?: React.ReactNode;
  company?: React.ReactNode;
  name?: React.ReactNode;
  jobTitle?: React.ReactNode;
  phoneNumber?: React.ReactNode;
  address?: React.ReactNode;
  className?: string;
}

function PlasmicAccountCard__RenderFunc(props: {
  variants: PlasmicAccountCard__VariantsArgs;
  args: PlasmicAccountCard__ArgsType;
  overrides: PlasmicAccountCard__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnCpqQwRKrRf2Hx()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__aOatv)}>
        {p.renderPlasmicSlot({
          defaultContents: "其相資訊工作室",
          value: args.company
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___77Luy)}>
        {p.renderPlasmicSlot({
          defaultContents: "潘南霖",
          value: args.name,
          className: classNames(sty.slotTargetName)
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___2PEge)}>
        {p.renderPlasmicSlot({
          defaultContents: "工程師",
          value: args.jobTitle
        })}
      </div>

      <div
        className={classNames(
          projectcss.all,
          sty.freeBox__wc02L,
          "text-wrap" as const
        )}
      >
        {true
          ? p.renderPlasmicSlot({
              defaultContents: "nlpam06@gmail.com",
              value: args.email,
              className: classNames(sty.slotTargetEmail)
            })
          : null}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___3Bg96)}>
        {p.renderPlasmicSlot({
          defaultContents: "0933-147-195",
          value: args.phoneNumber
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___2DQkd)}>
        {p.renderPlasmicSlot({
          defaultContents: "桃園市八德區介壽路二段1233巷48弄16衖二號三樓",
          value: args.address
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccountCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccountCard__VariantsArgs;
    args?: PlasmicAccountCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAccountCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAccountCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAccountCard__ArgProps,
          internalVariantPropNames: PlasmicAccountCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAccountCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccountCard";
  } else {
    func.displayName = `PlasmicAccountCard.${nodeName}`;
  }
  return func;
}

export const PlasmicAccountCard = Object.assign(
  // Top-level PlasmicAccountCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicAccountCard
    internalVariantProps: PlasmicAccountCard__VariantProps,
    internalArgProps: PlasmicAccountCard__ArgProps
  }
);

export default PlasmicAccountCard;
/* prettier-ignore-end */
