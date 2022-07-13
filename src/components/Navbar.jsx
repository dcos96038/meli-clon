import {Input, Stack, Text, Icon, Image, Link, Container, IconButton} from "@chakra-ui/react";
import {IoLocationOutline, IoNotificationsOutline} from "react-icons/io5";
import {IoIosSearch} from "react-icons/io";
import {BsCart2} from "react-icons/bs";
import {RiArrowDownSLine} from "react-icons/ri";

const categorias = ["Ofertas", "Historial", "Supermercado", "Moda", "Vender", "Ayuda"];

export const Navbar = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor={"primary.500"}
      fontSize="14px"
      fontWeight="300"
      justifyContent="center"
      minHeight="100px"
      spacing="20px"
    >
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        minHeight="100px"
        minWidth="1200px"
      >
        <Stack direction="row" spacing="50px">
          <Image
            height="34px"
            src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png"
            width="134px"
          />
          <Stack
            alignItems="center"
            backgroundColor="white"
            boxShadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
            direction="row"
            spacing="0"
          >
            <Input
              _placeholder={{
                color: "rgba(0,0,0, 0.3)",
              }}
              border="none"
              borderRadius="0"
              height="39px"
              placeholder="Buscar productos, marcas y mas..."
              width="554px"
            />
            <Text backgroundColor="rgba(0,0,0, 0.1)" content='""' height="70%" width="1px" />
            <IconButton
              _focus={{
                background: "none",
              }}
              _hover={{
                background: "none",
              }}
              backgroundColor="white"
              borderRadius="none"
              color="rgba(0,0,0, 0.6)"
              fontSize="20px"
              icon={<IoIosSearch />}
            />
          </Stack>
          <Image
            height="39px"
            src="https://http2.mlstatic.com/D_NQ_800037-MLA50334611790_062022-OO.webp"
            width="340px"
          />
        </Stack>
        <Stack alignItems="flex-end" direction="row" justifyContent="space-between" spacing="50px">
          <Stack direction="row" spacing="0">
            <Icon
              as={IoLocationOutline}
              color="rgba(0,0,0, 0.5)"
              fontSize="27px"
              position="relative"
              top="-3px"
            />
            <Stack alignItems="flex-start" as={Link} fontSize={"13px"} lineHeight="8px">
              <Text color="rgba(0,0,0, 0.5)" fontWeight="300">
                Enviar a Diego
              </Text>
              <Text>España 198</Text>
            </Stack>
          </Stack>
          <Stack
            color="rgba(0,0,0, 0.5)"
            direction="row"
            height="100%"
            spacing="20px"
            width="590px"
          >
            <Stack alignItems="center" direction="row" spacing="0">
              <Link>Categoria</Link>
              <Icon as={RiArrowDownSLine} color="rgba(0,0,0, 0.4)" />
            </Stack>
            {categorias.map((categoria, i) => (
              <Text key={i}>{categoria}</Text>
            ))}
          </Stack>
          <Stack direction="row" spacing="10px" width="320px">
            <Stack direction="row">
              <Image
                borderRadius="50%"
                h="20px"
                src="https://http2.mlstatic.com/D_709251-MLA43655744578_102020-M.webp"
                w="20px"
              />
              <Stack alignItems="center" direction="row" spacing="0">
                <Text>Diego</Text>
                <Icon as={RiArrowDownSLine} color="rgba(0,0,0, 0.4)" />
              </Stack>
            </Stack>
            <Text>Mis compras</Text>
            <Stack alignItems="center" direction="row" spacing="0">
              <Text>Favoritos</Text>
              <Icon as={RiArrowDownSLine} color="rgba(0,0,0, 0.4)" />
            </Stack>
            <Icon as={IoNotificationsOutline} color="rgba(0,0,0, 0.6)" fontSize="20px" />
            <Icon as={BsCart2} color="rgba(0,0,0, 0.6)" fontSize="20px" />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
