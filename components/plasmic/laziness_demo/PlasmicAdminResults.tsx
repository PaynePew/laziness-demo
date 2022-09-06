// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: 0G2s1E43PqJ
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
import Navbar from "../../Navbar"; // plasmic-import: 2AU0qEyM1oCTCP/component
import Button from "../../Button"; // plasmic-import: kcMTy-wpYm5s_7/component
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicAdminResults.module.css"; // plasmic-import: 0G2s1E43PqJ/css

import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: Zu9y5vY-DbAu23/icon

export type PlasmicAdminResults__VariantMembers = {};

export type PlasmicAdminResults__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdminResults__VariantsArgs;
export const PlasmicAdminResults__VariantProps = new Array<VariantPropType>();

export type PlasmicAdminResults__ArgsType = {};
type ArgPropType = keyof PlasmicAdminResults__ArgsType;
export const PlasmicAdminResults__ArgProps = new Array<ArgPropType>();

export type PlasmicAdminResults__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  h2?: p.Flex<"h2">;
  accountSection?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultAdminResultsProps {}

function PlasmicAdminResults__RenderFunc(props: {
  variants: PlasmicAdminResults__VariantsArgs;
  args: PlasmicAdminResults__ArgsType;
  overrides: PlasmicAdminResults__OverridesType;

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />

        <title key="title">{"後台管理"}</title>

        <meta key="og:title" property="og:title" content={"後台管理"} />

        <meta key="twitter:title" name="twitter:title" content={"後台管理"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            data-plasmic-name={"headerHeroSection"}
            data-plasmic-override={overrides.headerHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerHeroSection)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {"會員資訊平台"}
            </h2>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"accountSection"}
            data-plasmic-override={overrides.accountSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.accountSection)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___0CAvP)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__z9Eq4)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button___7FJio)}
                  color={"green" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eFgv
                    )}
                  >
                    {"會員資料管理"}
                  </div>
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__lWjfD)}
                  color={"blue" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__g15Uh
                    )}
                  >
                    {"估算成果上傳"}
                  </div>
                </Button>
              </p.Stack>
            </div>
          </p.Stack>

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerHeroSection",
    "navbar",
    "h2",
    "accountSection",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar", "h2"],
  navbar: ["navbar"],
  h2: ["h2"],
  accountSection: ["accountSection"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroSection: "div";
  navbar: typeof Navbar;
  h2: "h2";
  accountSection: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdminResults__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdminResults__VariantsArgs;
    args?: PlasmicAdminResults__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdminResults__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAdminResults__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAdminResults__ArgProps,
          internalVariantPropNames: PlasmicAdminResults__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAdminResults__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdminResults";
  } else {
    func.displayName = `PlasmicAdminResults.${nodeName}`;
  }
  return func;
}

export const PlasmicAdminResults = Object.assign(
  // Top-level PlasmicAdminResults renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    h2: makeNodeComponent("h2"),
    accountSection: makeNodeComponent("accountSection"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicAdminResults
    internalVariantProps: PlasmicAdminResults__VariantProps,
    internalArgProps: PlasmicAdminResults__ArgProps
  }
);

export default PlasmicAdminResults;
/* prettier-ignore-end */
