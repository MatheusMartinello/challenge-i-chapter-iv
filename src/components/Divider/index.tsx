import { Divider as ChakraDivider, Flex } from "@chakra-ui/react";

export default function Divider() {
  return (
    <Flex justify="center" mt={8}>
      <ChakraDivider
        colorScheme={"blackAlpha"}
        maxWidth="90px"
        variant={"solid"}
      />
    </Flex>
  );
}
