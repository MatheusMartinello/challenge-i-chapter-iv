import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { CountriesCards } from "../components/CountryCards";
import Header from "../components/Header";
import { NumberCard } from "../components/NumberCard";

const country = [
  {
    city: "Londres",
    country: "Reino Unido",
    photo: "FotoLondon",
    abreviations: "GB",
  },
  {
    city: "Paris",
    country: "França",
    photo: "FotoParis",
    abreviations: "FR",
  },
  {
    city: "Roma",
    country: "Itália",
    photo: "FotoRome",
    abreviations: "IT",
  },
  {
    city: "Amsterdã",
    country: "Holanda",
    photo: "FotoAmsterda",
    abreviations: "HL",
  },
];

export default function Europe() {
  return (
    <>
      <Header />
      <Box w={"100%"}>
        <Box
          backgroundImage="./europe-banner.svg"
          backgroundRepeat={"no-repeat"}
          backgroundSize={"contain"}
          w={"100%"}
          h={"500px"}
          display="flex"
        >
          <Flex
            display="flex"
            justify="flex-start"
            align="flex-end"
            p={20}
            w={"100%"}
          >
            <Box>
              <Text color="gray.50" fontSize={36} fontWeight="medium">
                Europa
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Flex display="flex" justify="center" p={20} w={"100%"}>
        <HStack spacing={10} justify="space-between" w={"100%"}>
          <Box maxWidth={450}>
            <Text textAlign={"justify"} fontWeight="regular" fontSize="18">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Box width="100%" maxWidth="490px">
            <HStack justify="space-between">
              <NumberCard text="países" number={50} />
              <NumberCard text="linguas" number={60} />
              <NumberCard text="cidades +100" number={27} />
            </HStack>
          </Box>
        </HStack>
      </Flex>
      <Flex display="grid" align="flex-start" p={20}>
        <Box>
          <Text fontWeight="medium" fontSize="36">
            Cidades +100
          </Text>
        </Box>
        <HStack spacing="10" mt={8}>
          {country.map((element) => (
            <CountriesCards
              key={element.city}
              city={element.city}
              name={element.country.toString()}
              photo={element.photo}
              abreviations={element.abreviations}
            />
          ))}
        </HStack>
      </Flex>
    </>
  );
}
