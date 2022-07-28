const products = [
  {
    id: 1,
    name: "Notebook HP",
    price: 100000,
    category: "notebook",
    img: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/4/348V5LA-1_T1632518517.png",
    stock: 10,
    description: "8 GB de Ram, SSD 250 GB, I3",
  },
  {
    id: 2,
    name: "Notebook MAC",
    price: 120000,
    category: "notebook",
    img: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/6/26M79LT-1_T1644333610.png",
    stock: 15,
    description: "16 GB de Ram, SSD 250 GB, I5",
  },
  {
    id: 3,
    name: "Notebook Lenovo",
    price: 150000,
    category: "notebook",
    img: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e14-gen-2-hero.png?context=bWFzdGVyfHJvb3R8MjY4OTA2fGltYWdlL3BuZ3xoYTAvaGIyLzE0MTA2OTIyMzE5OTAyLnBuZ3xkMTM5OTVhY2M3ODRhNGZlOGZiN2M0N2RlNjJiYTA4Zjg2ZjUwM2RhY2UyM2VkZWYwMzY4OTA3ZmQ3ZTlkYjVh",
    stock: 20,
    description: "4 GB de Ram, SSD 500 GB, I7",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
