import {
  Box,
  Button,
  Checkbox,
  Divider,
  Image,
  Text,
  VStack,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { cartUpdater } from "../../Contexts/CartUpdaterContext";
import { NavLink } from "react-router-dom";

export const CartPage = ({ count, total }) => {
  document.title = "KFC Cart";
  const data = JSON.parse(localStorage.getItem("cartData")) || [];
  const [isSmallDevice] = useMediaQuery("(max-width: 1024px)");
  const [donate, setDonate] = useState(false);
  const { updater, setUpdater } = useContext(cartUpdater);
  const toast = useToast();

  function updateQuantity(item, type) {
    let temp = JSON.parse(localStorage.getItem("cartData"));

    temp.forEach((e) => {
      if (e.title == item.title) {
        if (type == "increase") {
          e.quantity++;
        } else if (type == "decrease") {
          e.quantity--;
        } else {
          console.log("something went wrong");
        }
      }
    });
    localStorage.setItem("cartData", JSON.stringify(temp));
    setUpdater(!updater);
    toast({
      position: "bottom",
      duration: 2000,
      render: () => (
        <Box
          color="white"
          p={"1em"}
          pl={"3em"}
          pr={"3em"}
          bg="black"
          colorScheme="white"
          mb="15vh"
          textAlign={"center"}
          borderRadius={15}
          fontSize={"2em"}
          w={"fit-content"}
        >
          Cart Updated
        </Box>
      ),
    });
  }
  function removeItems(item) {
    let temp = JSON.parse(localStorage.getItem("cartData"));
    localStorage.setItem(
      "cartData",
      JSON.stringify(item ? temp.filter((e) => e.title != item.title) : [])
    );
    setUpdater(!updater);
  }
  return (
    <Box
      id="cart-main"
      ml={isSmallDevice ? "2vw" : ""}
      mr={isSmallDevice ? "2vw" : ""}
      pl={data.length == 0 ? "" : isSmallDevice ? 0 : "7vw"}
      pr={data.length == 0 ? "" :isSmallDevice ? 0 : "7vw"}
    >
      <Box id="my-cart">
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
        <Text fontWeight={"bold"} color={"#000000"} fontSize={"2em"}>
          MY CART
        </Text>
      </Box>
      <br />
      <br />
      {data.length == 0 ? (
        <Box
          id="empty-cart"
          display={isSmallDevice ? "block" : "flex"}
          bg={"#f8f7f5"}
          p={"5em"}
          pt={"5em"}
        >
          <Box pt={isSmallDevice ? 0 : "8em"}>
            <Text fontSize={isSmallDevice? '2em' : 50} fontWeight={isSmallDevice ?1000:'bolder'}>
              YOUR CART IS EMPTY. LET'S START AN ORDER!
            </Text>
            <br />
            < NavLink to='/menu'>

           
            <Button
              bg="#e4002b"
              color="white"
              variant="solid"
              borderRadius={30}
              p={5}
              pl={12}
              pr={12}
            >
              Start Order
            </Button> </NavLink>
          </Box>
<br />
<br />
          <Box>
            <Image src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" w={"45vw"} />
          </Box>
        </Box>
      ) : (









        
        <Box
          id="cart-not-empty"
          display={isSmallDevice ? "block" : "flex"}
          p={isSmallDevice ? 0 : 5}
          gap={10}
        >
          <Box id="cart-left">
            <VStack>
              {data.map((e, i) => (
                <Box id="main-box" key={i}>
                  <Box
                    display={"flex"}
                    gap={isSmallDevice ? 2 :5}
                    bg={"#f8f7f5"}
                    w={isSmallDevice ? "100%" : "50vw"}
                  >
                    <Image src={e.image} alt={e.title} w={150} />
                    <Box w="100%">
                      <Text fontSize={18}>{e.title}</Text>
                      <Box
                        justifyContent={"space-between"}
                        display={"flex"}
                        pr={5}
                      >
                        <Box>
                          {/* Blank box to use justifyContent:space-between */}
                        </Box>

                        <Box display={"flex"} gap={3}>
                          <Button
                            bg={"transparent"}
                            border={"1px solid black"}
                            borderRadius={"50%"}
                            p={0}
                            pb={1}
                            fontWeight={"bold"}
                            fontSize={25}
                            isDisabled={e.quantity < 2 ? true : false}
                            onClick={() => updateQuantity(e, "decrease")}
                          >
                            -
                          </Button>
                          <Text
                            fontWeight={"bold"}
                            fontSize={20}
                            alignSelf={"center"}
                          >
                            {e.quantity}
                          </Text>
                          <Button
                            bg={"transparent"}
                            border={"1px solid black"}
                            borderRadius={"50%"}
                            p={0}
                            pb={1.5}
                            fontWeight={"bold"}
                            fontSize={25}
                            onClick={() => updateQuantity(e, "increase")}
                          >
                            +
                          </Button>

                          <Text ml={3} alignSelf={"center"}>
                            {" "}
                            ₹{parseFloat(e.price * e.quantity).toFixed(2)}
                          </Text>
                        </Box>
                      </Box>
                      <Text
                        className="remove-button"
                        onClick={() => {
                          removeItems(e, "single");
                        }}
                      >
                        Remove
                      </Text>
                    </Box>
                  </Box>
                  <Box></Box>
                </Box>
              ))}
            </VStack>
            <br />
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text
                className="remove-button"
                fontSize={15}
                onClick={() => removeItems()}
              >
                Remove All
              </Text>
              <NavLink to="/menu">
                <Button
                  border={"1px solid gray"}
                  borderRadius={25}
                  bg={"transparent"}
                  p={5}
                  pl={7}
                  pr={7}
                >
                  Add More Menu
                </Button>{" "}
              </NavLink>
            </Box>
          </Box>
          <br />
          <Box
            id="cart-right"
            h={"fit-content"}
            lineHeight={6}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            p={8}
            w={isSmallDevice ? "100%" : " 25vw"}
          >
            <Text fontWeight={800} fontSize={25} color={"black"}>
              {count} ITEMS
            </Text>
            <br />
            <Box
              bg={"#f8f7f5"}
              display={"flex"}
              justifyContent={"space-between"}
              p={2}
            >
              <Box display={"flex"} gap={2} p={2} w={"fit-content"}>
                <Image src="https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg" />
                <Text color={"#e61d43"} fontWeight={"bold"}>
                  Apply Offers & Deals
                </Text>
              </Box>
              <Button
                border={"1px solid gray"}
                borderRadius={25}
                bg={"transparent"}
                p={0}
                pl={4}
                pr={4}
                fontSize={10}
              >
                View All
              </Button>
            </Box>

            <br />
            <Box w={"100%"}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text>₹{total}</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text>GST</Text>
                <Text>₹{parseFloat((total * 5) / 100).toFixed(2)} </Text>
              </Box>
              {donate && (
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text>Add Hope</Text>
                  <Text>₹5.00 </Text>
                </Box>
              )}
            </Box>
            <br />
            <Divider />

            <Box border={"1px solid lightgray"} display="flex" p={3} gap={4}>
              <Checkbox
                onChange={(e) => setDonate(e.target.checked)}
                isChecked={donate}
              />
              <Box>
                <Text fontSize={15} fontWeight={500}>
                  Donate ₹5.00 Tick to Add Hope.
                </Text>
                <Text fontSize={13}>
                  Our goal is to feed 20 million people by 2024.
                </Text>
              </Box>
              <Image
                src="data:image/png;base64,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"
                h="100%"
              />
            </Box>

            <Box
              bg="#e4002b"
              color="white"
              variant="solid"
              borderRadius={25}
              p={3}
              pl="7"
              pr="7"
              fontSize={13}
              default="red"
              m="auto"
              mt={"3em"}
              _hover={{ backgroundColor: "red.400" }}
              display="flex"
              justifyContent={"space-between"}
              w="90%"
              fontWeight={500}
            >
              <Text>Checkout </Text>
              <Text>
                {" "}
                ₹
                {donate
                  ? (+total + 5 + +parseFloat((total * 5) / 100)).toFixed(2)
                  : (+total + +parseFloat((total * 5) / 100)).toFixed(2)}
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
