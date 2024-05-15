import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { OfferAndDeals } from "./OfferAndDeals";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const browseCategory = [
    {
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=44.12",
      title: "PERI PERI CHICKEN",
    },
    {
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT224.jpg?ver=44.12",
      title: "VALUE SNACKERS",
    },
    {
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=44.12",
      title: "CHICKEN ROLLS",
    },
    {
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=44.12",
      title: "CHICKEN BUCKETS",
    },
    {
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=44.12",
      title: "BIRIYANI BUCKETS",
    },
    {
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=44.12",
      title: "BOX MEALS",
    },
    {
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=44.12",
      title: "BURGERS",
    },
    // {
    //   image: "../public/Images/HomePage/BC8-View-All-Menu.svg",
    //   title: "View All Menu",
    // },
  ];
  const [isSmallDevice] = useMediaQuery("(max-width: 768px)");
  document.title='KFC | Order KFC Chicken Online & Find Restaurants'
  return (
    <Box>
      <NavLink to="/menu">
        {" "}
        <Image src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=767&fit=fill&fm=webp" w={"100vw"} />
      </NavLink>

      <Box id="browse-Category" textAlign={"center"} m={"auto"} mt={10}>
        <Center>
          <HStack m={"auto"} textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={25}>
              BROWSE CATEGORY
            </Text>
            <Box borderTop={"2px solid #e3e3e3"} h={2} w={"60vw"}></Box>
          </HStack>
        </Center>
        <Grid
          fontWeight={"bold"}
          templateColumns={isSmallDevice ? "repeat(2, 1fr)":"repeat(4, 1fr)"}
          gap={4}
          p={10}
        >
          {browseCategory.map((e, i) => (
            <GridItem lineHeight={2} bg={"#f8f7f5"} key={i}>
              <NavLink to={`/menu/${e.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <Image m={"auto"} src={e.image} alt={e.title} />
              <Text>{e.title}</Text></NavLink>
            </GridItem>
          ))}
          <NavLink to="/menu">
          <GridItem m={"auto"} bg={"#f8f7f5"}>
            <Image
              m={"auto"}
              src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
              alt="View-All-Menu"
              w={300}
              h={"auto"}
            />
            <Center>
              <HStack>
                <Text>View All Menu</Text>
                <Image
                  src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg"
                  alt="right-arrow"
                />
              </HStack>
            </Center>
          </GridItem></NavLink>
        </Grid>
      </Box>
      <OfferAndDeals />
    </Box>
  );
};
