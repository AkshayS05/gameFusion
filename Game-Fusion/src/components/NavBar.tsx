import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/Game_Fusion.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
   <HStack justifyContent='space-between' padding='10px'>
    <Image src={logo} boxSize='80px'/>
    <SearchInput />
    <ColorModeSwitch />
   </HStack>
  )
}

export default NavBar