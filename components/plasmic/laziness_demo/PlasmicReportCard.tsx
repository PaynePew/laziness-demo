// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: MYiOb2nF0s
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
import sty from "./PlasmicReportCard.module.css"; // plasmic-import: MYiOb2nF0s/css

export type PlasmicReportCard__VariantMembers = {};

export type PlasmicReportCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicReportCard__VariantsArgs;
export const PlasmicReportCard__VariantProps = new Array<VariantPropType>();

export type PlasmicReportCard__ArgsType = {};
type ArgPropType = keyof PlasmicReportCard__ArgsType;
export const PlasmicReportCard__ArgProps = new Array<ArgPropType>();

export type PlasmicReportCard__OverridesType = {
  root?: p.Flex<"div">;
  title?: p.Flex<"div">;
  name?: p.Flex<"div">;
  dateTitle?: p.Flex<"div">;
  date?: p.Flex<"div">;
  priceTitle?: p.Flex<"div">;
  price?: p.Flex<"div">;
  descriptionTitle?: p.Flex<"div">;
  description?: p.Flex<"div">;
};

export interface DefaultReportCardProps {
  className?: string;
}

function PlasmicReportCard__RenderFunc(props: {
  variants: PlasmicReportCard__VariantsArgs;
  args: PlasmicReportCard__ArgsType;
  overrides: PlasmicReportCard__OverridesType;

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
      <div className={classNames(projectcss.all, sty.freeBox__kDeGf)}>
        <div className={classNames(projectcss.all, sty.freeBox__k7Xv8)}>
          <div
            data-plasmic-name={"title"}
            data-plasmic-override={overrides.title}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.title
            )}
          >
            {"專案名稱"}
          </div>

          <div
            data-plasmic-name={"name"}
            data-plasmic-override={overrides.name}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.name
            )}
          >
            {"桃園高鐵估價案"}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__oYrc3)}>
          <div
            data-plasmic-name={"dateTitle"}
            data-plasmic-override={overrides.dateTitle}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.dateTitle
            )}
          >
            {"日期"}
          </div>

          <div
            data-plasmic-name={"date"}
            data-plasmic-override={overrides.date}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.date
            )}
          >
            {"2022/08/10"}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__dyHIl)}>
          <div
            data-plasmic-name={"priceTitle"}
            data-plasmic-override={overrides.priceTitle}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.priceTitle
            )}
          >
            {"總金額"}
          </div>

          <div
            data-plasmic-name={"price"}
            data-plasmic-override={overrides.price}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.price
            )}
          >
            {"500,000"}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__bNeK)}>
          <div
            data-plasmic-name={"descriptionTitle"}
            data-plasmic-override={overrides.descriptionTitle}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.descriptionTitle
            )}
          >
            {"備註"}
          </div>

          <div
            data-plasmic-name={"description"}
            data-plasmic-override={overrides.description}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.description
            )}
          >
            {"鋼筋鋼骨結構"}
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "title",
    "name",
    "dateTitle",
    "date",
    "priceTitle",
    "price",
    "descriptionTitle",
    "description"
  ],
  title: ["title"],
  name: ["name"],
  dateTitle: ["dateTitle"],
  date: ["date"],
  priceTitle: ["priceTitle"],
  price: ["price"],
  descriptionTitle: ["descriptionTitle"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  title: "div";
  name: "div";
  dateTitle: "div";
  date: "div";
  priceTitle: "div";
  price: "div";
  descriptionTitle: "div";
  description: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReportCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReportCard__VariantsArgs;
    args?: PlasmicReportCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReportCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicReportCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicReportCard__ArgProps,
          internalVariantPropNames: PlasmicReportCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicReportCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReportCard";
  } else {
    func.displayName = `PlasmicReportCard.${nodeName}`;
  }
  return func;
}

export const PlasmicReportCard = Object.assign(
  // Top-level PlasmicReportCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    title: makeNodeComponent("title"),
    _name: makeNodeComponent("name"),
    dateTitle: makeNodeComponent("dateTitle"),
    date: makeNodeComponent("date"),
    priceTitle: makeNodeComponent("priceTitle"),
    price: makeNodeComponent("price"),
    descriptionTitle: makeNodeComponent("descriptionTitle"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicReportCard
    internalVariantProps: PlasmicReportCard__VariantProps,
    internalArgProps: PlasmicReportCard__ArgProps
  }
);

export default PlasmicReportCard;
/* prettier-ignore-end */