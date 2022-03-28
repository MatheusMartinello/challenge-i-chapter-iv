import type { NextPage } from "next";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Swipper from "../components/Swiper";
import TravelTypes from "../components/TavelTypes";
interface ContainerProps {
  title: string;
  content: string;
  image: string;
}
const Home: NextPage = () => {
  const countries: ContainerProps[] = [
    {
      title: "Europa",
      content: "O Continente mais antigo",
      image: "./europe.svg",
    },
    { title: "ëuropa1", content: "o continente", image: "./Background.svg" },
    { title: "ëuropa3", content: "o continente", image: "./Background.svg" },
    { title: "ëuropa4", content: "o continente", image: "./Background.svg" },
  ];
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Swipper swippers={countries} />
    </>
  );
};

export default Home;
