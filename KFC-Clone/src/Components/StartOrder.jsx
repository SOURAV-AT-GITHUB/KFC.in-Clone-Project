import { Box, Button, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

export const StartOrder = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      display={isSmallDevice ? "block" : "flex"}
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#202124"}
      color={"white"}
      mt={"13vh"}
      h={"10vh"}
      gap={"2vw"}
      fontWeight={"bold"}
    fontSize= { isSmallDevice ?'.85em' :'20'}
    >
      <Text>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
      <br />
      <Button
        bg="#e4002b"
        color="white"
        variant="solid"
        borderRadius={20}
        p={5}
        pl={10}
        pr={10}
      >
        Start Order
      </Button>
    </Box>
  );
};
