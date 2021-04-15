import {Text} from "@chakra-ui/react";

interface CompProps {
  marginT: string;
  borderC: string;
  textC: string;

  Lspacing: string;
  fWeight: string;
  msg: string;
}

export const ErrorComp: React.FC<CompProps> = ({
  marginT,
  borderC,
  textC,
  Lspacing,
  fWeight,
  msg,
}): JSX.Element => (
  <Text
    mt={marginT}
    border={borderC}
    color={textC}
    textAlign="center"
    letterSpacing={Lspacing}
    fontWeight={fWeight}>
    {msg}
  </Text>
);
