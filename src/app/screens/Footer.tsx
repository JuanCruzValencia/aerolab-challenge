import { Box, Icon, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

export const Footer: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="2em">
        Dev by Juan Cruz Valencia with <Icon as={AiFillHeart} color="red" />
      </Text>
    </Box>
  );
};
