import Navigation from "./components/Navigation";
import "./index.css";
import Contacts from "./components/Contacts";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";
import Location from "./components/Location";
import { useState, useEffect, createContext } from "react";
import { useQuery } from "react-query";
import { SERVICES_API, getAllServices } from "./SERVICES_API";
import { IAMGES_API, getAllImages } from "./IMAGES_API";
import { DESCRIPTION_API, getDescription } from "./DESCRIPTION_API";

// const HYGRAPH_API = process.env.REACT_APP_HYGRAPH_API;

export const DescriptionContext = createContext();
export const ServicesContext = createContext();
export const ImagesContext = createContext();
export const ToggleContext = createContext();

function App() {
  const [description, setDescription] = useState([]);
  const [images, setImages] = useState([]);
  // const [services, setServices] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  // console.log(HYGRAPH_API)
  const { isLoading, error, data } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const [descriptionResponse, servicesResponse, imagesResponse] =
        await Promise.all([
          fetch(DESCRIPTION_API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ query: getDescription }),
          }),
          fetch(SERVICES_API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ query: getAllServices }),
          }),
          fetch(IAMGES_API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ query: getAllImages }),
          }),
        ]);

      if (!descriptionResponse.ok)
        throw new Error("Failed to fetch description");
      if (!servicesResponse.ok) throw new Error("Failed to fetch services");
      if (!imagesResponse.ok) throw new Error("Failed to fetch images");

      const description = await descriptionResponse.json();
      const services = await servicesResponse.json();
      const images = await imagesResponse.json();
      return { description, services, images };
    },
  });

  useEffect(() => {
    if (data) {
      // const cards = data.data.portfolioCards
      setDescription(data.description.data.descriptions);
      // setServices(data.services.data.services);
      setImages(data.images.data.images);
      // console.log(data.services.data.services);
      console.log("test", data.description.data);
      // console.log(data);
    }
  }, [data]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <main>
        <ToggleContext.Provider value={{ isChecked, setIsChecked }}>
          <Navigation />
          <ImagesContext.Provider value={images}>
            {/* <DescriptionContext.Provider> */}
              <Welcome images={images} />
            {/* </DescriptionContext.Provider> */}
            <Gallery />
          </ImagesContext.Provider>
          {/* <ServicesContext.Provider value={services}> */}
          <Services />
          {/* </ServicesContext.Provider> */}
          <DescriptionContext.Provider value={description}>
            <About description={description}/>
          </DescriptionContext.Provider>
          <Location />
          <Contacts />
        </ToggleContext.Provider>
      </main>
    </div>
  );
}

export default App;
