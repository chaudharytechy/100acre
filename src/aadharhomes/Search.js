import React, { useEffect, useState } from "react";
import { Box, HStack, Input, Center, Divider, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search() {
  const [isSmallScreen, setIsSmallScreen] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box bg="white" p={{ base: 4, sm: 2 }} borderRadius="20px" width="full">
      <HStack
        alignItems="center"
        className="HSTACK"
        justifyContent={isSmallScreen ? "space-around" : "flex-start"}
      >
        {isSmallScreen && (
          <Select color="#7480a0" w="150px" variant="ghost">
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </Select>
        )}
        <Center position="relative">
          <Input
            variant="unstyled"
            placeholder="Enter your query"
            w={isSmallScreen ? "calc(100% - 20px)" : "150px"}
            pr={isSmallScreen ? "2.5rem" : "2px"} 
          />
          {isSmallScreen && (
            <Box
              p="3"
              bg="red"
              position="absolute"
              right="0"
              top="50%"
              transform="translateY(-50%)"
              borderRadius="20px"
              cursor="pointer"
            >
              <SearchIcon color="white" />
            </Box>
          )}
        </Center>
        {isSmallScreen && (
          <>
            <Divider orientation="vertical" m={3} h={6} borderColor="gray.300" />
            <Center>
              <Input
                variant="unstyled"
                placeholder="Enter location"
                w="full"
                style={{ margin: "0 10px" }}
              />
            </Center>
          </>
        )}
      </HStack>
    </Box>
  );
}

export default Search;