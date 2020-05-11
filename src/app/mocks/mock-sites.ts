import { Site } from "../objects/site";

export const SITES: Site[] = [
  {
    id: 1,
    link: "https://miro.com/",
    name: "Miro",
    description: "Whiteboard collaboratif en ligne",
    image:
      "https://ga1.imgix.net/logo/o/91635-1553520851-0150356?auto=format&q=50&fit=fill",
    types: ["collaboratif", "dessin"],
    created: new Date(),
    borderColor: "#ffcf00"
  },
  {
    id: 2,
    link: "https://trello.com/fr",
    name: "Trello",
    description: "Outil de gestion de projet collaboratif",
    image:
      "https://www.stickpng.com/assets/images/58482beecef1014c0b5e4a36.png",
    types: ["collaboratif", "scrum"],
    created: new Date(),
    borderColor: "#008bdd"
  },
];
