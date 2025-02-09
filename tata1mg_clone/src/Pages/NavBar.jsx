import {
  Box,
  Flex,
  Link,
  Image,
  Text,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom"
import Logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DropDowns from "./DropDowns";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
const navlink = [
  { title: "MEDICINES", link: "/vitamins" },
  { title: "AYURVEDA", link: "/ayurveda_medicine" },
  { title: "LAB TESTS", link: "/" },
  { title: "CONSULT DOCTORS", link: "/" },
  { title: "COVID-19", link: "/" },
  { title: "CARE PLAN", link: "/" },
];

export default function NavBar() {
  const cart = useSelector(store => store.CartReducer.cart)
  return (
    <>
      <Box px={0}>
        <Flex
          px={10}
          h={8}
          alignItems={"center"}
          justifyContent={"space-between"}
          my={0}
          py={7}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            <Box>
              <ReactLink to="/">
                <Image src={Logo} w={"100px"} />
              </ReactLink>
            </Box>
            <HStack spacing={5}>
              {navlink.map((item, id) => {
                return (
                  <Box
                    key={id}
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    _hover={{ color: "#fe6f60" }}>
                    <ReactLink to={item.link}
                    > {item.title}</ReactLink>
                  </Box>
                );
              })}
            </HStack>
          </Flex>
          <Flex
            fontSize={"16px"}
            gap={5}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Box>
              <SignIn />
              <SignUp />
            </Box>
            <Flex gap={10}>
              <Link>Offers</Link>
              <ReactLink fontSize={"16px"} to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span style={{ color: "green", textDecoration: "none" }}>{cart.length}</span>
              </ReactLink>
            </Flex>
            <Flex ml={5}>
              <Link>Need Help?</Link>
            </Flex>
          </Flex>
        </Flex>
        <Divider py={0} />
        <Box py={1}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            py={0}
            px={10}>
            <Flex
              w={"55%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={10}>
              <input
                type="text"
                style={{
                  border: "1px solid",
                  fontSize: "14px",
                  padding: "6px 30px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#f1f5f7",
                }}
              />
              <input
                type="text"
                placeholder="Search for Medicines and Health Products"
                style={{
                  border: "1px solid",
                  width: "100%",
                  fontSize: "14px",
                  padding: "6px 10px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#f1f5f7",
                }}
              />
            </Flex>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={4}>
              <Text fontSize={"14px"}>
                {" "}
                QUICK BUY! Get 15% off on medicines*
              </Text>
              <Button
                h={9}
                px={6}
                fontSize={"14px"}
                bg={"#fe6f60"}
                color="#fff">
                Quick Order
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Divider />
        <DropDowns />
      </Box>
    </>
  );
}

// #fe6f60
