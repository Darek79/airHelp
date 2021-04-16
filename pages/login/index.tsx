import {Form} from "../../components/Form";
import Link from "next/link";
import {Box, Flex} from "@chakra-ui/react";
const Login = (): JSX.Element => {
  return (
    <Flex
      h="100vh"
      align="center"
      justify="start"
      direction="column"
      bg="almostw">
      <Form formp="3" isRegister={false} />
      <Box mt="10px" fontSize="xl">
        <Link href="/">
          PLEASE CLICK HERE TO SIGN UP
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
