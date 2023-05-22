import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import {FaWindows, FaXbox, FaPlaystation, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props{
  platforms:Platform[]
}
const PlatformIconList = ({platforms}:Props) => {
  //index signature-- represents key or property in an object
  const iconMap:{[key: string]:IconType } = {
    pc:FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    max:FaApple,
    android:FaAndroid,
    linux:FaLinux,
    ios:MdPhoneIphone,
    web: BsGlobe
  }
  return (
    <>
    <HStack marginY={1}>

    {/* Bceuse we are returning multiple componnets, react fragment is required */}
    
    { platforms.map((platform)=>
    (<Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/> ))}
    </HStack>
    </>
    ) 
}

export default PlatformIconList