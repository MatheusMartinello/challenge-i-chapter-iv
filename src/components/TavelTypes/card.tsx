import {
  Button,
  Flex,
  Img,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
interface TravelCardProps {
  logo: string;
  text: string;
}
export function TravelCard({ logo, text }: TravelCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex>
      <Button h="100%" backgroundColor={"transparent"}>
        <VStack spacing="4">
          <Img
            src={`./Icons/${logo} 1.svg`}
            alt="icon"
            p="2"
            w="75"
            h="75"
            display={isWideVersion ? "" : "none"}
          />
          <Text p="4" textAlign={"center"}>
            {text}
          </Text>
        </VStack>
      </Button>
    </Flex>
  );
}
