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
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import ValueProp from "../../ValueProp"; // plasmic-import: JJc-2jC6k2mJoy/component
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicService.module.css"; // plasmic-import: RdOB0C9oEvS/css

import TargetIcon from "../landing_page_starter/icons/PlasmicIcon__Target"; // plasmic-import: Wt4zs8noN7sd2H/icon
import CheckIcon from "../landing_page_starter/icons/PlasmicIcon__Check"; // plasmic-import: gHCuOW8JEryqrm/icon
import CheckCircleIcon from "../landing_page_starter/icons/PlasmicIcon__CheckCircle"; // plasmic-import: _QAU6Sxfpz1Lu0/icon
import StrongIcon from "../landing_page_starter/icons/PlasmicIcon__Strong"; // plasmic-import: nO_1wxfmPKvWbo/icon
import WandIcon from "../landing_page_starter/icons/PlasmicIcon__Wand"; // plasmic-import: iQv5jNrYURIoDO/icon

export type PlasmicService__VariantMembers = {};

export type PlasmicService__VariantsArgs = {};
type VariantPropType = keyof PlasmicService__VariantsArgs;
export const PlasmicService__VariantProps = new Array<VariantPropType>();

export type PlasmicService__ArgsType = {};
type ArgPropType = keyof PlasmicService__ArgsType;
export const PlasmicService__ArgProps = new Array<ArgPropType>();

export type PlasmicService__OverridesType = {
  root?: p.Flex<"div">;
  serviceHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  serviceSection?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  processSection?: p.Flex<"div">;
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

        <title key="title">{PlasmicService.pageMetadata.title}</title>

        <meta
          key="og:title"
          property="og:title"
          content={PlasmicService.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicService.pageMetadata.title}
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
            data-plasmic-name={"serviceHeroSection"}
            data-plasmic-override={overrides.serviceHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.serviceHeroSection)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <Reveal
              className={classNames("__wab_instance", sty.reveal__kQbO)}
              effect={"fade" as const}
              triggerOnce={true}
            >
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
            </Reveal>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"serviceSection"}
            data-plasmic-override={overrides.serviceSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.serviceSection)}
          >
            <Reveal
              className={classNames("__wab_instance", sty.reveal__zWdkQ)}
              direction={"up" as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__saUls)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__r8KDg)}
                  >
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
                  <div
                    className={classNames(projectcss.all, sty.freeBox__moHkB)}
                  >
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
            </Reveal>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"processSection"}
            data-plasmic-override={overrides.processSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.processSection)}
          >
            <Reveal
              className={classNames("__wab_instance", sty.reveal__ewMsw)}
              triggerOnce={true}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__mD6Im
                )}
              >
                {"估價流程"}
              </h2>
            </Reveal>

            <Reveal
              className={classNames("__wab_instance", sty.reveal__gPx)}
              direction={"up" as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ofWnJ)}
              >
                <ValueProp
                  card={true}
                  className={classNames(
                    "__wab_instance",
                    sty.valueProp___77PhJ
                  )}
                  description={"此階段以概算估價為主。"}
                  flatIcon={true}
                  icon={
                    <TargetIcon
                      className={classNames(projectcss.all, sty.svg___6VdHy)}
                      role={"img"}
                    />
                  }
                  title={"規劃階段估價"}
                />

                <ValueProp
                  card={true}
                  className={classNames("__wab_instance", sty.valueProp__vruOk)}
                  description={"又稱底價估價，此階段可分初步設計及完整設計"}
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__i8MhB)}
                      role={"img"}
                    />
                  }
                  title={"設計階段估價"}
                />

                <ValueProp
                  card={true}
                  className={classNames("__wab_instance", sty.valueProp__gotK4)}
                  description={"又稱投標估價，此階段以概算估價或詳細估價為主。"}
                  flatIcon={true}
                  icon={
                    <CheckCircleIcon
                      className={classNames(projectcss.all, sty.svg__yZeAz)}
                      role={"img"}
                    />
                  }
                  title={"投標階段估價"}
                />
              </p.Stack>
            </Reveal>

            <Reveal
              className={classNames("__wab_instance", sty.reveal__fUrWy)}
              direction={"up" as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__m2FVg)}
              >
                <ValueProp
                  card={true}
                  className={classNames(
                    "__wab_instance",
                    sty.valueProp___1F5Op
                  )}
                  description={"又稱施工估價，此階段以詳細估價為主。"}
                  flatIcon={true}
                  icon={
                    <StrongIcon
                      className={classNames(projectcss.all, sty.svg__gGfH)}
                      role={"img"}
                    />
                  }
                  title={"施工階段估價"}
                />

                <ValueProp
                  card={true}
                  className={classNames("__wab_instance", sty.valueProp__uUrOr)}
                  description={"又稱期別估價或估驗，此階段以詳細估價為主。"}
                  flatIcon={true}
                  icon={
                    <WandIcon
                      className={classNames(projectcss.all, sty.svg___6QaNv)}
                      role={"img"}
                    />
                  }
                  title={"驗收階段估價"}
                />
              </p.Stack>
            </Reveal>
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
    "serviceHeroSection",
    "navbar",
    "serviceSection",
    "columns",
    "processSection",
    "footerSection"
  ],
  serviceHeroSection: ["serviceHeroSection", "navbar"],
  navbar: ["navbar"],
  serviceSection: ["serviceSection", "columns"],
  columns: ["columns"],
  processSection: ["processSection"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  serviceHeroSection: "div";
  navbar: typeof Navbar;
  serviceSection: "div";
  columns: "div";
  processSection: "div";
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
    serviceHeroSection: makeNodeComponent("serviceHeroSection"),
    navbar: makeNodeComponent("navbar"),
    serviceSection: makeNodeComponent("serviceSection"),
    columns: makeNodeComponent("columns"),
    processSection: makeNodeComponent("processSection"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicService
    internalVariantProps: PlasmicService__VariantProps,
    internalArgProps: PlasmicService__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "服務項目",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicService;
/* prettier-ignore-end */
