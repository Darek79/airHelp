import {useRef, useState, RefObject} from "react";
import {useRouter} from "next/router";
import {
  checkPattern,
  userExists,
} from "./../helperFN/helperFN";

interface CompProps {
  color?: string;
  formp: string;
  userInput: RefObject<HTMLInputElement>;
}

import {ErrorComp} from "./ErrorComp";

import {
  Button,
  Text,
  Box,
  Input,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export const SearchBar: React.FC<CompProps> = ({
  color,
  formp,
  userInput,
}): JSX.Element => {
  const router = useRouter();

  const [error, setError] = useState<string>("");
  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    // console.log(queryRef.current!.value);

    // userNameRef.current!.value = "";
    // passwordRef.current!.value = "";
  }

  function submitMe(e: React.FormEvent): void {
    e.preventDefault();
    if (error) {
      setError("");
    }
  }
  // function resetFields(needed: boolean): void {
  //   queryRef.current!.value = "";
  // }
  return (
    <Box
      w={[350, 500, 500]}
      h="200px"
      borderRadius="md"
      display="flex"
      bg="grey"
      mt="40px"
      fontSize="xl">
      <Box m="auto" h="90%" w="90%">
        <Text
          color="almostw"
          variant="unstyled"
          px={formp}
          fontSize="xl"
          textAlign="center"
          // bg="gray.700"
          // borderRadius="md"
        >
          Please enter your ingridients
        </Text>
        <VStack
          mt="15px"
          mb="30px"
          spacing="40px">
          <Input
            color="white"
            ref={userInput}
            placeholder="Please provide some ingridients"
            size="lg"
            variant="flushed"
            px={formp}
            minLength={5}
            // bg="gray.700"
            // borderRadius="md"
          />
        </VStack>
        <Button
          position="relative"
          top="15%"
          left="50%"
          transform={`translate(-50%, -50%)`}
          color="white"
          w="40%"
          type="submit"
          variant="outline"
          borderRadius="md"
          py="5">
          Submit
        </Button>
        {error ? (
          <ErrorComp
            marginT="10px"
            borderC="3px solid red"
            textC="white"
            Lspacing="2px"
            fWeight="bold"
            msg={error}
          />
        ) : undefined}
      </Box>
    </Box>
  );
};
