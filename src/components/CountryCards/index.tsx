import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Flag from "react-flagkit";
interface CountriesCardsProps {
  name: string;
  photo: string;
  abreviations: string;
  city: string;
}
export function CountriesCards({
  name,
  photo,
  abreviations,
  city,
}: CountriesCardsProps) {
  return (
    <Box maxWidth={"256px"} border={"1px"} borderColor={"yellow.500"}>
      <Image src={`./${photo}.svg`} alt="Background" />
      <Flex display="flex" align="center" justify="space-between" p={4}>
        <Box>
          <Text>{city}</Text>
          <Text color="gray.400" fontFamily={"Barlow"}>
            {name}
          </Text>
        </Box>
        <Box borderRadius={0.25}>
          <Flag country={abreviations} size={30} style={{ borderRadius: 25 }} />
        </Box>
      </Flex>
    </Box>
  );
}
