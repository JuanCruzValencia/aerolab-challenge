import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import bgImage from "../../assets/header-x1.png";
import { fetchProducts } from "../../products/api";
import { Count } from "../../products/components/ProductList/Count";
import { Filter } from "../../products/components/ProductList/enum";
import { Filters } from "../../products/components/ProductList/Filters";
import { Product } from "../../products/type";
import { GridContainer } from "./GridContainer";
import { usePagination } from "../hook/usePagination";
import pagIconRight from "../../assets/icons/arrow-right.svg";
import pagIconLeft from "../../assets/icons/arrow-left.svg";

export const Home: React.FC = () => {
  const [filter, setFilter] = useState<Filter>(Filter.MOSTRECENT);
  const [products, setProducts] = useState<Product[]>([]);
  const { page, addPage, subPage } = usePagination();

  const filteredProducts = useMemo(() => {
    const productsCopy = [...products];
    switch (filter) {
      case "Highest price":
        return productsCopy.sort((a, b) => b.cost - a.cost);
      case "Lowest price":
        return productsCopy.sort((a, b) => a.cost - b.cost);
      default:
        return productsCopy;
    }
  }, [products, filter]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Container minW="90%" mt="1rem">
      <Heading
        bgImage={bgImage}
        bgRepeat="no-repeat"
        bgSize="100%"
        h="410px"
        color="white"
        fontSize="5em"
        paddingX="10rem"
        paddingY="5rem"
        display="flex"
        alignItems="flex-end"
      >
        Electronics
      </Heading>
      <Spacer h="50px" />
      <Box display="flex" paddingY="1rem" justifyContent="space-between">
        <Stack gap="20px" direction="row">
          <Count current={page === 0 ? 16 :  32} total={products.length} />
          <Divider orientation="vertical" h="50px" w="2px" />
          <Filters current={filter} onChange={setFilter} />
        </Stack>
        <Stack direction="row">
          {page > 0 && (
            <Image
              src={pagIconLeft}
              alt="pagination-icon"
              cursor="pointer"
              onClick={subPage}
            />
          )}
          <Image
            src={pagIconRight}
            alt="pagination-icon"
            cursor="pointer"
            onClick={addPage}
          />
        </Stack>
      </Box>
      <Divider />
      <GridContainer products={page === 0 ? filteredProducts.slice(0, 16) : filteredProducts.slice(16, )} />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Count current={page === 0 ? 16 :  32} total={products.length} />
        <Stack direction="row">
          {page > 0 && (
            <Image
              src={pagIconLeft}
              alt="pagination-icon"
              cursor="pointer"
              onClick={subPage}
            />
          )}
          <Image
            src={pagIconRight}
            alt="pagination-icon"
            cursor="pointer"
            onClick={addPage}
          />
        </Stack>
      </Box>
      <Divider marginY="3rem" />
    </Container>
  );
};
