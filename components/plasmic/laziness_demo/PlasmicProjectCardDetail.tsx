// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: UgNbjXEvxu8
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
import sty from "./PlasmicProjectCardDetail.module.css"; // plasmic-import: UgNbjXEvxu8/css

export type PlasmicProjectCardDetail__VariantMembers = {
  revers: "revers";
};

export type PlasmicProjectCardDetail__VariantsArgs = {
  revers?: SingleBooleanChoiceArg<"revers">;
};

type VariantPropType = keyof PlasmicProjectCardDetail__VariantsArgs;
export const PlasmicProjectCardDetail__VariantProps =
  new Array<VariantPropType>("revers");

export type PlasmicProjectCardDetail__ArgsType = {
  projectImage?: React.ReactNode;
  projectSubImage?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  locationTitle?: React.ReactNode;
  location?: React.ReactNode;
  categoryTitle?: React.ReactNode;
  category?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProjectCardDetail__ArgsType;
export const PlasmicProjectCardDetail__ArgProps = new Array<ArgPropType>(
  "projectImage",
  "projectSubImage",
  "title",
  "description",
  "locationTitle",
  "location",
  "categoryTitle",
  "category"
);

export type PlasmicProjectCardDetail__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
};

export interface DefaultProjectCardDetailProps {
  projectImage?: React.ReactNode;
  projectSubImage?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  locationTitle?: React.ReactNode;
  location?: React.ReactNode;
  categoryTitle?: React.ReactNode;
  category?: React.ReactNode;
  revers?: SingleBooleanChoiceArg<"revers">;
  className?: string;
}

function PlasmicProjectCardDetail__RenderFunc(props: {
  variants: PlasmicProjectCardDetail__VariantsArgs;
  args: PlasmicProjectCardDetail__ArgsType;
  overrides: PlasmicProjectCardDetail__OverridesType;

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
        sty.root,
        { [sty.rootrevers]: hasVariant(variants, "revers", "revers") }
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__doWvV, {
            [sty.freeBoxrevers__doWvVh81JN]: hasVariant(
              variants,
              "revers",
              "revers"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__r8WDs, {
              [sty.freeBoxrevers__r8WDSh81JN]: hasVariant(
                variants,
                "revers",
                "revers"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__am6Dw)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/laziness_demo/images/bimHouse.webp",
                    fullWidth: 4730,
                    fullHeight: 2405,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.projectImage
            })}
          </div>

          <div
            className={classNames(projectcss.all, sty.freeBox__vWeSq, {
              [sty.freeBoxrevers__vWeSQh81JN]: hasVariant(
                variants,
                "revers",
                "revers"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__jihxC)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/laziness_demo/images/hallway.webp",
                      fullWidth: 3024,
                      fullHeight: 4032,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__iD1Du)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/laziness_demo/images/office2.webp",
                      fullWidth: 6720,
                      fullHeight: 4480,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___3Dvs1)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/laziness_demo/images/hallway.webp",
                      fullWidth: 3024,
                      fullHeight: 4032,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ejBlV)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/laziness_demo/images/office2.webp",
                      fullWidth: 6720,
                      fullHeight: 4480,
                      aspectRatio: undefined
                    }}
                  />
                </React.Fragment>
              ),
              value: args.projectSubImage
            })}
          </div>
        </p.Stack>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__dowBa, {
          [sty.freeBoxrevers__dowBAh81JN]: hasVariant(
            variants,
            "revers",
            "revers"
          )
        })}
      >
        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(projectcss.all, projectcss.h3, sty.h3, {
            [sty.h3revers]: hasVariant(variants, "revers", "revers")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "高雄七期改建工程",
            value: args.title
          })}
        </h3>

        <div
          className={classNames(projectcss.all, sty.freeBox__knD, {
            [sty.freeBoxrevers__knDh81JN]: hasVariant(
              variants,
              "revers",
              "revers"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents:
              "此次改建案總經費3.38 億元。預期新增五百坪室內空間 。從前期的標案，到最後的完工，所有的估算皆完整評估。該設施的總面積為 140,000 平方公尺。 具體工作範圍包括機械、電氣、管道和消防的成本分析。​",
            value: args.description
          })}
        </div>

        <h4
          className={classNames(projectcss.all, projectcss.h4, sty.h4__xJerT, {
            [sty.h4revers__xJerTh81JN]: hasVariant(variants, "revers", "revers")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "地點:",
            value: args.locationTitle
          })}
        </h4>

        <div
          className={classNames(projectcss.all, sty.freeBox__utyex, {
            [sty.freeBoxrevers__utyexh81JN]: hasVariant(
              variants,
              "revers",
              "revers"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "高雄",
            value: args.location
          })}
        </div>

        <h4
          className={classNames(projectcss.all, projectcss.h4, sty.h4__uyXl, {
            [sty.h4revers__uyXlh81JN]: hasVariant(variants, "revers", "revers")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "項目:",
            value: args.categoryTitle
          })}
        </h4>

        <div
          className={classNames(projectcss.all, sty.freeBox__zmDtG, {
            [sty.freeBoxrevers__zmDtGh81JN]: hasVariant(
              variants,
              "revers",
              "revers"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "結構與裝修數量估算",
            value: args.category
          })}
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectCardDetail__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectCardDetail__VariantsArgs;
    args?: PlasmicProjectCardDetail__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectCardDetail__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProjectCardDetail__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProjectCardDetail__ArgProps,
          internalVariantPropNames: PlasmicProjectCardDetail__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProjectCardDetail__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectCardDetail";
  } else {
    func.displayName = `PlasmicProjectCardDetail.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectCardDetail = Object.assign(
  // Top-level PlasmicProjectCardDetail renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicProjectCardDetail
    internalVariantProps: PlasmicProjectCardDetail__VariantProps,
    internalArgProps: PlasmicProjectCardDetail__ArgProps
  }
);

export default PlasmicProjectCardDetail;
/* prettier-ignore-end */
