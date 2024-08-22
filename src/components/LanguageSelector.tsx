import { Box,Text,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button} from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../constants'


const languages = Object.entries(LANGUAGE_VERSIONS)
const ACTIVE_COLOR = "blue.400"

const LanguageSelector = ({language,onSelect}:any) => {
  return (
    <Box ml={2} mb={4}>
    <Text mb={2} fontSize={'large'}>Language:</Text>
 <Menu isLazy>
  <MenuButton as={Button} >
    {language}
  </MenuButton>
  <MenuList bg={"#110c1b"}>
    {languages?.map(([lang,version])=>(
      <MenuItem key={lang}
      color={lang === language ? ACTIVE_COLOR : ""}
      bg={lang === language ? "gray.900" : "transparent" }
      _hover={{
        color: ACTIVE_COLOR,
        bg:"gray.900"
      }}
      onClick={()=>onSelect(lang)}>
        {lang} &nbsp;<Text color={"gray.600"}>{version}</Text>
      </MenuItem>
    ))}
  </MenuList>
</Menu>
    </Box>
  )
}

export default LanguageSelector