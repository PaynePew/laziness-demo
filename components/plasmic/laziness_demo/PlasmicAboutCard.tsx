// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: _2BVlTZVvM
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

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicAboutCard.module.css"; // plasmic-import: _2BVlTZVvM/css

import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: Zu9y5vY-DbAu23/icon

export type PlasmicAboutCard__VariantMembers = {
  card: "card";
};

export type PlasmicAboutCard__VariantsArgs = {
  card?: SingleBooleanChoiceArg<"card">;
};

type VariantPropType = keyof PlasmicAboutCard__VariantsArgs;
export const PlasmicAboutCard__VariantProps = new Array<VariantPropType>(
  "card"
);

export type PlasmicAboutCard__ArgsType = {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAboutCard__ArgsType;
export const PlasmicAboutCard__ArgProps = new Array<ArgPropType>(
  "heading",
  "description",
  "image",
  "children"
);

export type PlasmicAboutCard__OverridesType = {
  root?: p.Flex<"div">;
  root2?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  h5?: p.Flex<"h5">;
};

export interface DefaultAboutCardProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  children?: React.ReactNode;
  card?: SingleBooleanChoiceArg<"card">;
  className?: string;
}

function PlasmicAboutCard__RenderFunc(props: {
  variants: PlasmicAboutCard__VariantsArgs;
  args: PlasmicAboutCard__ArgsType;
  overrides: PlasmicAboutCard__OverridesType;

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
    true ? (
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
          sty.root,
          { [sty.rootcard]: hasVariant(variants, "card", "card") }
        )}
      >
        {true ? (
          <div
            data-plasmic-name={"root2"}
            data-plasmic-override={overrides.root2}
            className={classNames(projectcss.all, sty.root2, {
              [sty.root2card]: hasVariant(variants, "card", "card")
            })}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.freeBox__ynqI)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__po5Ny, {
                      [sty.freeBoxcard__po5Nyv6Dsw]: hasVariant(
                        variants,
                        "card",
                        "card"
                      )
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: (
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__brqa3)}
                          displayHeight={"100%" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={{
                            src: "/plasmic/laziness_demo/images/calculate.webp",
                            fullWidth: 2848,
                            fullHeight: 4272,
                            aspectRatio: undefined
                          }}
                        />
                      ),

                      value: args.image
                    })}
                  </div>
                ) : null}

                <div
                  className={classNames(projectcss.all, sty.freeBox___5O2Ag, {
                    [sty.freeBoxcard___5O2Agv6Dsw]: hasVariant(
                      variants,
                      "card",
                      "card"
                    )
                  })}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__c28J9)}
                  >
                    <h4
                      data-plasmic-name={"h4"}
                      data-plasmic-override={overrides.h4}
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        sty.h4,
                        { [sty.h4card]: hasVariant(variants, "card", "card") }
                      )}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents: "介紹標題",
                        value: args.heading,
                        className: classNames(sty.slotTargetHeading)
                      })}
                    </h4>

                    <h5
                      data-plasmic-name={"h5"}
                      data-plasmic-override={overrides.h5}
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        sty.h5,
                        { [sty.h5card]: hasVariant(variants, "card", "card") }
                      )}
                    >
                      {p.renderPlasmicSlot({
                        defaultContents: "介紹文字",
                        value: args.description,
                        className: classNames(sty.slotTargetDescription)
                      })}
                    </h5>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__scTin, {
                      [sty.freeBoxcard__scTinV6Dsw]: hasVariant(
                        variants,
                        "card",
                        "card"
                      )
                    })}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: (
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__w5G4M
                          )}
                          color={"primary" as const}
                          round={true}
                        >
                          {"服務項目"}
                        </Button>
                      ),

                      value: args.children
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "root2", "h4", "h5"],
  root2: ["root2", "h4", "h5"],
  h4: ["h4"],
  h5: ["h5"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  root2: "div";
  h4: "h4";
  h5: "h5";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutCard__VariantsArgs;
    args?: PlasmicAboutCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAboutCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAboutCard__ArgProps,
          internalVariantPropNames: PlasmicAboutCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAboutCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutCard";
  } else {
    func.displayName = `PlasmicAboutCard.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutCard = Object.assign(
  // Top-level PlasmicAboutCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    root2: makeNodeComponent("root2"),
    h4: makeNodeComponent("h4"),
    h5: makeNodeComponent("h5"),

    // Metadata about props expected for PlasmicAboutCard
    internalVariantProps: PlasmicAboutCard__VariantProps,
    internalArgProps: PlasmicAboutCard__ArgProps
  }
);

export default PlasmicAboutCard;
/* prettier-ignore-end */
