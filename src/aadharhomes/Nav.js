import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  Image,
  AvatarBadge,
  HStack,
  Spacer,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImage from "../Images/100acress.png";
// import { useNavigate  } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";

const PropertyBox = ({ text }) => (
  <Box
    bg="red"
    p={[1, 2]}
    rounded={["full"]}
    color="white"
    margin={["1"]}
    fontSize={["md", "lg", "sm"]}
    textAlign="center"
    width={["100%", "100%", "none"]}
  >
    <Text as="b">{text}</Text>
  </Box>
);

const Links = ["Home", "Rent", "Buy", "ViewAll Property"];
const menuItems = ["Modify Profile", "Change Password", "Logout"];

const SpacerComponent = () => <Box width="60px" />;

const MenuListContainer = ({ isOpen, onClose }) => {
  const history = useNavigate();

  const showToastMessage = () => {
    toast.success("Logging out!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };

  const HandleUserLogout = async () => {
    try {
      const response = await axios.get(
        "https://acre.onrender.com/postPerson/logout"
      );
      history("/");
      localStorage.removeItem("myToken");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const token = localStorage.getItem("myToken");
  // console.log(token, "dropdown");
  return (
    <>
      {token ? (
        <>
          <Box
            position="absolute"
            mt={{ base: "200px", md: "200px", sm: "150px" }}
            right={0}
            zIndex={1}
            bg="white"
            p={2}
            whiteSpace="nowrap"
            rounded="md"
            display={isOpen ? "block" : "none"}
          >
            <ToastContainer />

            <MenuItem fontSize="sm">
              <NavLink>Edit Profile</NavLink>
            </MenuItem>

            <MenuItem fontSize="sm">
              <NavLink>Change Password</NavLink>
            </MenuItem>

            <MenuItem fontSize="sm">
              <NavLink>Delete account</NavLink>
            </MenuItem>

            <MenuItem fontSize="sm" onClick={() => HandleUserLogout({})}>
              <NavLink onClick={showToastMessage}>LogOut</NavLink>
            </MenuItem>
          </Box>{" "}
        </>
      ) : (
        <>
          <Box
            position="absolute"
            mt={{ base: "200px", md: "190px", sm: "150px" }}
            right={0}
            zIndex={1}
            bg="white"
            p={1}
            whiteSpace="nowrap"
            rounded="md"
            display={isOpen ? "block" : "none"}
          >
            <ToastContainer />

            <MenuItem fontSize="sm" color={"red"}>
              <NavLink to="/SignIn">Login/</NavLink>
              <NavLink to="/SignUp">Register</NavLink>
            </MenuItem>

            <MenuItem fontSize="sm">
              <NavLink>Recently Searched</NavLink>
            </MenuItem>

            <MenuItem fontSize="sm">
              <NavLink>Shortlisted</NavLink>
            </MenuItem>

            <MenuItem fontSize="sm">
              <NavLink>Contacted</NavLink>
            </MenuItem>




          </Box>
        </>
      )}
    </>
  );
};

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mobileNumber, setMobileNumber] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuOpen1, setMenuOpen1] = useState(false);

  const handleHover = () => {
    setMenuOpen(true);
  };

  const handleLeave = () => {
    setMenuOpen(false);
  };
  const handleHover1 = () => {
    setMenuOpen1(true);
  };

  const handleLeave1 = () => {
    setMenuOpen1(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  const handleLoginRegisterClick = () => {
    setShowLoginModal(true);
    onClose();
  };

  const history = useNavigate();
  
  const [token, setToken] = useState();
  const checkUserAuth = () => {
    const storedToken = localStorage.getItem("myToken");
    // console.log(storedToken, "get token");
    setToken(storedToken);
    // console.log(token, "new value");
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <Wrapper className="section" >
      <Box>
      <Box bg="red" px={{ base: 0, md: 4, lg: 7 }}>
        <Flex h={14} alignItems="center" justifyContent="space-between">
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="unstyled"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            _focus={{ boxShadow: "none" }}
            color="white"
          />
          <HStack
            spacing={isSmallerThan768 ? 0 : 8}
            alignItems="center"
            flex="1"
          >
            <Box>
              <Image
                maxW={["100px", "200px"]}
                minW={["50px", "70px"]}
                width={["xs", "sm", "md", "lg"]}
                src={logoImage}
                alt="100acress logo"
              />
            </Box>

            {!isSmallerThan768 && (
              <>
                <div
                  className="relative group"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    to="/rent"
                    className="text-white font-semibold text-lg px-1 py-2 rounded-md "
                  >
                    Rent
                  </Link>
                  <div
                    className={`absolute mt-2 bg-white    text-gray-800 w-96 border border-gray-300 rounded-md shadow-lg z-10 ${
                      isMenuOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex">
                      <div className="w-48">
                        <a
                          href="#"
                          className="block px-4 py-2 text-black font-semibold text-lg hover:bg-gray-200"
                        >
                          Commercials
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Gurugaon
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Delhi
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Noida
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Dubai
                        </a>
                      </div>

                      <div className="w-48">
                        <a
                          href="#"
                          className="block text-black font-semibold text-lg px-4 py-2 hover:bg-gray-200"
                        >
                          Residentials
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Gurugaon
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Delhi
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Noida
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Dubai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="relative group"
                  onMouseEnter={handleHover1}
                  onMouseLeave={handleLeave1}
                >
                  <Link
                    to="/buy"
                    className="text-white font-semibold text-lg px-1 py-2 rounded-md "
                  >
                    Buy
                  </Link>
                  <div
                    className={`absolute mt-2 bg-white    text-gray-800 w-96 border border-gray-300 rounded-md shadow-lg z-10 ${
                      isMenuOpen1 ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex ">
                      <div className="w-48">
                        <a
                          href="#"
                          className="block px-4 py-2  text-black font-semibold text-lg hover:bg-gray-200"
                        >
                          Commercials
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Gurugaon
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Delhi
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Noida
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Commercial Property Dubai
                        </a>
                      </div>

                      <div className="w-48">
                        <a
                          href="#"
                          className="block text-black font-semibold text-lg px-4 py-2 hover:bg-gray-200"
                        >
                          Residentials
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Gurugaon
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Delhi
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Noida
                        </a>
                        <a
                          href="#"
                          className="block text-sm px-4 py-2 hover:bg-gray-200"
                        >
                          Residential Property Dubai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {token ? (<Link
                  to={"/postproperty"}
                  className="text-white font-semibold text-lg"
                  
                >
                Sell
                </Link>):(<Link
                  to={"/SignIn"}
                  className="text-white font-semibold text-lg"
                  
                >
                Sell
                </Link>)}
                <Link
                  to={"/projects"}
                  className="text-white font-semibold text-lg"
                >
                  Projects
                </Link>

                <Link
                  to={"/viewallproperty"}
                  className="text-white font-semibold text-lg"
                >
                  ViewAll Property
                </Link>
              </>
            )}
          </HStack>
          <Flex alignItems="center">
            <div className="" style={{ marginRight: "-69px" }}>
              {token ? (
                <Link to="/postproperty">
                  <button className="btn flex btn-light text-black   btn-sm  sm:p-1 sm:text-sm ">
                    <strong onClick={checkUserAuth} className="text-red-600">
                      {" "}
                      Post Property{" "}
                    </strong>
                    <Link className="d-none d-xl-inline d-md-inline">
                      <button className="btn btn-danger p-0  ">Free</button>
                    </Link>
                  </button>
                
                </Link>
              ) : (
                <Link to="/SignIn">
                  <button className="btn flex btn-light text-black   btn-sm  sm:p-1 sm:text-sm ">
                    <strong onClick={checkUserAuth} className="text-red-600">
                      {" "}
                      Post Property{" "}
                    </strong>
                    <Link className="d-none d-xl-inline d-md-inline">
                      <button className="btn btn-danger p-0 ">Free</button>
                    </Link>
                  </button>
                </Link>
              )}
            </div>

            <SpacerComponent />
            <Menu>
              <MenuButton
                as={Button}
                borderRadius="l"
                variant="unstyled"
                aria-label="Profile"
                onMouseEnter={toggleDropdown}
                
              >
                <Avatar
                  name="User"
                  boxSize="1.7em"
                  bgColor="white"
                  marginLeft={7}
                  icon={
                    <AvatarBadge
                      boxSize={{ base: "0", md: "1em", sm: "0.8em" }}
                      bg="green.500"
                    />
                  }
                />
              </MenuButton>
              <IconButton
                icon={<ChevronDownIcon color="white" boxSize="2em" />}
                variant="unstyled"
                aria-label="Toggle Dropdown"
                onMouseEnter={toggleDropdown}
              />

              <MenuListContainer
                isOpen={isDropdownOpen}
                onClose={onClose}
                onLoginRegisterClick={handleLoginRegisterClick}
              />
            </Menu>
          </Flex>
        </Flex>

        {isOpen && (
          <Box
            pb={4}
            display={{
              base: "0em",
              sm: "30em",
              md: "48em",
              lg: "62em",
              xl: "80em",
            }}
          >
            <Stack color="white" as="nav" spacing={4}>
              {/* {Links.map((link) => (
                <Link
                  key={link}
                  style={{ textDecoration: "none" }}
                  to={`/${link}`}
                >
                  {link}
                </Link>
              ))} */}

              <Link to={"/rent"} className="text-white font-semibold text-lg">
                Rent
              </Link>

              <Link to={"/buy"} className="text-white font-semibold text-lg">
                Buy
              </Link>

              <Link
                to={"/SellProperty"}
                className="text-white font-semibold text-lg"
              >
                Sell
              </Link>

              <Link
                to={"/projects"}
                className="text-white font-semibold text-lg"
              >
                Projects
              </Link>

              <Link
                to={"/allproperty"}
                className="text-white font-semibold text-lg"
              >
                ViewAll Property
              </Link>
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
    </Wrapper>
  );
}
const Wrapper = styled.section`
.shimmer-container {
  position: relative;
  width: 200px;
  height: 40px;
  overflow: hidden;
  background-color: #800e0e; /* Background color for the shimmer effect */
}

/* Styling for the shimmer animation */
.shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent); /* Shimmer gradient */
  animation: shimmerAnimation 2s infinite; /* Animation properties */
}

/* Keyframes for the shimmer animation */
@keyframes shimmerAnimation {
  0% {
      transform: translateX(-100%);
  }
  100% {
      transform: translateX(100%);
  }
}

/* Basic text styling */
.text {
  margin: 10px;
  font-size: 18px;
}`
