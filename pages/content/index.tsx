import {
  Flex,
  List,
  Box,
  Text,
} from "@chakra-ui/react";
import {ErrorComp} from "./../../components/ErrorComp";
import {LiItem} from "./../../components/ListItems";
import {Modal} from "./../../components/Modal";
import {
  fetchData,
  setItems,
  checkIfValueExists,
} from "./../../helperFN/helperFN";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import {SearchBar} from "./../../components/SearchBar";
interface CompProps {
  name?: string;
}
// interface Data {
//   data: {
//     userId: string;
//     id: number;
//     title: string;
//     body: string;
//     key: string;
//   };
// }
const Content: React.FC<CompProps> = (): JSX.Element => {
  const [data, setData] = useState<any[]>([]);
  const [historyData, setHistory] = useState<
    any[]
  >([]);
  const [error, setError] = useState<string>("");
  const [isOn, setBtn] = useState<boolean>(false);
  const queryRef = useRef<HTMLInputElement | null>(
    null
  );
  const nodeQueryRef = useRef<HTMLLIElement | null>(
    null
  );

  useEffect(() => {
    let olddata: any[] = [];
    const historical = window.localStorage.getItem(
      "queries"
    );
    if (historical !== null) {
      olddata = JSON.parse(historical);
    }

    if (olddata.length > 0) {
      setHistory(() => olddata);
    }
  }, [data]);

  function clickHandler(e: React.SyntheticEvent) {
    const input = e.target as HTMLElement;
    if (input.textContent !== null) {
      queryRef.current!.value = input.textContent;
    }

    setError(
      () => "Do you want to rerun the query ?"
    );
    setBtn((p) => !p);
  }

  function ModalClickHandler(): void {
    setError(() => "");
    setBtn((p) => !p);
  }
  function submitHandler(
    e: React.FormEvent
  ): void {
    e.preventDefault();
    if (error) {
      setError("");
    }
    if (queryRef.current!.value) {
      fetchData(
        "/api/hello",
        "&number=2&sort=calories&sortDirection=desc",
        queryRef.current!.value,
        setData,
        setError,
        checkIfValueExists,
        setItems
      );
    } else {
      setError(
        () => "Please provide a valid query"
      );
    }

    queryRef.current!.value = "";
  }
  const cbClickHandler = useCallback(
    (e: React.FormEvent) => {
      clickHandler(e);
    },
    []
  );
  const cbSubmitHandler = useCallback(
    (e: React.FormEvent) => {
      submitHandler(e);
    },
    []
  );

  return (
    <Flex bgSize="100%" w="100vw" h="100vh">
      <Box
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        bg="grey">
        <Box>
          <Text
            mt="20px"
            mb="20px"
            fontSize="lg"
            color="white">
            Last 10 queries
          </Text>
          <List spacing={3} color="white">
            {historyData.length > 0 &&
              historyData.map((el) => {
                return (
                  <LiItem
                    c={`white`}
                    key={el.query}
                    r={nodeQueryRef}
                    msg={el.query}
                    setFn={cbClickHandler}
                  />
                );
              })}
          </List>
        </Box>
      </Box>
      <Flex
        w="100%"
        h="100%"
        bg="green"
        display="flex"
        direction="column"
        justify="start"
        align="center">
        <form onSubmit={cbSubmitHandler}>
          <SearchBar
            formp="3"
            userInput={queryRef}
            isDiabled={isOn}
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
        {error ===
          "Do you want to rerun the query ?" ||
        error.includes("please wait") ? (
          <Modal
            txt="Confirm"
            setFn={ModalClickHandler}
            modalTxt="To rerun please Submit"
          />
        ) : undefined}
      </Flex>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center">
        <Text
          mt="20px"
          mb="20px"
          fontSize="lg"
          color="black">
          Query Results
        </Text>
        <List spacing={3} color="white">
          {data.length > 0 &&
            data.map((el) => {
              return (
                <LiItem
                  c="black"
                  key={el.id}
                  msg={el.name}
                />
              );
            })}
        </List>
      </Flex>
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
