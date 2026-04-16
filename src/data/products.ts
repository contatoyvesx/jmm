import pressure from "@/assets/product-pressure.jpg";
import pots from "@/assets/product-pots.jpg";
import pan from "@/assets/product-pan.jpg";
import bakeware from "@/assets/product-bakeware.jpg";
import utensils from "@/assets/product-utensils.jpg";
import kettle from "@/assets/product-kettle.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
};

export const products: Product[] = [
  {
    id: "panela-pressao",
    name: "Panela de Pressão Industrial",
    category: "Panelas",
    description:
      "Panela de pressão em alumínio reforçado, alta capacidade, ideal para uso intensivo doméstico e profissional.",
    image: pressure,
    specs: ["4,5L · 7L · 10L · 20L", "Alumínio polido 3,5mm", "Válvula de segurança tripla"],
  },
  {
    id: "conjunto-panelas",
    name: "Jogo de Panelas Tradicional",
    category: "Panelas",
    description:
      "Conjunto completo de panelas em alumínio batido, distribuição uniforme de calor e durabilidade comprovada.",
    image: pots,
    specs: ["5 peças com tampas", "Cabos termofixos", "Espessura 4mm"],
  },
  {
    id: "frigideira",
    name: "Frigideira Profissional",
    category: "Frigideiras",
    description:
      "Frigideira em alumínio fundido com cabo ergonômico. Antiaderência natural após cura.",
    image: pan,
    specs: ['20cm · 24cm · 28cm · 32cm', "Fundo extra-grosso 6mm", "Cabo rebitado reforçado"],
  },
  {
    id: "assadeira",
    name: "Assadeiras e Formas",
    category: "Assadeiras",
    description:
      "Linha completa de assadeiras retangulares e redondas em alumínio repuxado para padarias e restaurantes.",
    image: bakeware,
    specs: ["Diversos tamanhos", "Bordas reforçadas", "Uso industrial"],
  },
  {
    id: "utensilios",
    name: "Conchas e Utensílios",
    category: "Utensílios",
    description:
      "Conchas, escumadeiras e colheres em alumínio polido. Resistência e leveza para o dia a dia.",
    image: utensils,
    specs: ["Linha completa", "Acabamento fosco ou polido", "Cabos longos"],
  },
  {
    id: "chaleiras",
    name: "Chaleiras e Bules",
    category: "Linha quente",
    description:
      "Chaleiras tradicionais em alumínio com tampa rosqueável e bico anti-respingo.",
    image: kettle,
    specs: ["1,5L · 2,5L · 4L", "Cabo isolante", "Vedação reforçada"],
  },
];
