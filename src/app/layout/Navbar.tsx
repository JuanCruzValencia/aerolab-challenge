import { Container, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../user/UserContext";
import { useContext } from "react";

export const Navbar: React.FC = () => {
  const { state, actions } = useContext(UserContext);
  const { addCoins } = actions;

  return (
    <Container
      boxShadow="md"
      borderRadius={5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      minW="90%"
      h="7rem"
    >
      <Image src={logo} alt="logo" />
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Text fontSize="2em">{state.user?.name}</Text>
        <Stack
          direction="row"
          bg="coral"
          paddingY={2}
          paddingX={3}
          borderRadius={999}
          cursor="pointer"
        >
          <Text fontSize="2em" fontWeight="500" onClick={() => addCoins(1000)}>
            {state.user?.points}
          </Text>
          <Image src={coin} alt="coin image" />
        </Stack>
      </Stack>
    </Container>
  );
};
