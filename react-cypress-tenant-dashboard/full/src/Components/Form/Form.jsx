import axios from 'axios'
import React, {useState} from 'react'
import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    isBachelorAllowed: false,
    isMarriedAllowed: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`, {
      ...formData
    }).then(res => console.log(res))
  }

  return (
    <Center> 
      <div className = "addHouseContainer" >
        <form className = "form" onSubmit = {handleSubmit}>
          <FormControl width = "500px" >
            <Stack spacing = {3} >
              <Input onChange = {(e) => setFormData({...formData, name: e.target.value})} value = {formData.name} className = "name" placeholder = "Name" />
              <Input onChange = {(e) => setFormData({...formData, ownerName: e.target.value})} value = {formData.ownerName} className = "ownerName" placeholder = "Owners name" />
              <Input onChange = {(e) => setFormData({...formData, address: e.target.value})} value = {formData.address} className = "address" placeholder = "Address" />
              <Input onChange = {(e) => setFormData({...formData, areaCode: e.target.value})} value = {formData.areaCode} className = "areaCode" placeholder = "Area code" />
              <Input onChange = {(e) => setFormData({...formData, rent: e.target.value})} value = {formData.rent} type = "number" className = "rent" placeholder = "Rent" />
              <Checkbox onChange = {(e) => setFormData({...formData, isMarriedAllowed: e.target.checked})} value = {formData.isMarriedAllowed} isChecked = {formData.isMarriedAllowed} className = "bachelor" type = "checkbox">
                <FormLabel>Married Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Checkbox onChange = {(e) => setFormData({...formData, isBachelorAllowed: e.target.checked})} value = {formData.isBachelorAllowed} isChecked = {formData.isBachelorAllowed} className = "married" type = "checkbox">
                <FormLabel>Bachelor Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Button onClick = {handleSubmit} > Submit</Button>
            </Stack>
          </FormControl>
        </form>
      </div>
    </Center>
  )
}