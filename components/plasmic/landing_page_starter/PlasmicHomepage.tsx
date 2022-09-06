// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: mPPg8I0ucCOUu
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
import Button from "../../Button"; // plasmic-import: kcMTy-wpYm5s_7/component
import AboutCard from "../../AboutCard"; // plasmic-import: _2BVlTZVvM/component
import FooterSection from "../../FooterSection"; // plasmic-import: 1ez9I6FpbEKqEg/component

import { useScreenVariants as useScreenVariantsnCpqQwRKrRf2Hx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nCpqQwRKrRf2Hx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: mPPg8I0ucCOUu/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: Zu9y5vY-DbAu23/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  columns?: p.Flex<"div">;
  column?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  aboutSection?: p.Flex<"div">;
  contactSection?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

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

        <title key="title">{"首頁"}</title>

        <meta key="og:title" property="og:title" content={"首頁"} />

        <meta key="twitter:title" name="twitter:title" content={"首頁"} />
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
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
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

              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div
                  data-plasmic-name={"column"}
                  data-plasmic-override={overrides.column}
                  className={classNames(projectcss.all, sty.column)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dMkDl)}
                  >
                    <Reveal
                      cascade={false}
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__jm1Ei
                      )}
                      damping={undefined}
                      delay={6600 as const}
                      duration={2000 as const}
                      effect={"fade" as const}
                      reverse={false}
                      triggerOnce={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__quhx4,
                          "vertical-word" as const
                        )}
                      >
                        {"有最好的回饋。​"}
                      </div>
                    </Reveal>

                    <Reveal
                      cascade={false}
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__fRaUl
                      )}
                      damping={undefined}
                      delay={5200 as const}
                      duration={2000 as const}
                      effect={"fade" as const}
                      reverse={false}
                      triggerOnce={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eSfse,
                          "vertical-word" as const
                        )}
                      >
                        {"辛勤的汗水，​"}
                      </div>
                    </Reveal>

                    <Reveal
                      cascade={false}
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__dniWd
                      )}
                      damping={undefined}
                      delay={3900 as const}
                      duration={2000 as const}
                      effect={"fade" as const}
                      reverse={false}
                      triggerOnce={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qzYz,
                          "vertical-word" as const
                        )}
                      >
                        {"讓我們的經驗幫助您，​"}
                      </div>
                    </Reveal>

                    <Reveal
                      cascade={false}
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__vwjPk
                      )}
                      damping={undefined}
                      delay={2600 as const}
                      duration={2000 as const}
                      effect={"fade" as const}
                      reverse={false}
                      triggerOnce={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pvigX,
                          "vertical-word" as const
                        )}
                      >
                        {"一土一方，一吋一長。"}
                      </div>
                    </Reveal>

                    <Reveal
                      cascade={false}
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__vNefP
                      )}
                      damping={undefined}
                      delay={1300 as const}
                      duration={2000 as const}
                      effect={"fade" as const}
                      reverse={false}
                      triggerOnce={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hp6B7,
                          "vertical-word" as const
                        )}
                      >
                        {"在每件工程中不斷累積，"}
                      </div>
                    </Reveal>

                    <Reveal
                      cascade={false}
                      className={classNames("__wab_instance", sty.reveal__twEo)}
                      damping={undefined}
                      duration={2000 as const}
                      effect={"fade" as const}
                      reverse={false}
                      triggerOnce={true}
                    >
                      <h3
                        data-plasmic-name={"h3"}
                        data-plasmic-override={overrides.h3}
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3,
                          "vertical-word" as const
                        )}
                      >
                        {"更快速及精確的掌握"}
                      </h3>
                    </Reveal>
                  </p.Stack>
                </div>
              </p.Stack>
            </p.Stack>
          ) : null}

          <p.Stack
            as={"div"}
            data-plasmic-name={"aboutSection"}
            data-plasmic-override={overrides.aboutSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.aboutSection)}
          >
            <Reveal
              cascade={false}
              className={classNames("__wab_instance", sty.reveal__jbvFs)}
              direction={"right" as const}
              effect={"fade" as const}
              triggerOnce={true}
            >
              <div className={classNames(projectcss.all, sty.freeBox__gYXgv)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__eQxa)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4___8NItU,
                      "" as const
                    )}
                  >
                    {"#懶得算，幫你精打細算"}
                  </h4>

                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__krYd6,
                      "" as const
                    )}
                  >
                    {"更快速及精確的掌握"}
                  </h2>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__quoig,
                      "" as const
                    )}
                  >
                    {"懶得算，幫你精打細算"}
                  </h6>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bTOd
                    )}
                  >
                    {
                      "在一件一件的工程估算中，累積出的完善體制，深知成本掌控的各項細節。懶得算，希望每位客戶都能在此輕鬆獲取精確的估算資料，讓辛苦的汗水皆有所獲。"
                    }
                  </div>
                </p.Stack>

                <Button
                  className={classNames("__wab_instance", sty.button__cmlJc)}
                  color={"primary" as const}
                  link={`/about`}
                  round={true}
                >
                  {"關於我們"}
                </Button>
              </div>
            </Reveal>
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.contactSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ribUq)}
            >
              <Reveal
                className={classNames("__wab_instance", sty.reveal__oEYmC)}
                direction={"left" as const}
                triggerOnce={true}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__oYaqq)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__xCmVw,
                      "" as const
                    )}
                  >
                    {"#各項施工圖配合"}
                  </h4>

                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__ipP,
                      "" as const
                    )}
                  >
                    {"專業營建管理系統"}
                  </h2>

                  <h6
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6__xjPvn,
                      "" as const
                    )}
                  >
                    {"從平面到3D圖型，一次搞定"}
                  </h6>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__w3S1G
                    )}
                  >
                    {
                      "汶源資訊所研發的一系列營建業ERP高階管理系統，自微軟DOS時代即已成熟普遍的被應用於臺灣的營建業市場，並普獲營建業界的認同、肯定與好評。(此為範例文字)"
                    }
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button___2NPfY)}
                    color={"primary" as const}
                    link={`/contact`}
                    round={true}
                  >
                    {"聯絡我們"}
                  </Button>
                </p.Stack>
              </Reveal>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___4Zqdh)}
              >
                <Reveal
                  cascade={true}
                  className={classNames("__wab_instance", sty.reveal__dpSjK)}
                  direction={"right" as const}
                  effect={"fade" as const}
                  triggerOnce={true}
                >
                  <AboutCard
                    className={classNames(
                      "__wab_instance",
                      sty.aboutCard__q0OIz
                    )}
                    description={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sslFf
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "結構估算(鋼筋、模板、混凝土數量估算、鋼筋施工圖檢視)、裝修估算(室內及外裝修數量、分層、分戶)、工程預算書及標單編列。"
                          : "結構估算(鋼筋、模板、混凝土數量估算、鋼筋施工圖檢視)、裝修估算(室內及外裝修數量、分層、分戶)、工程預算書及標單編列。"}
                      </div>
                    }
                    heading={"專業的服務項目"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___0C8WF
                      )}
                      color={"primary" as const}
                      link={`/services`}
                      round={true}
                    >
                      {"服務項目"}
                    </Button>
                  </AboutCard>

                  <AboutCard
                    className={classNames(
                      "__wab_instance",
                      sty.aboutCard__v3MYx
                    )}
                    description={
                      "至今累積超過五十件以上工程估算案例，您可以從過往的專案了解我們對於估算的嚴格把關。"
                    }
                    heading={"不斷累積的專案經驗"}
                    image={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__q51Ti)}
                        displayHeight={"100%" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/laziness_demo/images/tower.webp",
                          fullWidth: 5715,
                          fullHeight: 3810,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    <Button
                      className={classNames("__wab_instance", sty.button__azQ7)}
                      color={"primary" as const}
                      link={`/project`}
                      round={true}
                    >
                      {"工程實績"}
                    </Button>
                  </AboutCard>

                  <AboutCard
                    className={classNames(
                      "__wab_instance",
                      sty.aboutCard__pRjb3
                    )}
                    description={
                      "從RC、SRC/SC、SS，每層樓地板面積的收費皆清楚列出，在報價及後續流程上都有專人為您解釋，可以更專心在專案執行上。"
                    }
                    heading={"清楚的收費方式"}
                    image={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__eLu5A)}
                        displayHeight={"100%" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"100%" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/laziness_demo/images/meeting1.webp",
                          fullWidth: 7360,
                          fullHeight: 4912,
                          aspectRatio: undefined
                        }}
                      />
                    }
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__rukeC
                      )}
                      color={"primary" as const}
                      link={`/price`}
                      round={true}
                    >
                      {"價目表"}
                    </Button>
                  </AboutCard>
                </Reveal>
              </p.Stack>
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
    "columns",
    "column",
    "h3",
    "aboutSection",
    "contactSection",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar", "columns", "column", "h3"],
  navbar: ["navbar"],
  columns: ["columns", "column", "h3"],
  column: ["column", "h3"],
  h3: ["h3"],
  aboutSection: ["aboutSection"],
  contactSection: ["contactSection"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroSection: "div";
  navbar: typeof Navbar;
  columns: "div";
  column: "div";
  h3: "h3";
  aboutSection: "div";
  contactSection: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    h3: makeNodeComponent("h3"),
    aboutSection: makeNodeComponent("aboutSection"),
    contactSection: makeNodeComponent("contactSection"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
