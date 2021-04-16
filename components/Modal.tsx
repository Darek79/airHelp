import {
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

interface CompProps {
  txt: string;
  modalTxt: string;
  setFn: (e: React.SyntheticEvent) => void;
}

export const Modal: React.FC<CompProps> = ({
  txt,
  setFn,
  modalTxt,
}): JSX.Element => {
  return (
    <Flex
      mt="30px"
      borderRadius="md"
      w="400px"
      h="200px"
      bg="signalred"
      direction="column"
      align="center"
      justify="space-evenly">
      <Text fontSize="xl" color="white">
        {modalTxt}
      </Text>
      <Button
        bg="grey"
        letterSpacing="3px"
        onClick={setFn}
        color="white"
        w="40%"
        variant="outline"
        borderRadius="md"
        py="5">
        {txt}
      </Button>
    </Flex>
  );
};
