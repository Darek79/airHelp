import apiHandler from "./../api/hello";
import axios, {AxiosResponse} from "axios";
import {
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  ButtonGroup,
  Text,
  Box,
  useMediaQuery,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  VStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
import {ErrorComp} from "./../../components/ErrorComp";
import {
  userExists,
  fetchData,
  setItems,
  checkIfValueExists,
} from "./../../helperFN/helperFN";
import React, {
  useEffect,
  useState,
  useRef,
} from "react";
import {useRouter} from "next/router";
import {SearchBar} from "./../../components/SearchBar";
interface CompProps {
  name?: string;
}
interface Data {
  data: {
    userId: string;
    id: number;
    title: string;
    body: string;
    key: string;
  };
}
const Content: React.FC<CompProps> = ({
  name,
}): JSX.Element => {
  const [data, setData] = useState<any[]>([]);
  const [historyData, setHistory] = useState<
    any[]
  >([]);
  const [error, setError] = useState<string>("");
  const [spinner, setSpinner] = useState<boolean>(
    false
  );
  const queryRef = useRef<HTMLInputElement | null>(
    null
  );
  // const router = useRouter();

  useEffect(() => {
    const historical = window.localStorage.getItem(
      "queries"
    );
    if(historical!==null){
      
    }


    // setHistory()
  }, []);

  function submitHandler(
    e: React.FormEvent
  ): void {
    e.preventDefault();
    if (error) {
      setError("");
    }
    console.log(queryRef.current!.value);
    setSpinner((p) => !p);
    if (queryRef.current!.value) {
      console.log(queryRef.current!.value);
      fetchData(
        "/api/hello",
        "https://jsonplaceholder.typicode.com/posts/1",
        queryRef.current!.value,
        setData,
        setError,
        setSpinner,
        checkIfValueExists,
        setItems
      );
    } else {
      setError(
        () => "Please provide a valid query"
      );
    }

    // setSpinner((p) => !p);
    queryRef.current!.value = "";
    console.log(queryRef.current!.value);
  }
  return (
    <Flex bgSize="100%" w="100vw" h="100vh">
      <Box
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center">
        <Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon
                as={CheckIcon}
                color="green.500"
              />
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon
                as={CheckIcon}
                color="green.500"
              />
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        w="100%"
        h="100%"
        bg="green"
        display="flex"
        justifyContent="center">
        <form onSubmit={submitHandler}>
          <SearchBar
            formp="3"
            userInput={queryRef}
          />
          {error ? (
            <ErrorComp
              marginT="10px"
              borderC="3px solid red"
              textC="black"
              Lspacing="2px"
              fWeight="bold"
              msg={error}
            />
          ) : undefined}
        </form>
      </Box>
      <Box w="100%" h="100%">
        3
      </Box>
    </Flex>
  );
};

// export async function getStaticProps(
//   context: any
// ) {
//   const response = await apiHandler();
//   console.log(response);

//   return {
//     props: {
//       name,
//     },
//   };
// }
// export async function getStaticPaths() {
//   return {
//     paths: [{params: {name: ""}}],
//     fallback: true,
//   };
// }

export default Content;
