import {Stack} from "@chakra-ui/react";

import {Carrousel} from "../components/Carrousel";
import {PaymentMethods} from "../components/PaymentMethods";

export const HomePage = () => {
  return (
    <>
      <Stack alignItems="center">
        <Carrousel />
      </Stack>
      <Stack alignItems="center" marginTop="40px" marginX="20%" minH="100vh">
        <PaymentMethods />
      </Stack>
    </>
  );
};
