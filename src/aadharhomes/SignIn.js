import {
  Box,
  useDisclosure,
  Flex,
  Modal,
  Stack,
  ModalOverlay,
  Heading,
  ModalCloseButton,
  Text,
  ModalHeader,
  Container,
  ModalContent,
  Input,
  ModalBody,
  Button,
  FormControl,
  SimpleGrid,
  FormLabel,
  Avatar,
  ModalFooter,
  AvatarGroup,
  useBreakpointValue,
  HStack,
  boxShadow,
  Spacer,
  //   useBreakpoint,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const avatars = [
  {
    name: "Ryan Florence",
    url: "https://media.licdn.com/dms/image/D4D03AQFj9UYIZygoyw/profile-displayphoto-shrink_200_200/0/1697560567355?e=1709769600&v=beta&t=byQs73I7WKTOkS77J73eRxteUrrxEFql8YZjzlrEo48",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

let loginAPI = "https://acre.onrender.com/postPerson/Role/";
export default function SignUp() {
  const [token, setToken] = useState(""); //token

  const history = useNavigate();

  const showToastMessage = () => {
    toast.success("Login successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const avatarSize = useBreakpointValue({ base: "md", md: "lg" });
  const width = useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" });
  const zIndex = useBreakpointValue({ base: -1, md: -1, lg: 0 });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [userLogin, setuserLogin] = useState({
    password: "",
    email: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setuserLogin({ ...userLogin, [name]: value });
  };

  const handleUserLogin = async () => {
    const { email, password } = userLogin;
    if (email && password) {
      try {
        const loginResponse = await axios.post(
          "https://acre.onrender.com/postPerson/verify_Login",
          { email, password }
        );

        const newToken = loginResponse.data.token;
        localStorage.setItem("myToken", JSON.stringify(newToken));
        setToken(newToken);

        if (loginResponse.status === 200) {
          const roleResponse = await axios.get(
            `https://acre.onrender.com/postPerson/Role/${email}`
          );
          if (roleResponse.status === 200) {
            if (roleResponse.data.User.role === "Seller") {
              const sellerId = roleResponse.data.User._id;
              localStorage.setItem("mySellerId", JSON.stringify(sellerId));
              history("/");
            } else {
              history("/Admin/dashboard");
            }
          } else {
            console.error("Role fetch failed:", roleResponse);
            alert(
              `Failed to fetch role information. Server responded with an error: ${roleResponse.status}`
            );
          }
        } else {
          console.error("Login failed:", loginResponse);
          alert(
            `Invalid credentials. Server responded with an error: ${loginResponse.status}`
          );
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("The email address or password entered is not valid");
      }
    } else {
      alert("Please Enter both Email and Password");
    }
  };

  const handleUserSignUp = () => {
    history("/SignUp");
  };

  const handleForgetUserPassword = () => {
    history("/forgetpassword");
  };

  const handleClick = () => {
    
    handleUserLogin();
  };
  const { email, password } = userLogin;
  const [passwordHide, setPasswordHide] = useState(true);

  const handleHideUnHide = () => {
    setPasswordHide(!passwordHide);
  };

  return (
    <Box position={"relative"}>
      {password !== "" && email !== "" && <ToastContainer />}
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 10 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Residential{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Commercial{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              Properties
            </Text>{" "}
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={avatarSize}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg", lg: "2xl" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "54px", md: "70px" })}
              minHeight={useBreakpointValue({ base: "54px", md: "70px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Welcome to{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                100acress
              </Text>
              .com
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re India's most trust worthy real estate Dealer and we are
              looking for amazing investors and buyers just like you! Become a
              part of our team and skyrocket your life!
            </Text>
          </Stack>
          <Box as={"form"}>
            <Stack spacing={4}>
              <Input
                placeholder="Email@provider.com"
                name="email"
                onChange={handleLoginChange}
                value={userLogin.email}
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <InputGroup>
                <Input
                  placeholder="Enter password"
                  name="password"
                  type={passwordHide ? "password" : "text"}
                  onChange={handleLoginChange}
                  value={userLogin.password}
                  bg="gray.100"
                  border={0}
                  color="gray.500"
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <InputRightElement>
                  {passwordHide ? (
                    <FaEyeSlash onClick={handleHideUnHide} />
                  ) : (
                    <FaEye onClick={handleHideUnHide} />
                  )}
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              onClick={handleClick}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              <span>Login to your Account</span>
            </Button>

            <Flex mt="4">
              <Button
                onClick={handleForgetUserPassword}
                variant="ghost"
                w="45%"
              >
                Forgot Password
              </Button>
              <Spacer />
              <Button
                fontFamily={"heading"}
                w="45%"
                bgGradient="linear(to-r, red.400,pink.400)"
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
                onClick={handleUserSignUp}
                color={"white"}
              >
                Sign-up
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Container>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay zIndex={10} />
        <ModalContent
          w="20%"
          h="50%"
          zIndex={11}
          position="absolute"
          bottom="20%"
          transform="translate(-50%, -50%)"
        >
          <ModalHeader>Forget Your Password</ModalHeader>
          <Text pl="6" pr="2">
            We'll email you a link to reset your password
          </Text>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <FormControl>
              <FormLabel pb="0">E-Mail</FormLabel>
              <Input
                variant="outline"
                focusBorderColor="black"
                ref={initialRef}
                placeholder="Enter your Email"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              bgGradient="linear(to-r, red.400,pink.400)"
              _hover={{ bg: "black", color: "white" }}
              mr={3}
              mb="20"
              w="100%"
              variant="outline"
            >
              Submit
            </Button>
            <Button
              onClick={onClose}
              mr={3}
              mb="20"
              w="100%"
              bgGradient="linear(to-r, red.400,pink.400)"
              _hover={{ bg: "black", color: "white" }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
