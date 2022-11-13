import { Box } from "@chakra-ui/react";
import { Footer } from "../screens/Footer";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box paddingY={3}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};
