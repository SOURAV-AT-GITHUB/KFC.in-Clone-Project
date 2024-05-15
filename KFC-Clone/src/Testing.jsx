import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Divider,
  Button,
  useMediaQuery,
  Image,
  Grid,
  HStack,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { menuData } from "../public/Data/data";
import { useParams, useSearchParams } from "react-router-dom";
import { cartUpdater } from "./Contexts/CartUpdaterContext";

const MenuPage = () => {
  //Data handling and manipulation
  const data = menuData;
  var categories = [];
  data.map((e) =>
    categories.includes(e.category) ? null : categories.push(e.category)
  );

  //____________________________________
  const { updater, setUpdater } = useContext(cartUpdater);
  const [isSmallDevice] = useMediaQuery("(max-width: 768px)");
  const [param, setParam] = useState(useParams());
  // const [test, setTest] = useSearchParams(
  //   param.category ? { category: param.category } : {}
  // );
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  useEffect(() => {
    // console.log(cartData);
    if (param.category) {
      // console.log(param.category);
      document.getElementById(param.category).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [param]);

  const handleCategoryClick = (category) => {
    setParam({ category: category.toLowerCase().replace(/\s+/g, "-") });
  };
  function handleCart(item) {
    let temp = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingItem = temp.find((e) => e.title === item.title);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      temp.push(item);
    }
    localStorage.setItem("cartData", JSON.stringify(temp));
    setUpdater(!updater);
    toast({ title: "Item Added to Cart", position: "top", isClosable: true,status:'success', duration: 3000});
  }

  const toast = useToast();
  return (
    <Flex
      id="menu"
      pl={isSmallDevice ? "0" : "15em"}
      pr={isSmallDevice ? "0" : "2em"}
      position={isSmallDevice ? null : "relative"}
      h={"100vh"}
      overflow={"auto"}
    >
      <Box
        position={isSmallDevice ? "fixed" : "sticky"}
        top={isSmallDevice ? "185" : param.category ? "100" : "0"}
        left="0"
        width={isSmallDevice ? "100%" : "25em"}
        overflowX={isSmallDevice ? "auto" : "hidden"}
        bg={isSmallDevice ? "#F7FAFC" : "transparent"}
        borderRight={!isSmallDevice ? "1px solid #E2E8F0" : "none"}
        zIndex="1"
        whiteSpace={isSmallDevice ? "nowrap" : "normal"}
      >
        <Box display={isSmallDevice ? "none" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="42"
            viewBox="0 0 80 42"
            fill="none"
            data-src="/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
          >
            <rect width="16.4103" height="41.0256" fill="#E4002B"></rect>
            <rect
              x="32.8203"
              width="16.4103"
              height="41.0256"
              fill="#E4002B"
            ></rect>
            <rect
              x="63.5898"
              width="16.4103"
              height="41.0256"
              fill="#E4002B"
            ></rect>
          </svg>
          <Text fontSize={40} fontWeight={"bold"} color={"#000000"}>
            KFC MENU
          </Text>
        </Box>
        <Flex
          w={"fit-content"}
          direction={isSmallDevice ? "row" : "column"}
          wrap="nowrap"
          align="flex-start"
          p={isSmallDevice ? 1 : 0}
          gap={isSmallDevice ? 0 : 2}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => handleCategoryClick(category)}
              fontWeight="bold"
              fontSize={isSmallDevice ? ".75em" : ""}
              color={
                param.category === category.toLowerCase().replace(/\s+/g, "-")
                  ? "black"
                  : "gray"
              }
              textAlign="left"
              w={isSmallDevice ? "auto" : "100%"}
              justifyContent={isSmallDevice ? "flex-start" : "stretch"}
            >
              {category}
            </Button>
          ))}
        </Flex>
      </Box>

      <Box w="100%" p={4}>
        {categories.map((category) => (
          <Box key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
            <br />
            <br />
            <br />
            <br />
            <Heading>{category}</Heading>
            <Divider my={2} />
            <Grid
              templateRows={isSmallDevice ? "" : "repeat(2, 1fr)"}
              templateColumns={isSmallDevice ? "" : "repeat(3, 1fr)"}
              gap={4}
              p={7}
            >
              {data
                .filter((item) => item.category === category)
                .map((item, i) => (
                  <Box
                    position={"relative"}
                    key={i}
                    lineHeight={"2em"}
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                    pb={"3em"}
                  >
                    <Image src={item.image} alt={item.title} />
                    <Box p={5}>
                      <Text fontWeight={"bold"} fontSize={20}>
                        {item.title}
                      </Text>
                      <HStack>
                        <Image
                          src={
                            item.type.includes("Non")
                              ? "../public/Images/Non_veg_icon.svg"
                              : "../public/Images/Veg_icon.svg"
                          }
                          alt={item.type[0] + item.type[1]}
                        />
                        <Text fontSize={12}>{item.type}</Text>
                      </HStack>
                      <Text>{item.description}</Text>
                      <Text fontWeight={"bold"} fontSize={20}>
                        ₹{item.price}
                      </Text>
                      <Wrap>
                        <WrapItem key={"top"}>
                          <Button
                            bg="#e4002b"
                            color="white"
                            variant="solid"
                            borderRadius={20}
                            p={5}
                            fontSize={14}
                            gap={1}
                            ml={"3em"}
                            position={"absolute"}
                            bottom={2}
                            onClick={() => handleCart(item)}
                          >
                            <Text> Add to Cart</Text>

                            <Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />
                          </Button>
                        </WrapItem>
                      </Wrap>
                    </Box>
                  </Box>
                ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default MenuPage;
