import { Box, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box w={"100%"}>
      <Box
        backgroundImage="./Background.svg"
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        w={"100%"}
        h={"100%"}
        display="flex"
      >
        <HStack
          spacing="10"
          display="flex"
          justify={isWideVersion ? "space-around" : "flex-start"}
          w={"100%"}
        >
          <Box>
            <Text color="gray.50" fontSize={36} fontWeight="medium">
              5 Continentes,
            </Text>
            <Text color="gray.50" fontSize={36} fontWeight="medium">
              infinitas possibilidades.
            </Text>
            <Text color="gray.50">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Box w={isWideVersion ? "" : "100%"}>
            <Image
              src="./Airplane.svg"
              alt="airplane"
              marginTop={75}
              display={isWideVersion ? "" : "none"}
            />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
