import AppleBYZS852I from "../../assets/png/Apple BYZ S852I.png";
import AppleEarpods from "../../assets/png/Apple Earpods.png";
import AppleEarpodsClose from "../../assets/png/Apple Earpodsclose.png";
import AppleAirPods from "../../assets/png/Apple AirPods.png";
import GERLAX_GH_04 from "../../assets/png/GERLAX GH-04.png";
import BOROFONE_BO4 from "../../assets/png/BOROFONE BO4.png";
export interface product {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  isDiscount: boolean;
  priceBeforeDiscount: number;
  description: string;
  features: { feature: string[]; featureDescription: string[] };
}

const headphones: product[] = [
  {
    id: 1,
    img: AppleBYZS852I,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    isDiscount: true,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
  {
    id: 2,
    img: AppleEarpods,
    title: "Apple Earpods",
    price: 2327,
    rate: 4.5,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
  {
    id: 3,
    img: AppleEarpodsClose,
    title: "Apple Earpods",
    price: 2327,
    rate: 4.5,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
  {
    id: 4,
    img: AppleBYZS852I,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
  {
    id: 5,
    img: AppleEarpods,
    title: "Apple Earpods",
    price: 2327,
    rate: 4.5,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
  {
    id: 6,
    img: AppleEarpodsClose,
    title: "Apple Earpods",
    price: 2327,
    rate: 4.5,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
];
const wirelessHeadphones: product[] = [
  {
    id: 7,
    img: AppleAirPods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
  {
    id: 8,
    img: GERLAX_GH_04,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
  {
    id: 9,
    img: BOROFONE_BO4,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
    isDiscount: false,
    priceBeforeDiscount: 3527,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia tristique nisi a elementum. Morbi cursus non lectus in pretium. ",
    features: {
      feature: ["Lorem ipsum", "Lorem ipsum"],
      featureDescription: ["Lorem ipsum", "Lorem ipsum"],
    },
  },
];

export { headphones, wirelessHeadphones };
