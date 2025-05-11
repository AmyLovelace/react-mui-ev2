import Hero from "../src/components/Hero/Hero";
import { Box } from "@mui/material";
import ContactForm from "../src/components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useScrollContext } from "../src/context/ScrollContext";
import Map from "../src/components/Map/Map";

const Home = () => {
  const { setActiveSection } = useScrollContext();
  const { sectionRefs } = useScrollContext();



  useEffect(() => {
    const sections = [
      { id: "Inicio", ref: sectionRefs.Inicio },
      { id: "Contacto", ref: sectionRefs.Contacto },
      { id: "Mapa", ref: sectionRefs.Mapa }

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
    <>
    <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Hero id="Inicio" ref={sectionRefs.Inicio}/>
      {/* Aquí puedes agregar más contenido o componentes */}
    
        {/* <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={5} mb={5} mx={3}>
            <h1>Esta es la segunda sección</h1>
            <p>Este es el contenido de la página de inicio.</p>
        </Box> */}

        <ContactForm id="Contacto" ref={sectionRefs.Contacto}/>
        <Map  id="Mapa" ref={sectionRefs.Mapa}/>
    </Box>
     
    
    </>
  );
}

export default Home;