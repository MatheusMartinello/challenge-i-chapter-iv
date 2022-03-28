import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ContainerProps {
  title: string;
  content: string;
  image: string;
}
interface SwipperProps {
  swippers: ContainerProps[];
}
export default function Swipper({ swippers }: SwipperProps) {
  return (
    <Box p={20}>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={true}
        className="mySwiper"
      >
        {swippers.map((element) => {
          return (
            <SwiperSlide key={element.title}>
              <Flex
                backgroundImage={`${element.image}`}
                w="100%"
                height="450px"
              >
                <Flex
                  display="flex"
                  justify="center"
                  align="center"
                  w="100%"
                  height="100%"
                >
                  <VStack spacing="2">
                    <Text color="white" fontWeight="bold" fontSize="48">
                      {element.title}
                    </Text>
                    <Text color="white" fontWeight="bold" fontSize="24">
                      {element.content}
                    </Text>
                  </VStack>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
