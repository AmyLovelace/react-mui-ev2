import './Mapa.css';
import { Box } from '@mui/material';

const Mapa = () => {
    return (
        
        <Box
            component={'iframe'}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.817125783569!2d-72.85154342319788!3d-38.60254697953056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966ad17524277319%3A0xd3ccc73108ced70b!2sIlustre%20Municipalidad%20de%20Chol-Chol!5e1!3m2!1ses!2scl!4v1746856868439!5m2!1ses!2scl" 
            // width="600px"
            width={{md: '600px', sm: '500px', xs: '300px'}} 
            height={{md: '450px', sm: '375px', xs: "225px"}} 
            // style="border:0;" 
            // allowfullscreen="" 
            // loading="lazy" 
            // referrerpolicy="no-referrer-when-downgrade"
            >
        
        </Box>
            

         

    )
}
export default Mapa;