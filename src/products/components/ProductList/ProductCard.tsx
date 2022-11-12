import { redeemProduct } from "../../../user/api";
import { useHover } from "../hook/useHover";
import { Product } from "../../type";
import {
  Box,
  Button,
  Divider,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import buyLogoBlue from "../../../assets/icons/buy-blue.svg";
import buyLogoWhite from "../../../assets/icons/buy-white.svg";
import coin from "../../../assets/icons/coin.svg";
import { useContext } from "react";
import { UserContext } from "../../../user/UserContext";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { isHover, handleMouseEnter, handleMouseLeave } = useHover();
  const { actions } = useContext(UserContext);
  const { redeem } = actions;
  const toast = useToast();

  const handleClick = (id: Product["_id"], amount: Product["cost"]) => {
    redeemProduct(id).then(() => {
      redeem(amount);
      toast({
        title: "Muchas Gracias!",
        description: `Producto canjeado por ${amount} correctamente.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  };

  return (
    <Box
      boxShadow="base"
      padding="2rem"
      position="relative"
      cursor="pointer"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Image
        src={isHover ? buyLogoWhite : buyLogoBlue}
        alt="buyLogo"
        position="absolute"
        right="10"
        zIndex={100}
      />
      <Image src={product.img.url} alt={product.name} m="auto" />
      <Divider marginY="1rem" />
      <Text fontSize="1.2em" color="#a3a3a3" fontWeight="500">
        {product.category}
      </Text>
      <Text fontSize="1.5em" color="#616161" fontWeight="500">
        {product.name}
      </Text>
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        display={isHover ? "flex" : "none"}
        bg={isHover ? "rgba(0, 177, 255, 0.63)" : "transparent"}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Text fontSize="3em" color="#ffffff">
            {product.cost}
          </Text>
          <Image src={coin} alt="coin" boxSize={35} />
        </Stack>
        <Button
          bgColor="#ffffff"
          color="#777777"
          fontSize="1.5em"
          paddingY="2rem"
          borderRadius={999}
          paddingX="4rem"
          onClick={() => handleClick(product._id, product.cost)}
        >
          Redeem now
        </Button>
      </Box>
    </Box>
  );
};
