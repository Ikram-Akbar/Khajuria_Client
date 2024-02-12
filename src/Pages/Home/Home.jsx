
import Service from "../../Components/Service/Service";
import Location from "../Location/Location";
import OurPeople from "../OurPeople/OurPeople";
import Section from "../Section/Section";
import Banner from "../Shared/Bnner/Banner";
import VillageDetails from "../VillageDetails/VillageDetails";


const Home = () => {
  return (
    <>
      <Banner/>
     <Service/>
     <OurPeople/>
     <Location/>
     <VillageDetails/>
     <Section/>
    </>
  );
};

export default Home;
