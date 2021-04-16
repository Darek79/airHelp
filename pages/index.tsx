import {Fragment} from "react";
import Head from "next/head";
import {Form} from "./../components/Form";
import Link from "next/link";
import {Box, Flex} from "@chakra-ui/react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Login Page</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Flex
        h="100vh"
        align="center"
        justify="start"
        direction="column"
        bg="almostw">
        <Form formp="3" isRegister={true} />
        <Box mt="10px" fontSize="xl">
          <Link href="/login">
            IF YOU HAVE A ACCOUNT PLEASE LOG IN
          </Link>
        </Box>
      </Flex>
    </Fragment>
  );
}
