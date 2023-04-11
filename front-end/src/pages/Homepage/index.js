import { Logo, PokeballBottom, PokeballTop } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Homepage';
import { useEffect, useState } from 'react';
import { IoMdMenu, IoIosAdd } from 'react-icons/io';
import { Grow } from '@material-ui/core';
import { toast } from 'react-toastify';

export default function Homepage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <HomepageLayout>
      <PokeballTop></PokeballTop>
      <PokeballBottom></PokeballBottom>
    </HomepageLayout>
  );
}
