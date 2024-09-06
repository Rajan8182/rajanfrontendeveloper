import React from "react";
import {Button} from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";
function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit m-5 ">FoodyZone</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex pl-56 gap-4">
          <NavbarItem>
            <NavLink to="/">Home</NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink to="/OurMenus">OurMenus</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/Contact Us">Contact Us</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/ About Us">About Us</NavLink>
          </NavbarItem>
        </NavbarContent>
        <Button
          radius="full"
          className="bg-green-950 text-yellow-400 border-lime-950- font-bold mr-12 h-10 w-52 hover:text-lime-950 bg-yellow-400 ">
          Make a Reservation
        </Button>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default Navbar1;
