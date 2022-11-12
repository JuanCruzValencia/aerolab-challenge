import { Box, Text } from "@chakra-ui/react";

interface Props {
  current: number;
  total: number;
}

export const Count: React.FC<Props> = ({ current, total }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
      <Text fontSize="2em">
        {current} of {total} products
      </Text>
    </Box>
  );
};
