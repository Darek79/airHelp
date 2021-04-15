import {Form} from "../../components/Form";
import Link from "next/link";
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
} from "@chakra-ui/react";
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
        <Link href="/login">
          PLEASE CLICK HERE TO SIGN UP
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
