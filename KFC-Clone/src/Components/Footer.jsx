import { Box, HStack, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  const [isSmallDevice] = useMediaQuery("(max-width: 768px)");
  return (
    <Box bg={"#202124"} color={'white'}>

   
  <Box display={isSmallDevice? 'block': 'flex'}   justifyContent={'space-evenly'} p={ isSmallDevice ? "1em" :'10em'} gap={10} textAlign={'center'}>
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg'/>
    <br />
    <ul>
        <li>Legal</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Disclaimer</li>
        <li>Caution Notice</li>
    </ul>
    <ul>
        <li>KFC India</li>
        <li>About KFC</li>
        <li>KFC Care</li>
        <li>Careers</li>
        <li>Our Golden Past</li>
    </ul>
    <ul>
        <li>KFC Food</li>
        <li>Menu</li>
        <li>Order Lookup</li>
        <li>Gift Card</li>
        <li>Nutrition & Allergen</li>
    </ul>
    <ul>
        <li>Support</li>
        <li>Get Help</li>
        <li>Contact Us</li>
        <li>KFC Feedback</li>
        <li>Privacy Policy</li>
    </ul>
    <HStack  w={'100px'}>
        <Image src='https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg'/>
        <Text textDecoration={'underline'} >Find KFC</Text>
    </HStack>
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg' alt='google_play'/>
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg' alt='apple'/>
  </Box >
  <br />
  <Box display={isSmallDevice? 'block': ''}>
  <Text textAlign={'center'} color={'gray'}>Copyright © KFC Corporation 2024 All Rights Reserved </Text>
  <HStack ml={isSmallDevice? '': '90%'} >
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg' alt='insta' />
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg' alt='facebook' />
    <Image src='https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg' alt='twitter' />
  </HStack>
  </Box>
  <br />
  </Box>
  )
}
