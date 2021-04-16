import {useRef, useState} from "react";
import {useRouter} from "next/router";
import {
  checkPattern,
  userExists,
} from "./../helperFN/helperFN";
import {
  Button,
  Text,
  Box,
  Input,
  VStack,
} from "@chakra-ui/react";


interface CompProps {
  color?: string;
  formp: string;
  isRegister: boolean;
 
}
export const Form: React.FC<CompProps> = ({
  color,
  formp,
  isRegister,
}): JSX.Element => {
  const router = useRouter();
  const userNameRef = useRef<HTMLInputElement | null>(
    null
  );
  const passwordRef = useRef<HTMLInputElement | null>(
    null
  );
  const confirmPasswordRef = useRef<HTMLInputElement | null>(
    null
  );

  const [error, setError] = useState<string>("");
  function onSubmit(e: React.FormEvent): void {
    e.preventDefault();
    console.log(userNameRef.current!.value);
    console.log(passwordRef.current!.value);
    console.log(
      confirmPasswordRef.current!.value
    );
    // userNameRef.current!.value = "";
    // passwordRef.current!.value = "";
  }

  function submitMe(e: React.FormEvent): void {
    e.preventDefault();
    if (error) {
      setError("");
    }
    if (isRegister) {
      console.log("NOT HERE");
      const passwordVerified = checkPattern(
        passwordRef.current!.value
      );
      const passwordConfirmVerified = checkPattern(
        confirmPasswordRef.current!.value
      );

      if (
        passwordVerified &&
        passwordConfirmVerified
      ) {
        console.log("ok");
        const isUser = userExists(
          userNameRef.current!.value
        );

        if (isUser) {
          setError(
            () => "Username is already taken"
          );
          resetFields(true);
        } else {
          window.localStorage.setItem(
            String(userNameRef.current!.value),
            String(passwordRef.current!.value)
          );
          resetFields(true);
          router.push("/login");
          return;
        }
        console.log(isUser, "isUser");
        return;
      } else {
        console.log("not here");
        setError(
          () => "Please check your fields"
        );
        resetFields(true);
        return;
      }
    } else {
      const isUser = userExists(
        userNameRef.current!.value
      );
      console.log(isUser);
      if (isUser) {
        const userPass = window.localStorage.getItem(
          isUser
        );
        if (
          userPass === passwordRef.current!.value
        ) {
          console.log("login");
          window.sessionStorage.setItem(
            "loggedIn",
            userNameRef.current!.value
          );
          router.push({
            pathname: `content`,
          });

          resetFields(false);
          return;
        } else {
          console.log("error");
          setError(
            () => "One of the fields is incorrect"
          );
          resetFields(false);
        }
      } else {
        console.log("error");
        setError(
          () => "One of the fields is incorrect"
        );
        resetFields(false);
      }
    }
  }
  function resetFields(needed: boolean): void {
    userNameRef.current!.value = "";
    passwordRef.current!.value = "";
    if (needed) {
      confirmPasswordRef.current!.value = "";
    }
  }
  return (
    <Box
      w={[350, 500, 500]}
      h="50vh"
      borderRadius="md"
      display="flex"
      bg="grey"
      mt="80px"
      fontSize="xl">
      <Box m="auto" h="90%" w="90%">
        <Text
          color="almostw"
          variant="unstyled"
          px={formp}
          fontSize="4xl"
          // bg="gray.700"
          // borderRadius="md"
        >
          {isRegister
            ? "Registration Form"
            : "Login Form"}
        </Text>
        <VStack
          mt="15px"
          mb="30px"
          spacing="40px">
          <Input
            color="white"
            ref={userNameRef}
            placeholder="Username"
            size="lg"
            variant="flushed"
            px={formp}
            minLength={5}
            // bg="gray.700"
            // borderRadius="md"
          />
          <Input
            color="white"
            ref={passwordRef}
            placeholder="Password"
            size="lg"
            variant="flushed"
            minLength={8}
            type="password"
            px={formp}
          />
          {isRegister ? (
            <Input
              color="white"
              ref={confirmPasswordRef}
              placeholder="Retype Password"
              size="lg"
              variant="flushed"
              type="password"
              px={formp}
            />
          ) : undefined}
        </VStack>
        <Button
          color="white"
          w="40%"
          type="submit"
          variant="outline"
          onClick={submitMe}
          borderRadius="md"
          py="5">
          Submit
        </Button>
        {error ? (
          <Text
            mt="10px"
            border="3px solid red"
            color="white"
            textAlign="center"
            letterSpacing="2px"
            fontWeight="bold">
            {error}
          </Text>
        ) : undefined}
      </Box>
    </Box>
  );
};
