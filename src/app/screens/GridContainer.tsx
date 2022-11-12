import { Grid, GridItem } from "@chakra-ui/react";
import { ProductCard } from "../../products/components/ProductList/ProductCard";
import { Product } from "../../products/type";

interface Props {
  products: Product[];
}

export const GridContainer: React.FC<Props> = ({ products }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="2rem" marginY="3rem">
      {products.map((product) => {
        return (
          <GridItem key={product._id}>
            <ProductCard product={product} />
          </GridItem>
        );
      })}
    </Grid>
  );
};
