import Nav from "../Home/Component/Nav";
import HomeHeroSection from "../Home/Component/HomeHeroSection";
import Section from "./Component/Section";
import ClientSection from "./Component/ClientSection";
// import Overlay from "./Component/Overlay";
import MoreSection from "./Component/MoreSection";
import Footer from "./Component/Footer"

function Home() {
  return (
    <div>
      {/* <Overlay /> */}
      <div>
        <Nav>
          <HomeHeroSection />
        </Nav>
      </div>

      <div>
        <Section />
      </div>

      <div>
        <ClientSection />
      </div>

      <div>
        <MoreSection/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
