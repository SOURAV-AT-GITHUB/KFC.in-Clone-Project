import {
  Flex,
  Box,
  Text,
  IconButton,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
  HStack,
  Center,
  VStack,
} from "@chakra-ui/react";
import { React, useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
export const OfferAndDeals = () => {
  const data = [
    {
      title:
        "1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=44.12",
      tt:'Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users.'
    },
    {
      title:
        "Add 2 Pc  Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=44.12",
    },
    {
      title:
        "Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=44.12",
    },
    {
      title: "Get flat Rs.75 off on a cart value of 599 or above",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/PHP75.jpg?ver=44.12",
    },
    {
      title: "Free Popcorn (Med) on a cart value of 499 or more. Friday only.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYPOP.jpg?ver=44.12",
    },
    {
      title: "Free 1pc Chicken on a cart value of 499 or more. Friday only.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYCHKN.jpg?ver=44.12",
    },
    {
      title: "Free 3pc Strips on a cart value of 499 or more. Friday only.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYSTRIPS.jpg?ver=44.12",
    },
    {
      title: "Free Veg Zinger on a cart value of 499 or more. Friday only.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYVZINGER.jpg?ver=44.12",
    },
    {
      title: "Free Fries (Med) on a cart value of 499 or more. Friday only.",
      image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/YAYFRIES.jpg?ver=44.12",
    },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(scrollRef.current.offsetWidth);
      setContentWidth(scrollRef.current.scrollWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollRef.current.scrollLeft);
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = containerWidth / 2; // Scroll half the container width
    const newPosition =
      direction === "right"
        ? Math.min(scrollPosition + scrollAmount, contentWidth - containerWidth)
        : Math.max(scrollPosition - scrollAmount, 0);
    setScrollPosition(newPosition);
    scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  const handleScrollbarClick = (e) => {
    e.stopPropagation();
    const clickPosition = e.clientX - e.target.getBoundingClientRect().left;
    const scrollPercentage = clickPosition / containerWidth;
    const newPosition = (contentWidth - containerWidth) * scrollPercentage;
    setScrollPosition(newPosition);
    scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const[popupText,setPopupText]=useState({})

  const togglePopup = (obj={}) => {
    setIsPopupOpen(!isPopupOpen);
    if (!isPopupOpen) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
    if(obj.title)setPopupText(obj)
  };

  return (
    <Box bg={"#202124"} pl={"13vw"}>
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
      <br />
      <br />
      <Text fontSize={30} fontWeight={"bold"} color={"white"}>
        OFFERS & DEALS
      </Text>
      <br />
      <Flex overflow="hidden" py={4} position="relative" m="auto" >
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => handleScroll("left")}
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          opacity={scrollPosition > 0 ? 1 : 0}
          borderRadius={'50%'}
          zIndex={1}
        />
        <Flex
          ref={scrollRef}
          overflowX="scroll"
          w="100%"
          py={2}
          position="relative"
          css={{
            "&::-webkit-scrollbar": {
              width: "2px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#ddd",
              borderRadius: "2px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#bbb",
            },
            "&::-webkit-scrollbar-corner": {
              backgroundColor: "transparent",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "#ddd transparent",
          }}
          onClick={handleScrollbarClick}
        >
          <Box display="flex" gap={5} onClick={e=>e.stopPropagation()}>
            {data.map((element, index) => (
              <Card h={400} key={index} w={325}>
                <CardBody p={0}>
                  <Image
                    src={element.image}
                    alt={element.title}
                    w={'100%'}
                    h={'14em'}
                  />
                  <Stack mt="1" spacing="2" textAlign={'center'} >
                    <Heading
                        fontSize={30}
                      fontWeight={'bold'}
                      noOfLines={1}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      color='#e4002b'
                      pl={5}
                      pr={5}
                    >
                     {element.tt? element.tt.toUpperCase() : element.title.toUpperCase() }
                    </Heading>
                    <Text
                      noOfLines={2}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      pl={2}
                      pr={2}
                    >
                     {element.title}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <HStack gap={'2em'}  pl={5} pr={5}>
                    <Text className="view-details" textDecoration={'underline'} onClick={()=>{
                      let obj={title:element.title,
                        tt:element.tt? element.tt : element.title
                      }
                      togglePopup(obj)
                    }}>
                      View Details
                    </Text>
                    <Button variant="outline" colorScheme="gray" borderRadius={25} border={'2px solid gray'} onClick={()=>console.log('here')}>
                      Add to cart
                    </Button>
                  </HStack>
                </CardFooter>
              </Card>
            ))}
            <Card></Card>
            <br />
            <Card></Card>
            <br />
            <Card></Card>
            <br />
            <Card></Card>
            <br />
            <Card></Card>
            <br />
            <Card></Card>
            <br />
          </Box>
        </Flex>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={() => handleScroll("right")}
          position="absolute"
          right={0}
          top="50%"
          borderRadius={'50%'}
          transform="translateY(-50%)"
          opacity={scrollPosition + containerWidth >= contentWidth ? 0 : 1}
        />
      </Flex>
      {isPopupOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust opacity here
          zIndex="9999"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box backgroundColor="white" padding="20px" borderRadius="10px" w={'40vw'} h={'60vh'} >
            <Button onClick={togglePopup} fontSize={35} bg={'none'} ml={'90%'}>×</Button>
            <br />
           <br />
            <VStack textAlign={'center'}>
            <Text fontSize={30} fontWeight={'bolder'} lineHeight={1}>
             {popupText.tt}
            </Text>
            <br />
           
            <Text>
            Valid to 31/12/30
            </Text>
            <br />
           
            <Text>{popupText.title}</Text>
            <br />
            <Button variant={'outline'} w={'75%'} borderRadius={25} border={'1px solid gray'}>Apply</Button>
            </VStack>
          
          </Box>
        </Box>
      )}













      
    </Box>
  );
};
