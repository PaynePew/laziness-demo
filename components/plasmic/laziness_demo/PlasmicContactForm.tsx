// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: Xyeaz66fEcw
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
import TextInput from "../../TextInput"; // plasmic-import: f3MaxzneYzglDZ/component
import TextArea from "../../TextArea"; // plasmic-import: YKrmeOP35_5/component
import Button from "../../Button"; // plasmic-import: kcMTy-wpYm5s_7/component
import Divider from "../../Divider"; // plasmic-import: cTOkkRidcYFrIe/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicContactForm.module.css"; // plasmic-import: Xyeaz66fEcw/css

import SearchIcon from "../landing_page_starter/icons/PlasmicIcon__Search"; // plasmic-import: lDxLgl1XFFiQRC/icon
import CheckIcon from "../landing_page_starter/icons/PlasmicIcon__Check"; // plasmic-import: gHCuOW8JEryqrm/icon
import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: Zu9y5vY-DbAu23/icon
import WandIcon from "../landing_page_starter/icons/PlasmicIcon__Wand"; // plasmic-import: iQv5jNrYURIoDO/icon

export type PlasmicContactForm__VariantMembers = {};

export type PlasmicContactForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactForm__VariantsArgs;
export const PlasmicContactForm__VariantProps = new Array<VariantPropType>();

export type PlasmicContactForm__ArgsType = {};
type ArgPropType = keyof PlasmicContactForm__ArgsType;
export const PlasmicContactForm__ArgProps = new Array<ArgPropType>();

export type PlasmicContactForm__OverridesType = {
  root?: p.Flex<"div">;
  requestForm?: p.Flex<"form">;
  fromName?: p.Flex<typeof TextInput>;
  phoneNumber?: p.Flex<typeof TextInput>;
  fromEmail?: p.Flex<typeof TextInput>;
  message?: p.Flex<typeof TextArea>;
  sendEmail?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  divider?: p.Flex<typeof Divider>;
};

export interface DefaultContactFormProps {
  className?: string;
}

function PlasmicContactForm__RenderFunc(props: {
  variants: PlasmicContactForm__VariantsArgs;
  args: PlasmicContactForm__ArgsType;
  overrides: PlasmicContactForm__OverridesType;

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

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__aLvgJ)}>
        <p.Stack
          as={"form"}
          data-plasmic-name={"requestForm"}
          data-plasmic-override={overrides.requestForm}
          hasGap={true}
          className={classNames(projectcss.all, sty.requestForm)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___9VagJ)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gYx1
              )}
            >
              {"?????????????????????????????????????????????????????????"}
            </div>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__aWbzE)}
          >
            <TextInput
              data-plasmic-name={"fromName"}
              data-plasmic-override={overrides.fromName}
              className={classNames("__wab_instance", sty.fromName)}
              defaultValue={"" as const}
              placeholder={"??????*" as const}
              type={"text" as const}
            />

            <TextInput
              data-plasmic-name={"phoneNumber"}
              data-plasmic-override={overrides.phoneNumber}
              className={classNames("__wab_instance", sty.phoneNumber)}
              placeholder={"????????????*" as const}
              type={"text" as const}
            />

            <TextInput
              data-plasmic-name={"fromEmail"}
              data-plasmic-override={overrides.fromEmail}
              className={classNames("__wab_instance", sty.fromEmail)}
              placeholder={"????????????*" as const}
              type={"email" as const}
            />

            <TextArea
              data-plasmic-name={"message"}
              data-plasmic-override={overrides.message}
              className={classNames("__wab_instance", sty.message)}
              placeholder={"????????????*" as const}
            />
          </p.Stack>

          <Button
            data-plasmic-name={"sendEmail"}
            data-plasmic-override={overrides.sendEmail}
            className={classNames("__wab_instance", sty.sendEmail)}
            color={"red" as const}
            endIcon={
              <WandIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
          >
            {"????????????"}
          </Button>
        </p.Stack>

        <Divider
          data-plasmic-name={"divider"}
          data-plasmic-override={overrides.divider}
          className={classNames("__wab_instance", sty.divider)}
        />

        <div className={classNames(projectcss.all, sty.freeBox___3V1Qb)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qbjef
            )}
          >
            {"????????????:8:00AM~17:00PM"}
          </div>
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "requestForm",
    "fromName",
    "phoneNumber",
    "fromEmail",
    "message",
    "sendEmail",
    "svg",
    "divider"
  ],
  requestForm: [
    "requestForm",
    "fromName",
    "phoneNumber",
    "fromEmail",
    "message",
    "sendEmail",
    "svg"
  ],
  fromName: ["fromName"],
  phoneNumber: ["phoneNumber"],
  fromEmail: ["fromEmail"],
  message: ["message"],
  sendEmail: ["sendEmail", "svg"],
  svg: ["svg"],
  divider: ["divider"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  requestForm: "form";
  fromName: typeof TextInput;
  phoneNumber: typeof TextInput;
  fromEmail: typeof TextInput;
  message: typeof TextArea;
  sendEmail: typeof Button;
  svg: "svg";
  divider: typeof Divider;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactForm__VariantsArgs;
    args?: PlasmicContactForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContactForm__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicContactForm__ArgProps,
          internalVariantPropNames: PlasmicContactForm__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContactForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactForm";
  } else {
    func.displayName = `PlasmicContactForm.${nodeName}`;
  }
  return func;
}

export const PlasmicContactForm = Object.assign(
  // Top-level PlasmicContactForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    requestForm: makeNodeComponent("requestForm"),
    fromName: makeNodeComponent("fromName"),
    phoneNumber: makeNodeComponent("phoneNumber"),
    fromEmail: makeNodeComponent("fromEmail"),
    message: makeNodeComponent("message"),
    sendEmail: makeNodeComponent("sendEmail"),
    svg: makeNodeComponent("svg"),
    divider: makeNodeComponent("divider"),

    // Metadata about props expected for PlasmicContactForm
    internalVariantProps: PlasmicContactForm__VariantProps,
    internalArgProps: PlasmicContactForm__ArgProps
  }
);

export default PlasmicContactForm;
/* prettier-ignore-end */
