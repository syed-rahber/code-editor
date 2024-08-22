import { Box } from "@chakra-ui/react"
import CodeEditor from './components/CodeEditor.tsx'

function App() {

  return (
    <>
    <Box bg={"#0f0a19"} minH={"100vh"} color={"gray.500"}>
       <CodeEditor/>
    </Box>
    </>
  )
}

export default App
