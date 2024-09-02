import { Box, Button, HStack,Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector'
import { CODE_SNIPPETS } from '../constants'
import Output from './Output'
import axios from 'axios'

const CodeEditor = () => {
  
  const [value,setValue] = useState("");
  const [language,setLanguage] = useState("python");
  const editorRef = useRef();

  const [url,setUrl] = useState('')
  const [clicked,setClicked] = useState(false)


  const onMount = (editor:any) =>{
      editorRef.current = editor;
      editor.focus()
  }

  const onSelect = (language:any) =>{
    setLanguage(language)
    setValue(CODE_SNIPPETS[language])
  }

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://dev-one.techademy.com/v1/compiler/random-urls');
    
  //     console.log('Response data:', response.data.URL);
  //     setUrl(response.data.URL)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     throw error;
  //   }
  // };
  const options = {
    scrollbar:{
      verticalScrollbarSize: 5,
      horizontalScrollbarSize: 5,
    },
    
  }


  return (
    <>
    <Box>
      <HStack spacing={4}>
        <Box w={"50%"}>
        <LanguageSelector language={language} onSelect={onSelect}/>
    <Editor 
      height="70vh" 
      theme='vs-dark'
      language={language}
      value={value}
      defaultValue={CODE_SNIPPETS[language]}
      onMount={onMount}
      options={options}
      onChange={(value:any)=> setValue(value)}
      />
      
   {/* <Button
   variant={"outline"}
   colorScheme='blue'
   mt={3}
   onClick={()=>{
    fetchData()
    setClicked(true)
   }
    }
   >
  Generate URL
   </Button> */}
        </Box>    
{/* 
   <Box w={"50%"} h={"82vh"} >
    <Text mb={10} fontSize={'large'}>Output</Text>

       {clicked && <>
       <iframe src={url} height={"100%"} width={"100%"}/>
       </>}   
        </Box>

     */}
       <Output editorRef={editorRef} language={language}/>
      </HStack>
   </Box>
    </>
  )
}

export default CodeEditor