import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box paddingY={3}>
      <Navbar />
      {children}
    </Box>
  );
};
