import { Box, Text } from "@chakra-ui/react";
import { Filter } from "./enum";

interface Props {
  current: Filter;
  onChange: (filter: Filter) => void;
}

export const Filters: React.FC<Props> = ({ current, onChange }) => {
  const filters = [Filter.MOSTRECENT, Filter.LOWEST, Filter.HIGHEST];

  return (
    <Box
      display="flex"
      gap="3rem"
      fontSize="2em"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Sort by:</Text>
      {filters.map((filter) => (
        <Box
          onClick={() => onChange(filter)}
          key={filter}
          cursor="pointer"
          bgColor={current === filter ? "#0ad4fa" : "#f3f3f3"}
          color={current === filter ? "#ffffff" : "#000000"}
          paddingX="1rem"
          borderRadius={999}
          paddingY=".5rem"
        >
          {filter}
        </Box>
      ))}
    </Box>
  );
};
