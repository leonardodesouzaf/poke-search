import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

  await prisma.place.create({
    data: {
      name: 'Cristo Redentor',
      district: 'RJ',
      image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/cristo-redentor-como-visitar-precos-rio-de-janeiro-capa.jpg',
      image2: 'https://observatorio3setor.org.br/wp-content/uploads/2022/11/AdobeStock_89029019-scaled-e1669668425566.jpeg',
      image3: 'http://santuariocristoredentor.com.br/files/attachment/2391/retina_2010-06-16%20-%20Cristo%20Redentor%20-%20Fim%20da%20reforma%2012%201.jpg',
      image4: 'https://s2.glbimg.com/hGMj9i9hpAi99oU9Qc6EiYdv_hY=/i.glbimg.com/og/ig/infoglobo1/f/original/2021/10/12/cristo.jpg',
      description: 'Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, com vista para parte considerável da cidade brasileira do Rio de Janeiro. Feito de concreto armado e pedra-sabão, tem trinta metros de altura (uma das maiores estátuas do mundo), sem contar os oito metros do pedestal. Seus braços se esticam por 28 metros de largura e a estrutura pesa 1145 toneladas. Símbolo do cristianismo, o Cristo Redentor também se tornou um ícone cultural do Rio de Janeiro, do Brasil e da América Latina como um todo, sendo retratado no cinema, na televisão e em músicas. O monumento é um importante ponto turístico, que recebe, em média, 2 milhões de visitantes por ano. Em 2007, foi eleito informalmente como uma das sete maravilhas do mundo moderno e, em 2012, a UNESCO considerou o Cristo Redentor como parte da paisagem do Rio de Janeiro incluída na lista de Patrimônios da Humanidade.',
      city: 'Rio de Janeiro, Rio de Janeiro',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9542746056463!2d-43.21267588488418!3d-22.95191104525333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1675495024540!5m2!1spt-BR!2sbr',
      isPaid: true,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: true,
      car: true,
      airplane: true,
      boat: false
    },
  });

  await prisma.place.create({
    data: {
      name: 'Copacabana',
      district: 'RJ',
      image: 'https://invexo.com.br/blog/wp-content/uploads/2022/09/palmeiras-calcadao-de-copacabana-rio-de-janeiro.jpg',
      image2: 'https://a.cdn-hotels.com/gdcs/production62/d586/1be9ef68-2abb-45f3-98e2-3fb842683b9e.jpg',
      image3: 'https://diariodorio.com/wp-content/uploads/2022/04/byRafaPereira-8556.jpg',
      image4: 'https://viajenaweb.com/wp-content/uploads/2017/07/Dicas-para-passar-o-reveillon-na-praia-de-Copacabana-Rio-de-Janeiro.jpg',
      description: 'Famosa pela praia em forma de meia-lua, Copacabana é um dos bairros mais animados do Rio. Ela atrai moradores e turistas para atividades ininterruptas nas suas areias e no calçadão desenhado. Entre os arranha-céus com vista para a praia, estão o hotel Copacabana Palace em estilo art déco e o exuberante Forte de Copacabana, que abriga um museu militar. Mais para dentro do bairro, cafés descontraídos e bares casuais enchem as ruas sossegadas. Copacabana atrai um grande contingente de turistas para seus mais de oitenta hotéis, que ficam especialmente cheios durante as épocas do ano-novo e do carnaval. No fim de ano, a tradicional queima de fogos na Praia de Copacabana atrai uma multidão. A orla ainda é lugar de variados eventos, como shows nacionais e internacionais, durante o resto do ano.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.496012389984!2d-43.19451006594685!3d-22.973270559647368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd523d20f9c53%3A0x693c6132635e6b0d!2sCopacabana%2C%20Rio%20de%20Janeiro%20-%20State%20of%20Rio%20de%20Janeiro!5e0!3m2!1sen!2sbr!4v1677750973495!5m2!1sen!2sbr',
      city: 'Rio de Janeiro, Rio de Janeiro',
      isPaid: false,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: false,
      car: true,
      airplane: true,
      boat: true
    },
  });

  await prisma.place.create({
    data: {
      name: 'Centro Histórico de Paraty',
      district: 'RJ',
      image: 'https://blogdatripsz.com.br/wp-content/uploads/2022/09/centro.jpg',
      image2: 'https://lh3.googleusercontent.com/p/AF1QipP1wi91OnAcOaDdqLoZABBA6_jzofYtUOSTBAW3=s1360-w1360-h1020',
      image3: 'https://blog.bonitour.com.br/wp-content/uploads/2021/08/Blog-FicaDica-Raone-Bonitour-Viagens-Destaque-03.jpg',
      image4: 'https://i0.wp.com/documentodeviagem.com/wp-content/uploads/2020/08/o-que-fazer-paraty-rj.jpg?resize=800%2C445&ssl=1',
      description: 'A presença das águas, com a invasão das marés na lua cheia, a cultura do café e da cana, o porto e seus piratas, a maçonaria determinaram o traçado do Centro Histórico de Paraty. As ruas foram todas traçadas do nascente para o poente e do norte para o sul. Todas as construções das moradias eram regulamentadas por lei, podendo pagar com multa ou prisão, quem desobedecesse as determinações. O Centro Histórico, considerado pela UNESCO como “o conjunto arquitetônico colonial mais harmonioso” é Patrimônio Nacional tombado pelo IPHAN e, desde 2019, Patrimônio da Humanidade pela UNESCO. Dentro do Centro Histórico encontram-se 4 igrejas coloniais, sendo que a Igreja da Santa Rita, cartão postal da cidade, abriga o Museu de Arte Sacra de Paraty. Sua ruas, protegidas por correntes que impedem a passagem dos carros, preservam ainda o encanto colonial, aliado a um variado comércio e a expressões culturais e artísticas muito intensas.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6537344955505!2d-44.714409184783925!3d-23.219286484853797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d6d1f66cfa627%3A0x8599c16a8fd44eb1!2sCentro%20Hist%C3%B3rico%2C%20Paraty%20-%20State%20of%20Rio%20de%20Janeiro!5e0!3m2!1sen!2sbr!4v1677751960834!5m2!1sen!2sbr',
      city: 'Paraty, Rio de Janeiro',
      isPaid: false,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: false,
      car: true,
      airplane: false,
      boat: true
    },
  });

  await prisma.place.create({
    data: {
      name: 'Pontal do Atalaia',
      district: 'RJ',
      image: 'https://www.aprendizdeviajante.com/wp-content/uploads/2018/08/prainhaspontaldoatalaia.jpg',
      image2: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/dc/4e/34/photo0jpg.jpg?w=1200&h=-1&s=1',
      image3: 'https://www.mundoviajante.com/wp-content/uploads/2022/07/pontal_do_atalaia_arraial_do_cabo-2-1.jpg',
      image4: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/264000/264771-Atalaia-Viewpoint-Arraial.jpg',
      description: 'O Pontal do Atalaia, localizado em Arraial do Cabo, é um monte de terra em formato de morro que invade o mar na região dos Lagos do Rio de Janeiro, a 164 km da capital carioca. As Prainhas ficam localizadas no Morro do Pontal do Atalaia e receberam esse nome porque são compostas de duas praias. Quando a maré está baixa, as duas praias se unem em uma mesma faixa de areia. A água das Prainhas tem temperatura agradável e é bem calma, formando uma piscina natural cristalina. A cor da água pode variar entre o azul e o verde dependendo da hora do dia, o que mostra porque a região é comparada com o Caribe. Para chegar ao Mirante do Pontal do Atalaia, é preciso subir a ladeira para chegar ao mirante. Do topo do morro dá para ver a Praia Brava, à esquerda, e a Praia Grande, à direita, além de um vasto oceano azul. Quem já esteve por lá conta que é um ótimo ponto para assistir ao pôr do sol.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.948966672172!2d-42.01476213478776!3d-22.988904034970076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97193beee11855%3A0x64f01b2499e8e0b8!2sThe%20Small%20Beaches!5e0!3m2!1sen!2sbr!4v1677754133244!5m2!1sen!2sbr',
      city: 'Arraial do Cabo, Rio de Janeiro',
      isPaid: false,
      hasFood: true,
      hasCellular: true,
      hasWc: false,
      hasGuidance: false,
      isTrekking: false,
      needId: false,
      car: true,
      airplane: false,
      boat: true
    },
  });

  await prisma.place.create({
    data: {
      name: 'Pão de Açúcar',
      district: 'RJ',
      image: 'https://images.mnstatic.com/3f/eb/3feb10819f4fe9093be4ff1d218e92e9.jpg?quality=75&format=pjpg&fit=crop&width=980&height=880&aspect_ratio=980%3A880',
      image2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Vista_do_Morro_Dona_Marta.jpg/2560px-Vista_do_Morro_Dona_Marta.jpg',
      image3: 'https://a.cdn-hotels.com/gdcs/production186/d1087/84949bcf-a088-4d02-bbcf-8a95d90f3415.jpg',
      image4: 'https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/rio_de_janeiro_2406219939.jpg',
      description: 'É composto pelo Morro do Pão de Açúcar (que dá nome ao complexo) e pelo Morro da Urca. Junto com a estátua do Cristo Redentor, é o maior cartão-postal da cidade do Rio de Janeiro e um dos mais famosos do Brasil. Pelas características únicas, margeado pelas águas da baía de Guanabara, constitui-se em uma referência turística internacional para a cidade. Possui, como atração complementar, o passeio de teleférico, interligando a Praia Vermelha, o Morro da Urca e o Morro do Pão de Açúcar. Conhecido como Bondinho do Pão de Açúcar, o teleférico foi idealizado em 1908 e inaugurado em 1912, tornando-se o primeiro teleférico instalado no país e o terceiro do mundo. Entre as atrações da área, além do bondinho, estão a pista Cláudio Coutinho para corrida ou caminhada, a trilha do Morro da Urca com vista para Corcovado, Copacabana, Botafogo e Baía de Guanabara e muitas rotas de escalada.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14696.105254685635!2d-43.163330465953216!3d-22.949258009842364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9980409039f845%3A0x8075d7bcdfbcb48c!2sSugarloaf%20Mountain!5e0!3m2!1sen!2sbr!4v1677755943269!5m2!1sen!2sbr',
      city: 'Rio de Janeiro, Rio de Janeiro',
      isPaid: true,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: true,
      needId: true,
      car: true,
      airplane: true,
      boat: true
    },
  });

  await prisma.place.create({
    data: {
      name: 'Ipanema',
      district: 'RJ',
      image: 'https://a.cdn-hotels.com/gdcs/production165/d100/5e0a7326-4dd3-40cc-9eb7-3af978f69b3d.jpg',
      image2: 'https://mediaim.expedia.com/destination/1/f4d6d2e975a7312600348351ed4ac4ff.jpg',
      image3: 'https://mediaim.expedia.com/destination/1/f8fac0830ae788615a7400da664ba1ef.jpg',
      image4: 'https://i0.wp.com/travelexpert.wiki/wp-content/uploads/2016/06/AdobeStock_143885651-1500x.jpeg?fit=1500%2C1000&ssl=1',
      description: 'Ipanema figura entre os principais pontos turísticos da cidade do Rio de Janeiro, tanto para turistas brasileiros quanto internacionais. Todo ano, turistas lotam o tradicional bairro e sua praia. O Parque Garota de Ipanema e a Pedra do Arpoador são pontos turísticos populares. Assim como a vista para o Morro Dois Irmãos, um cartão-postal do Rio de Janeiro. A Igreja de Nossa Senhora da Paz também é um ponto turístico da região, recentemente reformada. Recentemente, vários albergues vêm sendo instalados no bairro, o que aumentou consideravelmente o número de jovens de todos os lugares do mundo, nas ruas. Isso valorizou imóveis antes menos procurados, como as casas mais antigas localizadas principalmente nas pitorescas vilas do bairro. Além de ser um ponto de encontro tradicional para moradores e turistas, a praia é utilizada para a prática de diversos esportes. Entre as atividades favoritas estão o skiboard surf, frescobol, vôlei, futebol, futevôlei.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14692.281931976588!2d-43.21075861594388!3d-22.984435509556757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd50ffe726191%3A0xbb0215da9c59a67b!2sIpanema%2C%20Rio%20de%20Janeiro%20-%20State%20of%20Rio%20de%20Janeiro!5e0!3m2!1sen!2sbr!4v1677756630544!5m2!1sen!2sbr',
      city: 'Rio de Janeiro, Rio de Janeiro',
      isPaid: false,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: false,
      car: true,
      airplane: true,
      boat: true
    },
  });

  await prisma.place.create({
    data: {
      name: 'Ilhas Botinas',
      district: 'RJ',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/58/e8/09/caption.jpg',
      image2: 'https://lanchasilhagrande.com.br/site/wp-content/uploads/2017/12/botinas2.jpg',
      image3: 'https://imgmd.net/images/v1/guia/1592084/ilhas-botinas.jpg',
      image4: 'http://cdn.shopify.com/s/files/1/2115/1981/products/ilha-botinas-01.jpg?v=1661886294',
      description: 'Localizada em Angra dos Reis, as Ilhas Botinas são o principal cartão postal de Angra dos Reis. São conhecidas também como Ilhas irmãs ou Ilhas Gêmeas por conta da semelhança entre elas. As Botinas ficam localizadas em um ponto central da baía da Ilha Grande e podem ser vistas de diversos pontos do Centro de Angra, são na verdade duas pequenas formações rochosas cobertas por coqueiros e bromélias e seu nome se dá pela semelhança com um par de botas. A experiência ao conhecer as Ilhas Botinas é potencializada por sua principal característica, o fundo de areia branca e a profundidade que varia entre 3 a 10 metros atrelada a águas cristalinas exibem toda a exuberância da flora e fauna marinha, o que torna este ponto como ideal para a prática de snorkeling, com a visão de um verdadeiro aquário marinho com peixes coloridos e estrelas-do-mar.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1198687614797!2d-44.33127198478664!3d-23.05606658493605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c522c1a924233%3A0x83e20c2025822e51!2sBotinas%20Islands!5e0!3m2!1sen!2sbr!4v1677758468009!5m2!1sen!2sbr',
      city: 'Angra dos Reis, Rio de Janeiro',
      isPaid: false,
      hasFood: false,
      hasCellular: true,
      hasWc: false,
      hasGuidance: true,
      isTrekking: false,
      needId: false,
      car: false,
      airplane: false,
      boat: true
    },
  });

  await prisma.place.create({
    data: {
      name: 'Inhotim',
      district: 'MG',
      image: 'https://static.wixstatic.com/media/4a227e_5f15ec1ec1c5429395af9becc5f73622~mv2.jpg/v1/fill/w_560,h_558,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4a227e_5f15ec1ec1c5429395af9becc5f73622~mv2.jpg',
      image2: 'https://blog.pottencial.com.br/wp-content/uploads/2022/09/Narcissus-Garden_Brendon-Campos_01_Inhotim-1-scaled.jpg',
      image3: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/08/inhotim-capa2019-01.jpg',
      image4: 'https://s3.amazonaws.com/cdn.chickenorpasta.com.br/content/uploads/2022/05/24144444/obra-muros-em-jardim-%40entaovah-1440x620.jpg',
      description: 'O Instituto Inhotim é um museu de arte contemporânea e Jardim Botânico, localizado em Brumadinho (MG). Reconhecido como Organização da Sociedade Civil de Interesse Público (OSCIP) pelo Governo de Minas Gerais em 2008, o Inhotim é uma entidade privada, sem fins lucrativos, mantida com recursos de doações de pessoas físicas e jurídicas, diretas ou por meio das Leis Federal e Estadual de Incentivo à Cultura, pela bilheteria e realização de eventos. Idealizado desde a década de 1980 pelo empresário mineiro Bernardo de Mello Paz, do solo ferroso de uma fazenda da região nasceu, em 2006, um dos maiores museus a céu aberto do mundo. Sua localização privilegiada, entre os ricos biomas da Mata Atlântica e do Cerrado, e as paisagens exuberantes ao longo dos 140 hectares de visitação proporcionam aos visitantes uma experiência única que mescla arte e natureza.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.2379927427714!2d-44.22178818483212!3d-20.12411638649525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6cdcc06f9b9e7%3A0x6c432e2cb28d154c!2sInhotim%20Museum!5e0!3m2!1sen!2sbr!4v1677770799694!5m2!1sen!2sbr',
      city: 'Brumadinho, Minas Gerais',
      isPaid: true,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: true,
      car: true,
      airplane: false,
      boat: false
    },
  });

  await prisma.place.create({
    data: {
      name: 'Circuito Liberdade',
      district: 'MG',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0WwIxMvO8hxS05F5uMYCQ1LJz1Zmy1B6xYPBRw15Gy_7QuviGcJEe0S2KN_u5ibK2Go&usqp=CAU',
      image2: 'https://1.bp.blogspot.com/-61YwTfyT9aI/YPX6gtn9rmI/AAAAAAAA8oI/jnMtR8gU1V4KcAi346HcnZZr-FwQMl0fACLcBGAsYHQ/s2048/Liberdade%2B%25287%2529.jpg',
      image3: 'https://culturalizabh.com.br/wp-content/uploads/2020/08/CM_11.12.2018-VISTA-AEREA-DE-BH9-1210x642.jpg',
      image4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coreto_da_Praça_da_Liberdade_BH.jpg/1280px-Coreto_da_Praça_da_Liberdade_BH.jpg',
      description: 'O Circuito Liberdade foi criado em 2010, após a inauguração da Cidade Administrativa e a transferência oficial da sede do governo da Praça da Liberdade para a região Norte de Belo Horizonte. A sua criação visava transformar os prédios históricos esvaziados em espaços com vocação para a arte, a cultura e a preservação do patrimônio, reunidos como complexo cultural referência para moradores da capital mineira e visitantes. Apesar de recente, a história do Circuito se confunde com a da própria cidade de Belo Horizonte e de Minas Gerais, pois a Praça da Liberdade foi projetada no final do século 19 para abrigar o centro administrativo do Estado, com a construção das secretarias e do Palácio da Liberdade, sede e símbolo do Governo. A inauguração da Praça e seus prédios aconteceram em 1898, tendo sido palco de importantes acontecimentos políticos que marcaram a história de Minas Gerais e do Brasil. As entradas nos museus está disponível para toda a comunidade.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15003.256380614403!2d-43.9389282!3d-19.9322374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e70554e4cb%3A0xe63576a211263bd0!2sCircuito%20Liberdade!5e0!3m2!1spt-BR!2sbr!4v1677771458876!5m2!1spt-BR!2sbr',
      city: 'Belo Horizonte, Minas Gerais',
      isPaid: false,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: true,
      car: true,
      airplane: true,
      boat: false
    },
  });

  await prisma.place.create({
    data: {
      name: 'Circuito do Ouro',
      district: 'MG',
      image: 'https://www.infoescola.com/wp-content/uploads/2009/01/ouro-preto_560936134.jpg',
      image2: 'https://imgmd.net/images/v1/guia/1699207/ouro-preto-206-c.jpg',
      image3: 'https://www.clubdfilo.com.br/dashboard/uploads/6879a0d7-caa4-47a5-ad2c-b3af4f2b444f/blog1.jpg',
      image4: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Montanhas_da_Serra_da_mantiqueira.jpg',
      description: 'O Circuito do Ouro é uma região turística que agrupa 15 municípios, com afinidades culturais, históricas e naturais, com grande proximidade geográfica entre eles. Alguns dos municípios estão localizados na região metropolitana de Belo Horizonte, e os mais distantes estão a no máximo 170km da capital mineira. Região marcada pelo ciclo do ouro em Minas Gerais foi berço da Inconfidência Mineira e terra de histórias e lendas incríveis, sendo também referência em arquitetura! O roteiro Entre Serras da Piedade ao Caraça, formada por Caeté, Barão de Cocais, Santa Bárbara e Catas Altas, emociona e encanta a todos com a religiosidade, gastronomia e natureza entre estes dois Santuários de Minas. O roteiro Entre Cenários da História, que agrupa os municípios que foram palco da história de Minas Gerais, composto por Congonhas, Ouro Branco, Ouro Preto e Mariana. O roteiro Entre Trilhas, Sabores e Aromas, formado por Rio Acima, Itabirito, Nova Lima e Sabará mostra a gastronomia muito além do pão de queijo agrupando os melhores pratos típicos da região, e une natureza com história de forma harmoniosa. O roteiro Entre Ruralidades e Personalidades mostra a cultura mineira, as vivências dos tropeiros e de grandes personalidades do barroco e da contemporaneidade, em Itabira e Nova Era.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7745357.493145318!2d-45.45145529999999!3d-18.577967899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a165324289%3A0x112170c9379de7b3!2sMinas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1677773042443!5m2!1spt-BR!2sbr',
      city: 'Minas Gerais',
      isPaid: false,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: true,
      needId: false,
      car: true,
      airplane: false,
      boat: false
    },
  });

  await prisma.place.create({
    data: {
      name: 'Cânion de Furnas',
      district: 'MG',
      image: 'https://destinosnotaveis.com.br/wp-content/uploads/2019/08/lago-de-furnas-2.jpg',
      image2: 'https://destinobrasilte.com.br/wp-content/uploads/2022/04/dreamstime_xxl_212051961-scaled.jpg',
      image3: 'https://conteudo.imguol.com.br/c/entretenimento/75/2023/01/07/trabalho-de-avaliacao-geologica-em-capitolio-1673127036516_v2_1170x540.jpg',
      image4: 'https://www.vaipormim.com/storage/posts/files/8e5fbd20ace90a98f90fd4444c315f6f5124df10.webp',
      description: 'Os Cânions da represa de Furnas fazem qualquer viajante se sentir minúsculo diante de tamanha imponência. Através dos passeios de barco pelas águas do lago você irá passar por enormes paredões de mais de vinte metros de altura, que, ao se aproximar, verá as fendas abrirem espaço para uma vista deslumbrante de cachoeiras com inúmeras quedas d\'água sucessivas, dando vida a um verdadeiro espetáculo da natureza de beleza raríssima. O interessante dessa região é que toda essa beleza não se deve somente à ação da natureza, mas sim pelo homem, foi formada, em grande parte, pela construção da barragem da usina hidrelétrica de Furnas que, apesar de ter gerado problemas, como a desocupação de milhares de habitantes e também o alagamento de muitas áreas férteis, hoje traz crescimento para sua economia através do turismo e, é claro, deu origem não só ao Lago de Furnas como ao incrível cenário dos Canyons de Capitólio que atraem turistas de todos os cantos do Brasil.',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.901796044677!2d-46.3143930729838!3d-20.673573942026426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b699285b829903%3A0x917d0527071c9aee!2sCanyon%20da%20Barragem%20da%20Hidrel%C3%A9trica%20de%20Furnas!5e0!3m2!1spt-BR!2sbr!4v1677773430686!5m2!1spt-BR!2sbr',
      city: 'Capitólio, Minas Gerais',
      isPaid: false,
      hasFood: false,
      hasCellular: true,
      hasWc: false,
      hasGuidance: true,
      isTrekking: true,
      needId: false,
      car: true,
      airplane: false,
      boat: true
    },
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
