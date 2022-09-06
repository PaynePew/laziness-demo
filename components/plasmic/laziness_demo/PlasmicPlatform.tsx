// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: 3qFurrWtCkt
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
import LogInForm from "../../LogInForm"; // plasmic-import: CtTUSfG2PU6/component
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicPlatform.module.css"; // plasmic-import: 3qFurrWtCkt/css

export type PlasmicPlatform__VariantMembers = {};

export type PlasmicPlatform__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlatform__VariantsArgs;
export const PlasmicPlatform__VariantProps = new Array<VariantPropType>();

export type PlasmicPlatform__ArgsType = {};
type ArgPropType = keyof PlasmicPlatform__ArgsType;
export const PlasmicPlatform__ArgProps = new Array<ArgPropType>();

export type PlasmicPlatform__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  h2?: p.Flex<"h2">;
  accountSection?: p.Flex<"div">;
  logInForm?: p.Flex<typeof LogInForm>;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultPlatformProps {}

function PlasmicPlatform__RenderFunc(props: {
  variants: PlasmicPlatform__VariantsArgs;
  args: PlasmicPlatform__ArgsType;
  overrides: PlasmicPlatform__OverridesType;

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

        <title key="title">{"會員資訊平台"}</title>

        <meta key="og:title" property="og:title" content={"會員資訊平台"} />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={"會員資訊平台"}
        />
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
            <div className={classNames(projectcss.all, sty.freeBox__uOToU)}>
              <div className={classNames(projectcss.all, sty.freeBox__gNdPd)}>
                <LogInForm
                  data-plasmic-name={"logInForm"}
                  data-plasmic-override={overrides.logInForm}
                  className={classNames("__wab_instance", sty.logInForm)}
                />
              </div>
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
    "logInForm",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar", "h2"],
  navbar: ["navbar"],
  h2: ["h2"],
  accountSection: ["accountSection", "logInForm"],
  logInForm: ["logInForm"],
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
  logInForm: typeof LogInForm;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlatform__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlatform__VariantsArgs;
    args?: PlasmicPlatform__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlatform__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlatform__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPlatform__ArgProps,
          internalVariantPropNames: PlasmicPlatform__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPlatform__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlatform";
  } else {
    func.displayName = `PlasmicPlatform.${nodeName}`;
  }
  return func;
}

export const PlasmicPlatform = Object.assign(
  // Top-level PlasmicPlatform renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    h2: makeNodeComponent("h2"),
    accountSection: makeNodeComponent("accountSection"),
    logInForm: makeNodeComponent("logInForm"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicPlatform
    internalVariantProps: PlasmicPlatform__VariantProps,
    internalArgProps: PlasmicPlatform__ArgProps
  }
);

export default PlasmicPlatform;
/* prettier-ignore-end */
