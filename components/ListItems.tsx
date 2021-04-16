import {
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
import {memo} from "react";
interface CompProps {
  r?: React.RefObject<HTMLLIElement>;
  setFn?: (e: React.SyntheticEvent) => void;
  msg: string;
  c: string;
}

export const LiItem: React.FC<CompProps> = memo(
  ({r, setFn, msg, c}): JSX.Element => {
    return (
      <ListItem
        ref={r}
        variant="outline"
        onClick={setFn}
        color={c}>
        <ListIcon
          as={CheckIcon}
          color="green.500"
        />
        {msg}
      </ListItem>
    );
  }
);
