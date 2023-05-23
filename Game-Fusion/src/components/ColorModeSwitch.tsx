import { useColorMode, HStack, Switch, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack padding='10px'>
      <Switch colorScheme="green" isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch;