import { Facebook, Instagram, LinkedIn, Youtube } from "../UI/SVGs";

export const NAV = [
  {
    title: "Acasa",
    path: "/",
  },
  {
    title: "Cursuri",
    path: "/cursuri",
  },
  {
    title: "Certificari",
    path: "/certificari",
  },
  {
    title: "Corporate",
    dropdown: [
      { title: "Cursuri", path: "corporate/cursuri" },
      { title: "Parteneriate", path: "corporate/parteneriate" },
    ],
  },
  {
    title: "Despre",
    dropdown: [
      { title: "IT School", path: "despre/itschool" },
      { title: "Testimoniale", path: "despre/testimoniale" },
      { title: "Traineri", path: "despre/traineri" },
      { title: "Intrebari frecvente", path: "despre/faq" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const FOOTER = [
  { title: "Cursuri", path: "/cursuri" },
  { title: "Certificări", path: "/certificari" },
  { title: "Întrebări frecvente", path: "/despre/faq" },
  { title: "Contact", path: "/contact" },
];

export const MORE = [
  { title: "Testimoniale", path: "/despre/testimoniale" },
  { title: "Traineri", path: "/despre/traineri" },
  {
    title: "Devino trainer",
    path: "https://itschoolromania.typeform.com/trainer",
  },
  { title: "Parteneriate", path: "/corporate/parteneriate" },
];

export const UTILS = [
  { title: "juniors.ro", path: "https://www.juniors.ro/" },
  { title: "Certiprime", path: "https://www.certiprime.ro/" },
  { title: "ANC", path: "https://www.edu.ro/ANC" },
  { title: "ANPC", path: "https://anpc.ro/" },
];

export const SOCIALS = [
  { icon: Facebook, path: "https://www.facebook.com/itschool.ro/" },
  { icon: LinkedIn, path: "https://ro.linkedin.com/company/itschoolro" },
  {
    icon: Youtube,
    path: "https://www.youtube.com/channel/UCrnVBDc5n5bPwgKxOTBnEkA",
  },
  { icon: Instagram, path: "https://www.instagram.com/itschoolro/" },
];
