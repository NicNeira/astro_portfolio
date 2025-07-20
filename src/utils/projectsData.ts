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
        src: contentRetratoOval,
        alt: "Beautiful landscape with a lake and mountains",
      },
    },
  ];
}

export function getSlugProjects(t: (key: string) => string) {
  return [
    {
      id: "la-casa-de-hojas",
      projectTitle: t('project.casa-hojas.title'),
      description: t('project.casa-hojas.description'),
      images: slugImagesLaCasaDeHojas
    },
    {
      id: "ciudad-latente",
      projectTitle: t('project.ciudad-latente.title'),
      description: t('project.ciudad-latente.description'),
      images: slugImagesCiudadLatente
    },
    {
      id: "inhumano",
      projectTitle: t('project.inhumano.title'),
      description: t('project.inhumano.description'),
      images: slugImagesInhumano,
      video: slugVideoInhumano
    },
    {
      id: "retrato-oval",
      projectTitle: t('project.retrato-oval.title'),
      description: t('project.retrato-oval.description'),
      images: slugImagesRetratoOval
    },
    {
      id: "kamtchatka",
      projectTitle: t('project.kamtchatka.title'),
      description: t('project.kamtchatka.description'),
      images: slugImagesRetratoOval
    },
  ];
}

// Mantener exportaciones por compatibilidad (serán reemplazadas gradualmente)
export const portfolioSectionTitle = "Elevando narrativas visuales";
export const portfolioSectionSubtitle = "Embárcate en un viaje de diseño que trasciende los píxeles y te adentra en el mundo de la imaginación. Explora mi portafolio, donde la pasión y la creatividad convergen para crear narrativas visuales cautivadoras.";



export const SlugProjects = [
  {
    id: "la-casa-de-hojas",
    projectTitle: "La Casa de Hojas",
    description: `"La Casa de Hojas" es una instalación artística que explora la historia de un individuo cuya casa crece de manera expansiva y descontrolada con el paso del tiempo. A medida que los años transcurren, el residente descubre nuevos pasillos, habitaciones y pisos, cada uno con estilos arquitectónicos notablemente distintos. Esta narrativa refleja el crecimiento descontrolado de una ciudad o la urbanización a través de la experiencia de este personaje que habita en un espacio extraño y en constante cambio.`,
      images: slugImagesLaCasaDeHojas
  },
  {
    id: "ciudad-latente",
    projectTitle: "Ciudad Latente",
    description: `A través de un recorrido contemplativo observamos como el olvidado humedal de batuco es amenazado por la urbanización y la invasión del hombre guiado por una persona que nació y se crío en el pueblo. Para retratar esta amenaza se hizo uso del simbolismo, a traves de la creación de una maqueta que representará la ciudad capitalista y diversos elementos que generarán contra punto visual.`,
    images: slugImagesCiudadLatente
  },
  {
    id: "inhumano",
    projectTitle: "Inhumano",
    description: `El proyecto "Inhumano" es un cortometraje que planea mostrar lo más bajo del ser humano, por lo cual se usará un lenguaje visual enfocado en el ambiente y la atmósfera que produce la misma sobre el espectador. Para el lugar se barajaron varias ideas, pero se decidió por la idea más arriesgada, hacer la escenografía, reutilizando materiales, madera y pintura.

        Para la ambientación se recurrió a materiales que dieran texturas pobre y vieja, se quería crear un ambiente descuidado y sucio. Tanto el espacio como la caracterización de los personajes, buscaban potenciar esta idea distopica y noir.`,
    images: slugImagesInhumano,
    video: slugVideoInhumano
  },
  {
    id: "retrato-oval",
    projectTitle: "Retrato Oval",
    description: `Un estudiante de arcos busca contactar con el artista (Boisvert) que lo inspiro a dedicarse al cine y la animación, un viaje a la admiración que lentamente se transforma en obsesión con el paso de los días.

        La escenografía está decorada por ilustraciones del artista mr.Doodle en combinación con las obras del mismismo Boisvert
        El tratamiento se piensa en lo estético de la imagen, y en la importancia de este mundo que muchas veces se nos presenta en blanco y negro. Tanto la simbología de Boisvert y la estética de Doodle, profundizan con el relato, generándole forma y estructura visual acorde a lo que se quiere demostrar.`,
    images: slugImagesRetratoOval
  },
  {
    id: "kamtchatka",
    projectTitle: "Kamtchatka",
    description: `Gregorio, inmigrante ilegal, filma el suicidio de una mujer vendada en el mall Costanera; su cuerpo se fusiona grotescamente con ella y, atormentado y perseguido, regresa al lugar para grabar su propio salto al vacío.`,
    images: slugImagesRetratoOval
  },
];