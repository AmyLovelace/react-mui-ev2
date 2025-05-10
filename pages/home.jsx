import Hero from "../src/components/Hero/Hero";
import { Box } from "@mui/material";
import Mapa from "../src/components/Mapa/Mapa";

const Home = () => {

  return (
    <>
    <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Hero />
      {/* Aquí puedes agregar más contenido o componentes */}
    
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={5} mb={5} mx={3}>
            <h1>Esta es la segunda sección</h1>
            <p>Este es el contenido de la página de inicio.</p>
        </Box>

        <Mapa/>
    </Box>
     
    
    </>
  );
}

export default Home;