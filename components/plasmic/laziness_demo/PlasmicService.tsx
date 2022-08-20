// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: RdOB0C9oEvS
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
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicService.module.css"; // plasmic-import: RdOB0C9oEvS/css

export type PlasmicService__VariantMembers = {};

export type PlasmicService__VariantsArgs = {};
type VariantPropType = keyof PlasmicService__VariantsArgs;
export const PlasmicService__VariantProps = new Array<VariantPropType>();

export type PlasmicService__ArgsType = {};
type ArgPropType = keyof PlasmicService__ArgsType;
export const PlasmicService__ArgProps = new Array<ArgPropType>();

export type PlasmicService__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  aboutSection?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h3?: p.Flex<"h3">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultServiceProps {}

function PlasmicService__RenderFunc(props: {
  variants: PlasmicService__VariantsArgs;
  args: PlasmicService__ArgsType;
  overrides: PlasmicService__OverridesType;

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

        <title key="title">{"Service"}</title>

        <meta key="og:title" property="og:title" content={"Service"} />

        <meta key="twitter:title" name="twitter:title" content={"Service"} />
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
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2__gYpmx
              )}
            >
              {"服務項目"}
            </h2>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"aboutSection"}
            data-plasmic-override={overrides.aboutSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.aboutSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__wjmY4)}
            >
              <div className={classNames(projectcss.all, sty.column__saUls)}>
                <div className={classNames(projectcss.all, sty.freeBox__r8KDg)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__aVjLi
                    )}
                  >
                    {"結構估算"}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__s0UbG
                    )}
                  >
                    {"鋼筋、模板、混凝土數量估算、鋼筋施工圖檢視​"}
                  </div>
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__fTnmj)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___0CJgD)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___6MvU
                    )}
                  >
                    {"裝修估算​"}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xirU
                    )}
                  >
                    {"室內及外裝修數量、分層、分戶​"}
                  </div>
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column___8SfbJ)}>
                <div className={classNames(projectcss.all, sty.freeBox__moHkB)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__ebXgw
                    )}
                  >
                    {"工程預算書及標單編列​"}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__slJ9Q
                    )}
                  >
                    {"室內及外裝修數量、分層、分戶​"}
                  </div>
                </div>
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___6W7Q6)}
            >
              <div className={classNames(projectcss.all, sty.column__nmrlP)}>
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/laziness_demo/images/office4.webp",
                    fullWidth: 6000,
                    fullHeight: 4000,
                    aspectRatio: undefined
                  }}
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__rzfWc)}>
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  {"懶得算"}
                </h3>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__b7DUy
                  )}
                >
                  {
                    "於84年成立至今已有20多年的經驗，除擁有數十位『經驗豐富之估算工程師』外，更採用『專業營建管理系統軟體設備，由建築圖面轉工程數量計算，全面3D透視圖電腦化操作』提供營造建設單位，精確的成本估算，在營建工程上節省成本人力及提高效率，以降低公司營運成本，創造利潤，協助企業再造，提昇企業競爭力 。"
                  }
                </div>
              </div>
            </p.Stack>
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
    "aboutSection",
    "img",
    "h3",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar"],
  navbar: ["navbar"],
  aboutSection: ["aboutSection", "img", "h3"],
  img: ["img"],
  h3: ["h3"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroSection: "div";
  navbar: typeof Navbar;
  aboutSection: "div";
  img: typeof p.PlasmicImg;
  h3: "h3";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicService__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicService__VariantsArgs;
    args?: PlasmicService__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicService__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicService__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicService__ArgProps,
          internalVariantPropNames: PlasmicService__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicService__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicService";
  } else {
    func.displayName = `PlasmicService.${nodeName}`;
  }
  return func;
}

export const PlasmicService = Object.assign(
  // Top-level PlasmicService renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    aboutSection: makeNodeComponent("aboutSection"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicService
    internalVariantProps: PlasmicService__VariantProps,
    internalArgProps: PlasmicService__ArgProps
  }
);

export default PlasmicService;
/* prettier-ignore-end */
