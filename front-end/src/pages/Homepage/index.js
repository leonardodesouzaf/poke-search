import { PokeballBottom, PokeballCircle, PokeballTop } from '../../components/Homepage';
import { useNavigate } from 'react-router-dom';
import HomepageLayout from '../../layouts/Homepage';
import { useState } from 'react';
import { Slide } from '@material-ui/core';

export default function Homepage() {
  const navigate = useNavigate();
  const [isHomepageDisplay, setIsHomepageDisplay] = useState(true);
  
  function navigateToGallery() {
    setIsHomepageDisplay(false);
    setTimeout(() => {
      navigate('/gallery');
    }, 1000);
  }

  return (
    <HomepageLayout>
      <Slide direction="down" in={isHomepageDisplay} timeout={1000} mountOnEnter unmountOnExit>
        <PokeballTop>Pokédex</PokeballTop>
      </Slide>
      <Slide direction="up" in={isHomepageDisplay} timeout={1000} mountOnEnter unmountOnExit>
        <PokeballBottom></PokeballBottom>
      </Slide>
      <Slide direction="up" in={isHomepageDisplay} timeout={{ enter: 1020, exit: 1120 }} mountOnEnter unmountOnExit>
        <PokeballCircle onClick={() => navigateToGallery()}><p>Tap!</p></PokeballCircle>
      </Slide>
    </HomepageLayout>
  );
}
