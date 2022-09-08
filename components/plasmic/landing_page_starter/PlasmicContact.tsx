// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: WMNdaZGNmns
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
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import ContactForm from "../../ContactForm"; // plasmic-import: Xyeaz66fEcw/component
import { GoogleMap } from "../../GoogleMap"; // plasmic-import: w2uxiFuhyB/codeComponent
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: WMNdaZGNmns/css

export type PlasmicContact__VariantMembers = {};

export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: p.Flex<"div">;
  contactHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  contactForm?: p.Flex<typeof ContactForm>;
  googleMap?: p.Flex<typeof GoogleMap>;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultContactProps {}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />

        <title key="title">{"聯絡我們"}</title>

        <meta key="og:title" property="og:title" content={"聯絡我們"} />

        <meta key="twitter:title" name="twitter:title" content={"聯絡我們"} />

        <meta
          key="description"
          name="description"
          content={"工程估算，請聯絡我們"}
        />

        <meta
          key="og:description"
          property="og:description"
          content={"工程估算，請聯絡我們"}
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={"工程估算，請聯絡我們"}
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
            data-plasmic-name={"contactHeroSection"}
            data-plasmic-override={overrides.contactHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.contactHeroSection)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__do5Pz)}>
              <div className={classNames(projectcss.all, sty.freeBox__q6OGw)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__ovw6X)}
                  triggerOnce={true}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__uHv9U
                    )}
                  >
                    {"懶得算"}
                  </h2>

                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___3Ag4U
                    )}
                  >
                    {"幫你精算"}
                  </h2>
                </Reveal>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox___7OV3A)}>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__xbvs8)}
                  triggerOnce={true}
                >
                  <ContactForm
                    data-plasmic-name={"contactForm"}
                    data-plasmic-override={overrides.contactForm}
                    className={classNames("__wab_instance", sty.contactForm)}
                  />
                </Reveal>
              </div>
            </div>
          </p.Stack>

          <div className={classNames(projectcss.all, sty.freeBox__el6C8)}>
            <div className={classNames(projectcss.all, sty.freeBox__tKPdM)}>
              <Reveal
                className={classNames("__wab_instance", sty.reveal__jVsJn)}
                triggerOnce={true}
              >
                <GoogleMap
                  data-plasmic-name={"googleMap"}
                  data-plasmic-override={overrides.googleMap}
                  className={classNames("__wab_instance", sty.googleMap)}
                  height={500 as const}
                  location={"桃園高鐵站" as const}
                  width={1140 as const}
                />
              </Reveal>
            </div>
          </div>

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
    "contactHeroSection",
    "navbar",
    "contactForm",
    "googleMap",
    "footerSection"
  ],
  contactHeroSection: ["contactHeroSection", "navbar", "contactForm"],
  navbar: ["navbar"],
  contactForm: ["contactForm"],
  googleMap: ["googleMap"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  contactHeroSection: "div";
  navbar: typeof Navbar;
  contactForm: typeof ContactForm;
  googleMap: typeof GoogleMap;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContact__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    contactHeroSection: makeNodeComponent("contactHeroSection"),
    navbar: makeNodeComponent("navbar"),
    contactForm: makeNodeComponent("contactForm"),
    googleMap: makeNodeComponent("googleMap"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
