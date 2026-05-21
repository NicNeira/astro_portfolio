const CLOUDINARY_BASE = 'https://res.cloudinary.com/ds8bhx4d4/image/upload/q_auto,f_auto'
const CLOUDINARY_THUMB = 'https://res.cloudinary.com/ds8bhx4d4/image/upload/w_1200,q_auto,f_auto'

const cl = (id: string) => `${CLOUDINARY_BASE}/${id}`
const th = (id: string) => `${CLOUDINARY_THUMB}/${id}`

// ─── Imágenes por proyecto ────────────────────────────────────────────────────

const slugImagesLaCasaDeHojas = [
  { src: th('IMG_1010_yx6qo6'), alt: 'La Casa de Hojas - imagen 1', width: 1200, height: 900  },
  { src: th('IMG_1004_vwcxos'), alt: 'La Casa de Hojas - imagen 2', width: 1200, height: 900  },
  { src: th('IMG_1056_fqxq29'), alt: 'La Casa de Hojas - imagen 3', width: 900,  height: 1200 },
  { src: th('IMG_1923_wqtusp'), alt: 'La Casa de Hojas - imagen 4', width: 1200, height: 800  },
]

const slugImagesCiudadLatente = [
  { src: th('image_mr0uag'),               alt: 'Ciudad Latente - imagen 1', width: 800,  height: 450  },
  { src: th('IMG-20231125-WA0032_supofl'), alt: 'Ciudad Latente - imagen 2', width: 750,  height: 1000 },
  { src: th('IMG_20231007_161250_hw5naj'), alt: 'Ciudad Latente - imagen 3', width: 563,  height: 1000 },
  { src: th('IMG-20231122-WA0013_ooxdmd'), alt: 'Ciudad Latente - imagen 4', width: 750,  height: 1000 },
]

const slugImagesInhumano = [
  { src: th('IMG_20240406_211940_rdzan0'), alt: 'Inhumano - imagen 1', width: 1200, height: 900  },
  { src: th('image_uiojnz'),               alt: 'Inhumano - imagen 2', width: 997,  height: 1000 },
  { src: th('IMG_20230609_101302_diszn8'), alt: 'Inhumano - imagen 3', width: 1200, height: 675  },
  { src: th('IMG_20230624_130203_ojugvh'), alt: 'Inhumano - imagen 4', width: 1200, height: 675  },
  { src: th('IMG_20230706_181145_yl0wkj'), alt: 'Inhumano - imagen 5', width: 1200, height: 675  },
]

const slugImagesRetratoOval = [
  { src: th('IMG-20221116-WA0011_q6ovmr'), alt: 'Retrato Oval - imagen 1', width: 1024, height: 692  },
  { src: th('IMG_20221017_214959_xyyimg'), alt: 'Retrato Oval - imagen 2', width: 1200, height: 675  },
  { src: th('IMG_20221022_160522_yun1iu'), alt: 'Retrato Oval - imagen 3', width: 1200, height: 675  },
  { src: th('IMG_20221105_140500_lrk2mr'), alt: 'Retrato Oval - imagen 4', width: 675,  height: 1200 },
]

const slugImagesKamtchatka = [
  { src: th('01_l92zj1'), alt: 'Kamtchatka - imagen 1', width: 1200, height: 900 },
  { src: th('02_jt67qo'), alt: 'Kamtchatka - imagen 2', width: 1200, height: 900 },
  { src: th('03_xxnzdc'), alt: 'Kamtchatka - imagen 3', width: 1200, height: 900 },
  { src: th('04_c3nlm6'), alt: 'Kamtchatka - imagen 4', width: 1200, height: 900 },
  { src: th('05_nrqkol'), alt: 'Kamtchatka - imagen 5', width: 1200, height: 800 },
  { src: th('06_r7qd9b'), alt: 'Kamtchatka - imagen 6', width: 1200, height: 900 },
  { src: th('07_zwdhax'), alt: 'Kamtchatka - imagen 7', width: 1200, height: 900 },
  { src: th('08_kd3lmg'), alt: 'Kamtchatka - imagen 8', width: 900,  height: 1200 },
]

const extraWorksImages = [
  { src: th('IMG_1950_ad9hcg'),                              alt: 'Trabajo extra 1', width: 1200, height: 800  },
  { src: th('IMG_1973_dt6jbf'),                              alt: 'Trabajo extra 2', width: 1200, height: 800  },
  { src: th('IMG_2009_lyryov'),                              alt: 'Trabajo extra 3', width: 1200, height: 675  },
  { src: th('IMG_2036_kxn4ly'),                              alt: 'Trabajo extra 4', width: 675,  height: 1200 },
  { src: th('_MG_5328_jkcrss'),                              alt: 'Trabajo extra 5', width: 1200, height: 900  },
  { src: th('4995B537-876F-4898-8715-260B88A90596_d4zk2a'), alt: 'Trabajo extra 6', width: 1200, height: 675  },
  { src: th('DB2C282E-5F6B-43F7-B02B-3EDED4E1DD55_ciflfa'), alt: 'Trabajo extra 7', width: 1200, height: 800  },
  { src: th('944A707C-CD76-4DCB-BB2A-C08D9DF365D2_d1k3wl'),  alt: 'Trabajo extra 8', width: 1200, height: 900  },
  { src: th('FEF2FEAD-BA88-49A6-95B1-DD8D8F5FD7E0_qpdvdv'),  alt: 'Trabajo extra 9', width: 1200, height: 900  },
]

// ─── Funciones exportadas ────────────────────────────────────────────────────

export function getContentProjects(t: (key: string) => string, lang: string) {
  return [
    {
      id: 'la-casa-de-hojas',
      projectTitleHTML: t('project.casa-hojas.title'),
      description: t('project.casa-hojas.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/la-casa-de-hojas`,
      image: slugImagesLaCasaDeHojas[0],
    },
    {
      id: 'ciudad-latente',
      projectTitleHTML: t('project.ciudad-latente.title'),
      description: t('project.ciudad-latente.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/ciudad-latente`,
      image: slugImagesCiudadLatente[0],
    },
    {
      id: 'inhumano',
      projectTitleHTML: t('project.inhumano.title'),
      description: t('project.inhumano.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/inhumano`,
      image: slugImagesInhumano[0],
    },
    {
      id: 'retrato-oval',
      projectTitleHTML: t('project.retrato-oval.title'),
      description: t('project.retrato-oval.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/retrato-oval`,
      image: slugImagesRetratoOval[0],
    },
    {
      id: 'kamtchatka',
      projectTitleHTML: t('project.kamtchatka.title'),
      description: t('project.kamtchatka.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/kamtchatka`,
      image: slugImagesKamtchatka[0],
    },
  ]
}

export function getSlugProjects(t: (key: string) => string) {
  return [
    {
      id: 'la-casa-de-hojas',
      projectTitle: t('project.casa-hojas.title'),
      description: t('project.casa-hojas.full-description'),
      images: slugImagesLaCasaDeHojas,
    },
    {
      id: 'ciudad-latente',
      projectTitle: t('project.ciudad-latente.title'),
      description: t('project.ciudad-latente.full-description'),
      images: slugImagesCiudadLatente,
    },
    {
      id: 'inhumano',
      projectTitle: t('project.inhumano.title'),
      description: t('project.inhumano.full-description'),
      images: slugImagesInhumano,
    },
    {
      id: 'retrato-oval',
      projectTitle: t('project.retrato-oval.title'),
      description: t('project.retrato-oval.full-description'),
      images: slugImagesRetratoOval,
    },
    {
      id: 'kamtchatka',
      projectTitle: t('project.kamtchatka.title'),
      description: t('project.kamtchatka.full-description'),
      images: slugImagesKamtchatka,
    },
  ]
}

export function getExtraWorksImages() {
  return extraWorksImages
}
