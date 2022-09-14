// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: kctI_m0loCm
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
import AccountCard from "../../AccountCard"; // plasmic-import: CKUgB3T9na/component
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicAdminAccounts.module.css"; // plasmic-import: kctI_m0loCm/css

export type PlasmicAdminAccounts__VariantMembers = {};

export type PlasmicAdminAccounts__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdminAccounts__VariantsArgs;
export const PlasmicAdminAccounts__VariantProps = new Array<VariantPropType>();

export type PlasmicAdminAccounts__ArgsType = {};
type ArgPropType = keyof PlasmicAdminAccounts__ArgsType;
export const PlasmicAdminAccounts__ArgProps = new Array<ArgPropType>();

export type PlasmicAdminAccounts__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  h2?: p.Flex<"h2">;
  accountSection?: p.Flex<"div">;
  accountCard?: p.Flex<typeof AccountCard>;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultAdminAccountsProps {}

function PlasmicAdminAccounts__RenderFunc(props: {
  variants: PlasmicAdminAccounts__VariantsArgs;
  args: PlasmicAdminAccounts__ArgsType;
  overrides: PlasmicAdminAccounts__OverridesType;

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
            <div className={classNames(projectcss.all, sty.freeBox___7JVqm)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__oBdzJ)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jDsyy
                    )}
                  >
                    {"公司名稱"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ivFkb
                    )}
                  >
                    {"姓名"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1Q7Iw
                    )}
                  >
                    {"職稱"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__plwKk
                    )}
                  >
                    {"電子信箱"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yZlI
                    )}
                  >
                    {"連絡電話"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__txs2U
                    )}
                  >
                    {"地址"}
                  </div>
                </p.Stack>
              ) : null}

              <AccountCard
                data-plasmic-name={"accountCard"}
                data-plasmic-override={overrides.accountCard}
                className={classNames("__wab_instance", sty.accountCard)}
                email={"nlpam06@gmail.com"}
              />
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
    "accountCard",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar", "h2"],
  navbar: ["navbar"],
  h2: ["h2"],
  accountSection: ["accountSection", "accountCard"],
  accountCard: ["accountCard"],
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
  accountCard: typeof AccountCard;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdminAccounts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdminAccounts__VariantsArgs;
    args?: PlasmicAdminAccounts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdminAccounts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAdminAccounts__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAdminAccounts__ArgProps,
          internalVariantPropNames: PlasmicAdminAccounts__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAdminAccounts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdminAccounts";
  } else {
    func.displayName = `PlasmicAdminAccounts.${nodeName}`;
  }
  return func;
}

export const PlasmicAdminAccounts = Object.assign(
  // Top-level PlasmicAdminAccounts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    h2: makeNodeComponent("h2"),
    accountSection: makeNodeComponent("accountSection"),
    accountCard: makeNodeComponent("accountCard"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicAdminAccounts
    internalVariantProps: PlasmicAdminAccounts__VariantProps,
    internalArgProps: PlasmicAdminAccounts__ArgProps
  }
);

export default PlasmicAdminAccounts;
/* prettier-ignore-end */
