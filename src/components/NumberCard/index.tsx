import { Flex, Stack, Text } from "@chakra-ui/react";
interface NumberCardProps {
  number: number;
  text: string;
}
export function NumberCard({ text, number }: NumberCardProps) {
  return (
    <Stack spacing={4} align="center">
      <Text color="yellow.500" fontSize="48px" fontWeight="bold">
        {number}
      </Text>
      <Text fontSize="24px" fontWeight="bold">
        {text}
      </Text>
    </Stack>
  );
}
