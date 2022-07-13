import {Stack, Text, Image, Link} from "@chakra-ui/react";

export const PaymentMethods = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="white"
      borderRadius="5px"
      boxShadow="0 1px 1px 0 rgb(0 0 0 / 10%)"
      color="rgba(0,0,0,0.75)"
      direction="row"
      fontSize="18px"
      fontWeight="400"
      height="90px"
      justifyContent="center"
      spacing="70px"
      width="100%"
    >
      <Stack direction="row">
        <Image src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" />
        <Stack justifyContent="center" lineHeight="15px">
          <Text lineHeight="15px">Tarjeta de credito</Text>
          <Link color="#1259c3" fontSize="13px">
            Ver promociones bancarias
          </Link>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Image src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg" />
        <Stack justifyContent="center">
          <Text lineHeight="15px">Tarjeta de debito</Text>
          <Link color="#1259c3" fontSize="13px">
            Ver más
          </Link>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Image src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg" />
        <Stack justifyContent="center">
          <Text lineHeight="15px">Cuotas sin tarjeta</Text>
          <Link color="#1259c3" fontSize="13px">
            Conocé Mercado Crédito
          </Link>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Image src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" />
        <Stack justifyContent="center">
          <Text lineHeight="15px">Efectivo</Text>
          <Link color="#1259c3" fontSize="13px">
            Ver más
          </Link>
        </Stack>
      </Stack>
      <Stack borderLeft="1px solid rgba(0,0,0,0.1)" direction="row" height="100%" paddingX="20px">
        <Image src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" />
      </Stack>
    </Stack>
  );
};
