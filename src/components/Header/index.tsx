import { Flex, Img } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h={10}
      mx={"auto"}
      my="8"
      align="center"
      px="6"
      justify={"center"}
    >
      <Img src="./Logo.svg" alt="Logo" />
    </Flex>
  );
}
