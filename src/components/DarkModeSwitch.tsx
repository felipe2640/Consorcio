import { useColorMode, Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Button
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      bg={colorMode === 'light'? "black": "white"}
      onClick={toggleColorMode}
      
    >
     {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
     </Button> 
  )
}
