// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtkpEraJg2gN978YDtMYaP
// Component: m5br8UXZfbX
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
import Divider from "../../Divider"; // plasmic-import: cTOkkRidcYFrIe/component
import TextInput from "../../TextInput"; // plasmic-import: f3MaxzneYzglDZ/component
import Button from "../../Button"; // plasmic-import: kcMTy-wpYm5s_7/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: qtkpEraJg2gN978YDtMYaP/projectcss
import sty from "./PlasmicSignUpForm.module.css"; // plasmic-import: m5br8UXZfbX/css

import SearchIcon from "../landing_page_starter/icons/PlasmicIcon__Search"; // plasmic-import: lDxLgl1XFFiQRC/icon
import CheckIcon from "../landing_page_starter/icons/PlasmicIcon__Check"; // plasmic-import: gHCuOW8JEryqrm/icon
import Rolling1S200PxsvgIcon from "./icons/PlasmicIcon__Rolling1S200Pxsvg"; // plasmic-import: bpymhvy4a/icon
import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: Zu9y5vY-DbAu23/icon
import WandIcon from "../landing_page_starter/icons/PlasmicIcon__Wand"; // plasmic-import: iQv5jNrYURIoDO/icon

export type PlasmicSignUpForm__VariantMembers = {
  isInfoFlow: "isInfoFlow";
  isLoading: "isLoading";
  isError: "isError";
};

export type PlasmicSignUpForm__VariantsArgs = {
  isInfoFlow?: SingleBooleanChoiceArg<"isInfoFlow">;
  isLoading?: SingleBooleanChoiceArg<"isLoading">;
  isError?: SingleBooleanChoiceArg<"isError">;
};

type VariantPropType = keyof PlasmicSignUpForm__VariantsArgs;
export const PlasmicSignUpForm__VariantProps = new Array<VariantPropType>(
  "isInfoFlow",
  "isLoading",
  "isError"
);

export type PlasmicSignUpForm__ArgsType = {
  errorMessage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSignUpForm__ArgsType;
export const PlasmicSignUpForm__ArgProps = new Array<ArgPropType>(
  "errorMessage"
);

export type PlasmicSignUpForm__OverridesType = {
  root?: p.Flex<"div">;
  requestForm?: p.Flex<"form">;
  companyInput?: p.Flex<typeof TextInput>;
  nameInput?: p.Flex<typeof TextInput>;
  jobTitleInput?: p.Flex<typeof TextInput>;
  phoneNumberInput?: p.Flex<typeof TextInput>;
  addressInput?: p.Flex<typeof TextInput>;
  emailInput?: p.Flex<typeof TextInput>;
  passwordInput?: p.Flex<typeof TextInput>;
  submitButton?: p.Flex<typeof Button>;
  finishButton?: p.Flex<typeof Button>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultSignUpFormProps {
  errorMessage?: React.ReactNode;
  isInfoFlow?: SingleBooleanChoiceArg<"isInfoFlow">;
  isLoading?: SingleBooleanChoiceArg<"isLoading">;
  isError?: SingleBooleanChoiceArg<"isError">;
  className?: string;
}

function PlasmicSignUpForm__RenderFunc(props: {
  variants: PlasmicSignUpForm__VariantsArgs;
  args: PlasmicSignUpForm__ArgsType;
  overrides: PlasmicSignUpForm__OverridesType;

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
        sty.root,
        {
          [sty.rootisError]: hasVariant(variants, "isError", "isError"),
          [sty.rootisInfoFlow]: hasVariant(
            variants,
            "isInfoFlow",
            "isInfoFlow"
          ),
          [sty.rootisInfoFlow_isLoading]:
            hasVariant(variants, "isInfoFlow", "isInfoFlow") &&
            hasVariant(variants, "isLoading", "isLoading"),
          [sty.rootisLoading]: hasVariant(variants, "isLoading", "isLoading")
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__spZlR)}>
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
            className={classNames(projectcss.all, sty.freeBox__vFxyv)}
          >
            <Divider
              className={classNames("__wab_instance", sty.divider__rnmNj)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7MU
              )}
            >
              {"Or"}
            </div>

            <Divider
              className={classNames("__wab_instance", sty.divider__w1Ni9)}
            />
          </p.Stack>

          {(hasVariant(variants, "isError", "isError") ? true : true) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__k4Hfe, {
                [sty.freeBoxisError__k4HfeKergB]: hasVariant(
                  variants,
                  "isError",
                  "isError"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "顯示錯誤訊息",
                value: args.errorMessage,
                className: classNames(sty.slotTargetErrorMessage, {
                  [sty.slotTargetErrorMessageisError]: hasVariant(
                    variants,
                    "isError",
                    "isError"
                  )
                })
              })}
            </div>
          ) : null}

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___33Oc1)}
          >
            {(
              hasVariant(variants, "isInfoFlow", "isInfoFlow") ? true : false
            ) ? (
              <TextInput
                data-plasmic-name={"companyInput"}
                data-plasmic-override={overrides.companyInput}
                className={classNames("__wab_instance", sty.companyInput, {
                  [sty.companyInputisError]: hasVariant(
                    variants,
                    "isError",
                    "isError"
                  ),
                  [sty.companyInputisInfoFlow]: hasVariant(
                    variants,
                    "isInfoFlow",
                    "isInfoFlow"
                  )
                })}
                defaultValue={"" as const}
                placeholder={"公司名稱" as const}
                type={"text" as const}
              />
            ) : null}

            {(
              hasVariant(variants, "isInfoFlow", "isInfoFlow") ? true : false
            ) ? (
              <TextInput
                data-plasmic-name={"nameInput"}
                data-plasmic-override={overrides.nameInput}
                className={classNames("__wab_instance", sty.nameInput, {
                  [sty.nameInputisError]: hasVariant(
                    variants,
                    "isError",
                    "isError"
                  ),
                  [sty.nameInputisInfoFlow]: hasVariant(
                    variants,
                    "isInfoFlow",
                    "isInfoFlow"
                  )
                })}
                defaultValue={"" as const}
                placeholder={"姓名" as const}
                type={"text" as const}
              />
            ) : null}

            {(
              hasVariant(variants, "isInfoFlow", "isInfoFlow") ? true : false
            ) ? (
              <TextInput
                data-plasmic-name={"jobTitleInput"}
                data-plasmic-override={overrides.jobTitleInput}
                className={classNames("__wab_instance", sty.jobTitleInput, {
                  [sty.jobTitleInputisError]: hasVariant(
                    variants,
                    "isError",
                    "isError"
                  ),
                  [sty.jobTitleInputisInfoFlow]: hasVariant(
                    variants,
                    "isInfoFlow",
                    "isInfoFlow"
                  )
                })}
                defaultValue={"" as const}
                placeholder={"職稱" as const}
                type={"text" as const}
              />
            ) : null}

            {(
              hasVariant(variants, "isInfoFlow", "isInfoFlow") ? true : false
            ) ? (
              <TextInput
                data-plasmic-name={"phoneNumberInput"}
                data-plasmic-override={overrides.phoneNumberInput}
                className={classNames("__wab_instance", sty.phoneNumberInput, {
                  [sty.phoneNumberInputisError]: hasVariant(
                    variants,
                    "isError",
                    "isError"
                  ),
                  [sty.phoneNumberInputisInfoFlow]: hasVariant(
                    variants,
                    "isInfoFlow",
                    "isInfoFlow"
                  )
                })}
                defaultValue={"" as const}
                placeholder={"聯絡電話" as const}
                type={"text" as const}
              />
            ) : null}

            {(
              hasVariant(variants, "isInfoFlow", "isInfoFlow") ? true : false
            ) ? (
              <TextInput
                data-plasmic-name={"addressInput"}
                data-plasmic-override={overrides.addressInput}
                className={classNames("__wab_instance", sty.addressInput, {
                  [sty.addressInputisError]: hasVariant(
                    variants,
                    "isError",
                    "isError"
                  ),
                  [sty.addressInputisInfoFlow]: hasVariant(
                    variants,
                    "isInfoFlow",
                    "isInfoFlow"
                  )
                })}
                defaultValue={"" as const}
                placeholder={"地址" as const}
                type={"text" as const}
              />
            ) : null}

            {(
              hasVariant(variants, "isInfoFlow", "isInfoFlow") ? true : true
            ) ? (
              <TextInput
                data-plasmic-name={"emailInput"}
                data-plasmic-override={overrides.emailInput}
                className={classNames("__wab_instance", sty.emailInput, {
                  [sty.emailInputisError]: hasVariant(
                    variants,
                    "isError",
                    "isError"
                  ),
                  [sty.emailInputisInfoFlow]: hasVariant(
                    variants,
                    "isInfoFlow",
                    "isInfoFlow"
                  )
                })}
                defaultValue={"" as const}
                placeholder={"帳號(電子郵件)*" as const}
                type={"email" as const}
              />
            ) : null}

            {(
              hasVariant(variants, "isInfoFlow", "isInfoFlow") ? true : true
            ) ? (
              <TextInput
                data-plasmic-name={"passwordInput"}
                data-plasmic-override={overrides.passwordInput}
                className={classNames("__wab_instance", sty.passwordInput, {
                  [sty.passwordInputisInfoFlow]: hasVariant(
                    variants,
                    "isInfoFlow",
                    "isInfoFlow"
                  )
                })}
                placeholder={"密碼*" as const}
                type={"password" as const}
              />
            ) : null}
          </p.Stack>

          {(hasVariant(variants, "isLoading", "isLoading") ? true : true) ? (
            <Rolling1S200PxsvgIcon
              className={classNames(projectcss.all, sty.svg__sx8Oz, {
                [sty.svgisLoading__sx8OzPzUal]: hasVariant(
                  variants,
                  "isLoading",
                  "isLoading"
                )
              })}
              role={"img"}
            />
          ) : null}

          {(
            hasVariant(variants, "isLoading", "isLoading")
              ? true
              : hasVariant(variants, "isInfoFlow", "isInfoFlow")
              ? true
              : true
          ) ? (
            <Button
              data-plasmic-name={"submitButton"}
              data-plasmic-override={overrides.submitButton}
              className={classNames("__wab_instance", sty.submitButton, {
                [sty.submitButtonisInfoFlow]: hasVariant(
                  variants,
                  "isInfoFlow",
                  "isInfoFlow"
                ),
                [sty.submitButtonisLoading]: hasVariant(
                  variants,
                  "isLoading",
                  "isLoading"
                )
              })}
              color={"red" as const}
              endIcon={
                <WandIcon
                  className={classNames(projectcss.all, sty.svg__fzoJu)}
                  role={"img"}
                />
              }
            >
              {hasVariant(variants, "isInfoFlow", "isInfoFlow")
                ? "完成"
                : "註冊"}
            </Button>
          ) : null}

          {(
            hasVariant(variants, "isLoading", "isLoading")
              ? true
              : hasVariant(variants, "isInfoFlow", "isInfoFlow")
              ? true
              : false
          ) ? (
            <Button
              data-plasmic-name={"finishButton"}
              data-plasmic-override={overrides.finishButton}
              className={classNames("__wab_instance", sty.finishButton, {
                [sty.finishButtonisInfoFlow]: hasVariant(
                  variants,
                  "isInfoFlow",
                  "isInfoFlow"
                ),
                [sty.finishButtonisLoading]: hasVariant(
                  variants,
                  "isLoading",
                  "isLoading"
                )
              })}
              color={"red" as const}
              endIcon={
                <WandIcon
                  className={classNames(projectcss.all, sty.svg__ywHjU)}
                  role={"img"}
                />
              }
            >
              {hasVariant(variants, "isInfoFlow", "isInfoFlow")
                ? "完成"
                : "註冊"}
            </Button>
          ) : null}
        </p.Stack>

        <Divider className={classNames("__wab_instance", sty.divider__oGdht)} />

        <div className={classNames(projectcss.all, sty.freeBox__oxe4Q)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__k0Yck
            )}
          >
            {"此為估算成果交付平台"}
          </div>

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button, {
              [sty.buttonisInfoFlow]: hasVariant(
                variants,
                "isInfoFlow",
                "isInfoFlow"
              )
            })}
            color={"link" as const}
            flat={true}
            link={`/contact`}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xFt
              )}
            >
              {"工程估算問題，請直接聯絡我們"}
            </div>
          </Button>
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "requestForm",
    "companyInput",
    "nameInput",
    "jobTitleInput",
    "phoneNumberInput",
    "addressInput",
    "emailInput",
    "passwordInput",
    "submitButton",
    "finishButton",
    "button"
  ],
  requestForm: [
    "requestForm",
    "companyInput",
    "nameInput",
    "jobTitleInput",
    "phoneNumberInput",
    "addressInput",
    "emailInput",
    "passwordInput",
    "submitButton",
    "finishButton"
  ],
  companyInput: ["companyInput"],
  nameInput: ["nameInput"],
  jobTitleInput: ["jobTitleInput"],
  phoneNumberInput: ["phoneNumberInput"],
  addressInput: ["addressInput"],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  submitButton: ["submitButton"],
  finishButton: ["finishButton"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  requestForm: "form";
  companyInput: typeof TextInput;
  nameInput: typeof TextInput;
  jobTitleInput: typeof TextInput;
  phoneNumberInput: typeof TextInput;
  addressInput: typeof TextInput;
  emailInput: typeof TextInput;
  passwordInput: typeof TextInput;
  submitButton: typeof Button;
  finishButton: typeof Button;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUpForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUpForm__VariantsArgs;
    args?: PlasmicSignUpForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUpForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignUpForm__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSignUpForm__ArgProps,
          internalVariantPropNames: PlasmicSignUpForm__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSignUpForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpForm";
  } else {
    func.displayName = `PlasmicSignUpForm.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpForm = Object.assign(
  // Top-level PlasmicSignUpForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    requestForm: makeNodeComponent("requestForm"),
    companyInput: makeNodeComponent("companyInput"),
    nameInput: makeNodeComponent("nameInput"),
    jobTitleInput: makeNodeComponent("jobTitleInput"),
    phoneNumberInput: makeNodeComponent("phoneNumberInput"),
    addressInput: makeNodeComponent("addressInput"),
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    submitButton: makeNodeComponent("submitButton"),
    finishButton: makeNodeComponent("finishButton"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicSignUpForm
    internalVariantProps: PlasmicSignUpForm__VariantProps,
    internalArgProps: PlasmicSignUpForm__ArgProps
  }
);

export default PlasmicSignUpForm;
/* prettier-ignore-end */
