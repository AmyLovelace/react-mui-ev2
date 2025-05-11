import Hero from "../src/components/Hero/Hero";
import { Box } from "@mui/material";
import ContactForm from "../src/components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useScrollContext } from "../src/context/ScrollContext";
import Map from "../src/components/Map/Map";
import ComunaSlider from "../src/components/ComunaSlider/ComunaSlider";
import ContactSelect from "../src/components/ContactSelect/ContactSelect";
import Municipio from "../src/components/Municipio/Municipio";

const Home = () => {
  const { setActiveSection,sectionRefs } = useScrollContext();

  useEffect(() => {
    const sections = [
      { id: "Inicio", ref: sectionRefs.Inicio },
      { id: "Municipio", ref: sectionRefs.Municipio },
      { id: "Contacto", ref: sectionRefs.Contacto },
      { id: "Mapa", ref: sectionRefs.Mapa },
      { id: "Comuna", ref: sectionRefs.Slider }

    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = sections.find(s => s.ref.current === entry.target)?.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [setActiveSection]);
  
  return (
    <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Hero id="Inicio" ref={sectionRefs.Inicio}/>
        <Municipio id="Municipio" ref={sectionRefs.Municipio}/>
        <ContactForm id="Contacto" ref={sectionRefs.Contacto}/>
        <ContactSelect/>
        <Map id="Mapa" ref={sectionRefs.Mapa}/>
        <ComunaSlider id="Slider" ref={sectionRefs.Slider} />
    </Box>
  );
}

export default Home;