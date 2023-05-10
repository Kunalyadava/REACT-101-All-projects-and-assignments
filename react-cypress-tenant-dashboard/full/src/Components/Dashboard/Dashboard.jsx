import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [order, setOrder] = useState("");

  const handleDelete = (id) => {
    axios
      .delete(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
      )
      .then(() => {
        // axios(
        //   `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`
        // ).then((res) => setData(res.data));
        getHouses();
      });
  };

  const getHouses = () => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHouses();
  }, []);

  useEffect(() => {
    axios(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${searchQuery}`
    ).then((res) => setData(res.data));
  }, [searchQuery]);

  useEffect(() => {
    if (order) {
      axios(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${searchQuery}&_sort=rent&_order=${order}`
      ).then((res) => setData(res.data));
    }
  }, [order]);

  console.log(data)
  return (
    <div>
      <Stack spacing={5}>
        <div className="sortingButtons">
          <Button className="sortByRentAsc" onClick={() => setOrder("asc")}>
            {" "}
            Sort by Asc{" "}
          </Button>
          <Button className="sortByRentDesc" onClick={() => setOrder("desc")}>
            {" "}
            Sort by Desc{" "}
          </Button>
        </div>

        <Center>
          <Input
            width="300px"
            className="searchAddress"
            placeholder="Search Data"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Center>

        <Box>
          <TableContainer>
            <Table variant="striped" p={3} className="table">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Owner's Name</Th>
                  <Th>Address</Th>
                  <Th>Area Code</Th>
                  <Th>Rent</Th>
                  <Th>Bachelor Tenants Allowed</Th>
                  <Th>Married Tenants Allowed</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map((item, index) => {
                    return (
                      <Tr key={index} className="houseDetails">
                        <Td className="name">{item.name}</Td>
                        <Td className="ownersName">{item.ownerName}</Td>
                        <Td className="address">{item.address}</Td>
                        <Td className="areaCode">{item.areaCode}</Td>
                        <Td className="rent">{item.rent}</Td>
                        <Td className="isBachelorAllowed">
                          {item.isBachelorAllowed ? "Yes" : "No"}
                        </Td>
                        <Td className="isMarriedAllowed">
                          {item.isMarriedAllowed ? "Yes" : "No"}
                        </Td>
                        <Td
                          className="delete"
                          onClick={() => handleDelete(item.id)}
                        >
                          {" "}
                          Delete{" "}
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </div>
  );
}
