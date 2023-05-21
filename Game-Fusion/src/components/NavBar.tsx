import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/Game_Fusion.webp";

const NavBar = () => {
  return (
   <HStack>
    <Image src={logo} boxSize='80px'/>
    <Text>Navbar</Text>
   </HStack>
  )
}

export default NavBar