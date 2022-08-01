const products = [
  {
    id: 1,
    name: "Notebook HP",
    price: 120000,
    category: "notebook",
    img: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/4/348V5LA-1_T1632518517.png",
    stock: 10,
    description:
      "La HP EliteBook 840 está diseñada para su forma de trabajo y le ofrece una nueva experiencia de audio basada en inteligencia artificial. Este equipo profesional delgado y ultraligero que es fácil de transportar se ofrece con una relación pantalla-cuerpo del 85 por ciento y un teclado silencioso y cómodo para trabajar.",
  },
  {
    id: 2,
    name: "Celular Samsung",
    price: 75000,
    category: "celular",
    img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2840_a_1_.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds",
    stock: 15,
    description:
      "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
  },
  {
    id: 3,
    name: "Tablet Lenovo",
    price: 60000,
    category: "tablet",
    img: "https://images.fravega.com/f300/bae3680e437fc6f640248370ad086e39.jpg.webp",
    stock: 20,
    description:
      "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[0]);
    }, 2000);
  });
};
