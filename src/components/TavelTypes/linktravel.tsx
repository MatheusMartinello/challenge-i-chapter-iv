import { HStack } from "@chakra-ui/react";
import { TravelCard } from "./card";

export default function LinkTravel() {
  return (
    <HStack spacing="20">
      <TravelCard logo="cocktail" text="Vida noturna" />
      <TravelCard logo="surf" text="Praia" />
      <TravelCard logo="building" text="Moderno" />
      <TravelCard logo="museum" text="Clássico" />
      <TravelCard logo="earth" text="E mais..." />
    </HStack>
  );
}
