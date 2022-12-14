// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicNavbar,
  DefaultNavbarProps,
} from "./plasmic/landing_page_starter/PlasmicNavbar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface NavbarProps extends Omit<DefaultNavbarProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultNavbarProps altogether and have
// total control over the props for your component.
export interface NavbarProps extends DefaultNavbarProps {}

function Navbar_(props: NavbarProps, ref: HTMLElementRefOf<"div">) {
  const [open, setOpen] = React.useState(false);

  return (
    <PlasmicNavbar
      root={{ ref }}
      {...props}
      showModal={open}
      hamburger={{
        onClick: () => {
          setOpen(!open);
        },
      }}
      closeIcon={{
        onClick: () => {
          setOpen(false);
        },
      }}
    />
  );
}

const Navbar = React.forwardRef(Navbar_);
export default Navbar;
