import { Logo, PokeballBottom, PokeballCircle, PokeballTop } from '../../components/Homepage';
import HomepageLayout from '../../layouts/Page';
import { useEffect, useState } from 'react';
import { IoMdMenu, IoIosAdd } from 'react-icons/io';
import { Grow } from '@material-ui/core';
import { toast } from 'react-toastify';

export default function Homepage() {
  useEffect(() => {
  }, []);

  return (
    <HomepageLayout>
      <PokeballTop>Pokédex</PokeballTop>
      <PokeballBottom></PokeballBottom>
      <PokeballCircle><p>Tap!</p></PokeballCircle>
    </HomepageLayout>
  );
}
