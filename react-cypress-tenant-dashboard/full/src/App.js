import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import React, {useState} from 'react'
import Form from "./Components/Form/Form"
import { Center, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false)

  return <Stack spacing = {5} className="App">
    <Center>
      <Button width = "150px" onClick = {() => setIsFormVisible(!isFormVisible)} className = "toggleForm" >
        Toggle Form  
      </Button>
    </Center>
    {
      isFormVisible ? 
      <Form />
      :
      <Dashboard />
    }

  </Stack>;
}

export default App;
