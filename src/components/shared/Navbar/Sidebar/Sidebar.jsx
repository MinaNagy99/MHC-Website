import React from "react";
import Link from "react";
import "./Sidebar.css";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PlusIcon from "./plusIcon";
import { useNavigate } from "react-router-dom";
import SocialMedia from "../../Footer/SocialMedia/SocialMedia";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
    setIsDrawerOpen(false);
  };
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer
        placement="right"
        className="bg-black"
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <List>
            {/* <Accordion>
              <ListItem
                className={`p-0 hover:bg-transparent ${
                  open === 1 ? "bg-transparent" : " "
                }`}
                selected={open === 1}
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3 px-0"
                >
                  <Typography
                    color="white"
                    className={`mr-auto font-normal hover:text-mainGold ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    HOME PAGE
                  </Typography>
                </AccordionHeader>
              </ListItem>
     
            </Accordion> */}
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    HOME PAGE
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* <AccordionBody className="py-1">
                <List className="p-0  ">
                  <ListItem
                    className={`${
                      open == 2 ? "bg-transparent" : "bg-transparent"
                    } hover:bg-transparen !text-gray-500 `}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5  opacity-0  "
                      />
                    </ListItemPrefix>
                    Management team
                  </ListItem>
                </List>
              </AccordionBody> */}
            </Accordion>
            <Accordion open={open === 2}>
              <ListItem
                className={`p-0 item mainItem hover:bg-transparent ${
                  open === 2 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3 px-0 !hover:text-mainGold"
                >
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon transition-transform`}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="white"
                    onClick={() =>
                      handleNavigate("/who-we-are", "firstSection")
                    }
                    className={`mr-auto itemText font-normal ${
                      open === 2 ? "text-mainGold" : ""
                    }`}
                  >
                    WHO WE ARE
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 !text-gray-500">
                  <ListItem
                    onClick={() => handleNavigate("/who-we-are", "management")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Management team
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/who-we-are", "values")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Our values
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/who-we-are", "journey")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Our journey
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/who-we-are", "holdings")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Holdings
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <ListItem
                className={`p-0 item mainItem hover:bg-transparent ${
                  open === 3 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 3}
              >
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3 px-0 !hover:text-mainGold"
                >
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon transition-transform`}
                      condition={open == 3}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="white"
                    onClick={() =>
                      handleNavigate("/industries", "architechture")
                    }
                    className={`mr-auto itemText font-normal ${
                      open === 3 ? "text-mainGold" : ""
                    }`}
                  >
                    INDUSTRIES
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 !text-gray-500">
                  <ListItem
                    onClick={() =>
                      handleNavigate("/industries", "architechture")
                    }
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Architecture and Urban architecture
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/industries", "engineer")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Engineering
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/industries", "oil")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Oil & gas
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/industries", "marine")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Marine and offshore structures
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/industries", "energy")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Energy management
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <ListItem
                className={`p-0 item mainItem hover:bg-transparent ${
                  open === 4 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 4}
              >
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-b-0 p-3 px-0  !hover:text-mainGold"
                >
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon transition-transform`}
                      condition={open == 4}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="white"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/signatureProjects");
                      setIsDrawerOpen(false);
                    }}
                    className={`mr-auto itemText font-normal ${
                      open === 4 ? "text-mainGold" : ""
                    }`}
                  >
                    SIGNATURE PROJECTS
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 !text-gray-500">
                  <ListItem
                    onClick={() =>
                      handleNavigate("/wolsey-projects", "architecture")
                    }
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Wolsey Projects
                  </ListItem>
                  <ListItem
                    onClick={() => handleNavigate("/arup-projects", "engineer")}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 opacity-0"
                      />
                    </ListItemPrefix>
                    Arup Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/investment-approach");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    INVESTMENT APPROACH{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* <AccordionBody className="py-1">
                <List className="p-0  ">
                  <ListItem
                    className={`${
                      open == 2 ? "bg-transparent" : "bg-transparent"
                    } hover:bg-transparen !text-gray-500 `}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5  opacity-0  "
                      />
                    </ListItemPrefix>
                    Management team
                  </ListItem>
                </List>
              </AccordionBody> */}
            </Accordion>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/careers");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    CAREERS{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* <AccordionBody className="py-1">
                <List className="p-0  ">
                  <ListItem
                    className={`${
                      open == 2 ? "bg-transparent" : "bg-transparent"
                    } hover:bg-transparen !text-gray-500 `}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5  opacity-0  "
                      />
                    </ListItemPrefix>
                    Management team
                  </ListItem>
                </List>
              </AccordionBody> */}
            </Accordion>

            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/contact-us");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    CONTACT US
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {/* <AccordionBody className="py-1">
                <List className="p-0  ">
                  <ListItem
                    className={`${
                      open == 2 ? "bg-transparent" : "bg-transparent"
                    } hover:bg-transparen !text-gray-500 `}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5  opacity-0  "
                      />
                    </ListItemPrefix>
                    Management team
                  </ListItem>
                </List>
              </AccordionBody> */}
            </Accordion>
            <hr className="my-2 border-white-50 " />
            <ListItem onClick={() => handleNavigate("/privacy-policy")}>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 opacity-0" />
              </ListItemPrefix>
              Privacy Policy
            </ListItem>
            <ListItem onClick={() => handleNavigate("/tearms-conditions")}>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 opacity-0" />
              </ListItemPrefix>
              Terms and conditions
            </ListItem>
            <hr className="my-2 border-white-50 mb-10" />
            <SocialMedia />
          </List>
        </Card>
      </Drawer>
    </>
  );
}
