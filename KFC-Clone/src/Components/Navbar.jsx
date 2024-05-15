import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = ({ count, total }) => {
  document.title = "KFC | Order KFC Chicken Online & Find Restaurants";
  const [isSmallDevice] = useMediaQuery("(max-width: 768px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box
      id="MainDiv"
      w={"100vw"}
      h={"12vh"}
      pos={"fixed"}
      left={0}
      top={0}
      bg={"white"}
      zIndex={1}
      pl={isSmallDevice ? ".50em" : "7em"}
      pr={isSmallDevice ? ".50em" : "7em"}
      pt={isSmallDevice? '1em' : '0'}
      zIndex={99}
    >
      <HStack
        id="MainHStack"
        justifyContent={ isSmallDevice ? "space-evenly" :'space-between'}
        pl={"1vw"}
        pr={"1vw"}
        mt={"1.5em"}
        w='100%'
      >
        <HStack
          id="LeftHStack"
          justifyContent={"space-evenly"}
          h={"100%"}
          w={isSmallDevice ? "50%" : "25%"}

        >
          <IconButton
          display={isSmallDevice ? '' : 'none'}
            as={HamburgerIcon}
            w={7}
            h={7}
            color="gray"
            bg={"transparent"}
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
          />
           <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={'bold'} fontSize={35} lineHeight={.95}>LET'S GET COOKIN'</DrawerHeader>
<br />
          <DrawerBody>
          <Box
           display={'flex'}
            w={"fit-content"}
            // borderRight={"1px solid grey"}
            pr={"1em"}
            gap={3}
          >
             <Image
            src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
            alt="kfc-logo"
            h={"100%"}
          />
            {" "}
            <Text fontWeight={"bold"}>Sign In / SignUp</Text>
            <Image
                 src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg"
                 alt="right-arrow"
                />
          </Box>
          <br />
          <br />
          <NavLink to='/menu'>
          <Box display={'flex'} justifyContent={'space-between'} bg={'#F7FAFC'}>
         <Text fontWeight={'bold'} alignSelf={'center'}>Menu</Text>
         <Image src="https://images.ctfassets.net/wtodlh47qxpt/4k2cm92M32R26grdRRbI3B/e335a7a29e35e5d7aa1900a7f65eea12/menu__1.png"/>
          </Box>
          </NavLink>
          <br />
          <NavLink to='/menu'>
          <Box display={'flex'} justifyContent={'space-between'} bg={'#F7FAFC'}>
         <Text fontWeight={'bold'} alignSelf={'center'}>Deals</Text>
         <Image src="https://images.ctfassets.net/wtodlh47qxpt/7wp9jn9bCtkSpS2RklLTXD/9f5a47d39f34c6ede838ac01830659db/Deals.png"/>
          </Box>
          </NavLink>
    <br />
          <Box bg={'#F7FAFC'}  p={4}>
            <Text>Get Help</Text>
            <br />
            <Text> Contact Us</Text>
            <br />
            <Text>KFC Feedback</Text>
            <br />
            <Text>Privacy Policy</Text>
          </Box>
          </DrawerBody>


        </DrawerContent>
      </Drawer>
          <NavLink to="/">
            <Image
              src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
              alt="kfc-logo"
            />
          </NavLink>
          <Box
            w={"50%"}
            display={isSmallDevice ? "none" : "flex"}
            justifyContent={"space-between"}
          >
            <Text fontWeight={"bold"}>
              {" "}
              <NavLink to="/menu">Menu</NavLink>
            </Text>

            <Text fontWeight={"bold"}><NavLink to="/menu">Deals</NavLink></Text>
          </Box>
        </HStack>

        <HStack
          id="RightHStack"
          h={"100%"}
          w={isSmallDevice ? "80%" : "30%"}
          pl={isSmallDevice ? "5em" : "7em"}
          // pr={isSmallDevice ? "0" : "0em"}
        >
          <Image
            display={isSmallDevice ? "none" : ""}
            src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
            alt="kfc-logo"
            h={"100%"}
          />
          <Box
            display={isSmallDevice ? "none" : ""}
            w={"fit-content"}
            borderRight={"1px solid grey"}
            pr={"1em"}
          >
            {" "}
            <Text fontWeight={"bold"}>Sign In</Text>
          </Box>
          <NavLink to="/cart">
            <HStack>
              <Text w='auto'>{`₹ ${total}`}</Text>
              <Box
                bgImage="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                w={"65px"}
                h={"55px"}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                bgSize={"100%"}
                textAlign={"center"}
                alignContent={"center"}
              >
                {" "}
                {count}
              </Box>
            </HStack>
          </NavLink>
        </HStack>
      </HStack>
    </Box>
  );
};
