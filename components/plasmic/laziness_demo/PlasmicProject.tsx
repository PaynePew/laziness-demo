// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: DhprYlf-5nu
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
import ProjectCardDetail from "../../ProjectCardDetail"; // plasmic-import: UgNbjXEvxu8/component
import ProjectCardDetailReverse from "../../ProjectCardDetailReverse"; // plasmic-import: WueZ8IvzTBv/component
import ProjectCardPrimary from "../../ProjectCardPrimary"; // plasmic-import: VqqXUhJrgP/component
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicProject.module.css"; // plasmic-import: DhprYlf-5nu/css

export type PlasmicProject__VariantMembers = {};

export type PlasmicProject__VariantsArgs = {};
type VariantPropType = keyof PlasmicProject__VariantsArgs;
export const PlasmicProject__VariantProps = new Array<VariantPropType>();

export type PlasmicProject__ArgsType = {};
type ArgPropType = keyof PlasmicProject__ArgsType;
export const PlasmicProject__ArgProps = new Array<ArgPropType>();

export type PlasmicProject__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  h2?: p.Flex<"h2">;
  projectSection?: p.Flex<"div">;
  projectCardDetail?: p.Flex<typeof ProjectCardDetail>;
  projectCardDetailReverse?: p.Flex<typeof ProjectCardDetailReverse>;
  img?: p.Flex<typeof p.PlasmicImg>;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultProjectProps {}

function PlasmicProject__RenderFunc(props: {
  variants: PlasmicProject__VariantsArgs;
  args: PlasmicProject__ArgsType;
  overrides: PlasmicProject__OverridesType;

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

        <title key="title">{"工程實績"}</title>

        <meta key="og:title" property="og:title" content={"工程實績"} />

        <meta key="twitter:title" name="twitter:title" content={"工程實績"} />
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
              {"工程實績"}
            </h2>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"projectSection"}
            data-plasmic-override={overrides.projectSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.projectSection)}
          >
            <ProjectCardDetail
              data-plasmic-name={"projectCardDetail"}
              data-plasmic-override={overrides.projectCardDetail}
              className={classNames("__wab_instance", sty.projectCardDetail)}
            />

            <ProjectCardDetailReverse
              data-plasmic-name={"projectCardDetailReverse"}
              data-plasmic-override={overrides.projectCardDetailReverse}
              className={classNames(
                "__wab_instance",
                sty.projectCardDetailReverse
              )}
            />

            <div className={classNames(projectcss.all, sty.freeBox__vQsK1)}>
              <ProjectCardPrimary
                className={classNames(
                  "__wab_instance",
                  sty.projectCardPrimary__nX0W
                )}
                title={"桃園市大巨蛋改建估算"}
              />

              <ProjectCardPrimary
                className={classNames(
                  "__wab_instance",
                  sty.projectCardPrimary__kJ8Zy
                )}
                projectImage={
                  <div
                    className={classNames(projectcss.all, sty.freeBox__l1Omf)}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"100%" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"100%" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/laziness_demo/images/bimStructure.webp",
                        fullWidth: 7087,
                        fullHeight: 5096,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                }
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
    "projectSection",
    "projectCardDetail",
    "projectCardDetailReverse",
    "img",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar", "h2"],
  navbar: ["navbar"],
  h2: ["h2"],
  projectSection: [
    "projectSection",
    "projectCardDetail",
    "projectCardDetailReverse",
    "img"
  ],
  projectCardDetail: ["projectCardDetail"],
  projectCardDetailReverse: ["projectCardDetailReverse"],
  img: ["img"],
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
  projectSection: "div";
  projectCardDetail: typeof ProjectCardDetail;
  projectCardDetailReverse: typeof ProjectCardDetailReverse;
  img: typeof p.PlasmicImg;
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProject__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProject__VariantsArgs;
    args?: PlasmicProject__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProject__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProject__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProject__ArgProps,
          internalVariantPropNames: PlasmicProject__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProject__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProject";
  } else {
    func.displayName = `PlasmicProject.${nodeName}`;
  }
  return func;
}

export const PlasmicProject = Object.assign(
  // Top-level PlasmicProject renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    h2: makeNodeComponent("h2"),
    projectSection: makeNodeComponent("projectSection"),
    projectCardDetail: makeNodeComponent("projectCardDetail"),
    projectCardDetailReverse: makeNodeComponent("projectCardDetailReverse"),
    img: makeNodeComponent("img"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicProject
    internalVariantProps: PlasmicProject__VariantProps,
    internalArgProps: PlasmicProject__ArgProps
  }
);

export default PlasmicProject;
/* prettier-ignore-end */
