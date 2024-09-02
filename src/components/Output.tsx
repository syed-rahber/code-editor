import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";

import axios from "axios";
import { LANGUAGE_VERSIONS  } from "../constants";





// const API = axios.create({
//     baseURL: "https://emkc.org/api/v2/piston",
//   });
  
  export const executeCode = async (sourceCode:any) => {
    const response = await axios.post("https://compiler.makemylabs.in/v1/compiler/exec-kube", {
      code:sourceCode
    });
    console.log(response.data)
    return response.data;
  };


const Output = ({ editorRef, language }:any) => {
  const toast = useToast();
  const [url, setUrl] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);



  const executeCode = async (sourceCode:any) => {
    const response = await axios.post("https://compiler.makemylabs.in/v1/compiler/exec-kube", {
      code:sourceCode
    });
    console.log(response.data)
    setUrl(response.data.ttyd_url)
    return response.data;
  };


  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const result = await executeCode(sourceCode);
      
    } catch (error:any) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <Box w="50%">
      
      <Button
        variant="outline"
        colorScheme="green"
        mt={4}
        mb={5}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        <iframe src={url} width={"100%"} height={"100%"}/>
      </Box>
    </Box>
  );
};
export default Output;