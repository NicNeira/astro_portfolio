import contentLeafHouse from "@assets/images/casaHojas/IMG_1010.webp";
import contentCityLatente from "@assets/images/ciudadLatente/IMG-20231125-WA0032.webp";
import contentInhumano from "@assets/images/inhumano/IMG_20240406_211940.webp"
import contentRetratoOval from "@assets/images/retratoOval/IMG-20221116-WA0011.webp";

import slugImageLaCasaDeHojas1 from "@assets/images/casaHojas/IMG_1010.webp";
import slugImageLaCasaDeHojas2 from "@assets/images/casaHojas/IMG_1004.webp";
import slugImageLaCasaDeHojas3 from "@assets/images/casaHojas/IMG_1056.webp";
import slugImageLaCasaDeHojas4 from "@assets/images/casaHojas/IMG_1923.webp";

import slugImageCiudadLatente1 from "@assets/images/ciudadLatente/IMG-20231125-WA0032.webp"; 
import slugImageCiudadLatente2 from "@assets/images/ciudadLatente/IMG_20231007_161250.webp";
import slugImageCiudadLatente3 from "@assets/images/ciudadLatente/IMG-20231122-WA0013.webp"; 
import slugImageCiudadLatente4 from "@assets/images/ciudadLatente/image.webp";

import slugImageInhumano1 from "@assets/images/inhumano/IMG_20230609_101302.webp";
import slugImageInhumano2 from "@assets/images/inhumano/IMG_20240406_211940.webp";
import slugImageInhumano3 from "@assets/images/inhumano/IMG_20230624_130203.webp";
import slugImageInhumano4 from "@assets/images/inhumano/image.webp"; 
import slugImageInhumano5 from "@assets/images/inhumano/IMG_20230706_181145.webp";

import slugImageRetratoOval1 from "@assets/images/retratoOval/IMG-20221116-WA0011.webp";
import slugImageRetratoOval2 from "@assets/images/retratoOval/IMG_20221022_160522.webp";
import slugImageRetratoOval3 from "@assets/images/retratoOval/IMG_20221105_140500.webp";
import slugImageRetratoOval4 from "@assets/images/retratoOval/IMG_20221017_214959.webp";

const slugVideoInhumano = "https://www.youtube-nocookie.com/embed/WHOU6y4KiHo?si=gCuMb6C1rXqnsFGV";

// Configuración de imágenes de Kamtchatka desde Azure Storage
const AZURE_KAMTCHATKA_BASE_URL = "https://maxistorage.blob.core.windows.net/assets/kamtchatka";

// Función para codificar correctamente las URLs de las imágenes
const getKamtchatkaImageUrl = (index: number) => {
  return `${AZURE_KAMTCHATKA_BASE_URL}/kamtchatka%20(${index}).jpg`;
};

// Configuración de imágenes de trabajos extras desde Azure Storage
const AZURE_EXTRA_WORKS_BASE_URL = "https://maxistorage.blob.core.windows.net/assets/extra-works";

// Función para codificar correctamente las URLs de las imágenes de trabajos extras
const getExtraWorkImageUrl = (index: number) => {
  return `${AZURE_EXTRA_WORKS_BASE_URL}/trabajos-extras%20(${index}).jpg`;
};

const contentKamtchatka = {
  src: getKamtchatkaImageUrl(1),
  width: 1920,
  height: 1080,
};

// Generar array de imágenes de Kamtchatka (1-14)
const slugImagesKamtchatka = Array.from({ length: 14 }, (_, index) => ({
  src: getKamtchatkaImageUrl(index + 1),
  alt: `Kamtchatka - Imagen ${index + 1}`,
  width: 1920,
  height: 1080,
}));

// Generar array de imágenes de trabajos extras (1-8)
const extraWorksImages = Array.from({ length: 8 }, (_, index) => ({
  src: getExtraWorkImageUrl(index + 1),
  alt: `Trabajo extra ${index + 1}`,
  width: 1920,
  height: 1080,
}));

const slugImagesLaCasaDeHojas = [
  {
    src: slugImageLaCasaDeHojas1,
    alt: "Beautiful landscape with a lake and mountains",
  },
  {
    src: slugImageLaCasaDeHojas2,
    alt: "Sandy beach with turquoise water",
  },
  {
    src: slugImageLaCasaDeHojas3,
    alt: "Cute pug dog looking at the camera",
  },
  {
    src: slugImageLaCasaDeHojas4,
    alt: "Misty forest path in the morning",
  },
];

const slugImagesCiudadLatente = [
  {
    src: slugImageCiudadLatente1,
    alt: "Beautiful landscape with a lake and mountains",
  },
  {
    src: slugImageCiudadLatente2,
    alt: "Sandy beach with turquoise water",
  },
  {
    src: slugImageCiudadLatente3,
    alt: "Cute pug dog looking at the camera",
  },
  {
    src: slugImageCiudadLatente4,
    alt: "Misty forest path in the morning",
  },
];

const slugImagesInhumano = [
  {
    src: slugImageInhumano1,
    alt: "Beautiful landscape with a lake and mountains",
  },
  {
    src: slugImageInhumano2,
    alt: "Sandy beach with turquoise water",
  },
  {
    src: slugImageInhumano3,
    alt: "Cute pug dog looking at the camera",
  },
  {
    src: slugImageInhumano4,
    alt: "Misty forest path in the morning",
  },
  {
    src: slugImageInhumano5,
    alt: "Misty forest path in the morning",
  },
];

const slugImagesRetratoOval = [
  {
    src: slugImageRetratoOval1,
    alt: "Beautiful landscape with a lake and mountains",
  },
  {
    src: slugImageRetratoOval2,
    alt: "Sandy beach with turquoise water",
  },
  {
    src: slugImageRetratoOval3,
    alt: "Cute pug dog looking at the camera",
  },
  {
    src: slugImageRetratoOval4,
    alt: "Misty forest path in the morning",
  },
];

// Función para obtener datos de proyectos con traducciones
export function getContentProjects(t: (key: string) => string, lang: string) {
  return [
    {
      id: "la-casa-de-hojas",
      projectTitleHTML: t('project.casa-hojas.title'),
      description: t('project.casa-hojas.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/la-casa-de-hojas`,
      image: {
        src: contentLeafHouse,
        alt: "Beautiful landscape with a lake and mountains",
      },
    },
    {
      id: "ciudad-latente",
      projectTitleHTML: t('project.ciudad-latente.title'),
      description: t('project.ciudad-latente.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/ciudad-latente`,
      image: {
        src: contentCityLatente,
        alt: "Sandy beach with turquoise water",
      },
    },
    {
      id: "inhumano",
      projectTitleHTML: t('project.inhumano.title'),
      description: t('project.inhumano.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/inhumano`,
      image: {
        src: contentInhumano,
        alt: "Cute pug dog looking at the camera",
      },
    },
    {
      id: "retrato-oval",
      projectTitleHTML: t('project.retrato-oval.title'),
      description: t('project.retrato-oval.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/retrato-oval`,
      image: {
        src: contentRetratoOval,
        alt: "Beautiful landscape with a lake and mountains",
      },
    },
    {
      id: "kamtchatka",
      projectTitleHTML: t('project.kamtchatka.title'),
      description: t('project.kamtchatka.description'),
      href: `${lang === 'es' ? '' : '/' + lang}/portfolio/kamtchatka`,
      image: {
        src: contentKamtchatka.src,
        alt: "Kamtchatka - Proyecto audiovisual",
        width: contentKamtchatka.width,
        height: contentKamtchatka.height,
      },
    },
  ];
}

export function getSlugProjects(t: (key: string) => string) {
  return [
    {
      id: "la-casa-de-hojas",
      projectTitle: t('project.casa-hojas.title'),
      description: t('project.casa-hojas.full-description'),
      images: slugImagesLaCasaDeHojas
    },
    {
      id: "ciudad-latente",
      projectTitle: t('project.ciudad-latente.title'),
      description: t('project.ciudad-latente.full-description'),
      images: slugImagesCiudadLatente
    },
    {
      id: "inhumano",
      projectTitle: t('project.inhumano.title'),
      description: t('project.inhumano.full-description'),
      images: slugImagesInhumano,
      video: slugVideoInhumano
    },
    {
      id: "retrato-oval",
      projectTitle: t('project.retrato-oval.title'),
      description: t('project.retrato-oval.full-description'),
      images: slugImagesRetratoOval
    },
    {
      id: "kamtchatka",
      projectTitle: t('project.kamtchatka.title'),
      description: t('project.kamtchatka.full-description'),
      images: slugImagesKamtchatka
    },
  ];
}

// Función para obtener las imágenes de trabajos extras
export function getExtraWorksImages() {
  return extraWorksImages;
}

// Exportaciones por compatibilidad (pueden ser removidas en el futuro)
export const portfolioSectionTitle = "Elevando narrativas visuales";
export const portfolioSectionSubtitle = "Embárcate en un viaje de diseño que trasciende los píxeles y te adentra en el mundo de la imaginación. Explora mi portafolio, donde la pasión y la creatividad convergen para crear narrativas visuales cautivadoras.";