import alice from "../assets/alice.jpeg";
import bar from "../assets/bar.jpeg";
import david from "../assets/david.jpeg";
import maayan from "../assets/maayan.jpeg";

export const authours = [
  {
    name: "Bar Weizman",
    linkedin: "https://www.linkedin.com/in/bar-weizman/",
    github: "https://github.com/barweizman",
    img: bar
  },
  {
    name: "Alice Aildin",
    linkedin: "https://www.linkedin.com/in/alice-aidlin-41625919a/",
    github: "https://github.com/alice-aidlin",
    img: alice
  },
  {
    name: "David Abenhaim",
    linkedin: "https://www.linkedin.com/in/david-abenhaim-0657bb1a5/",
    github: "https://github.com/ZiteiX",
    img: david
  },
  {
    name: "Maayan Nadivi",
    linkedin:
      "https://www.linkedin.com/in/maayan-nadivi-vilko-software-engineering/",
    github: "https://github.com/maayanadivi",
    img: maayan
  }
];

export const GITHUB_ICON = "https://www.svgrepo.com/show/341847/github.svg";
export const LINKEDIN_ICON =
  "https://www.svgrepo.com/show/16193/linkedin-logo.svg";

export const JWT_SESSION_KEY = "C541863AQGUm3AQGUnXyAQGUmD_lxL-xIQjZb03AQE";
export const IS_OVER_18_KEY = "asdaldkasldkas";
export const CART_SESSION_KEY = "123asdaslfklqk3elkaldkas";

export const filters = {
  date: "date",
  highToLow: "highToLow",
  lowToHigh: "lowToHigh"
};

export const productCategories = {
  wine: "Wine",
  rum: "Rum",
  vodka: "Vodka",
  arak: "Arak",
  beer: "Beer",
  party: "Party",
  classic: "Classic"
};

export const productTypes = ["Wine", "Beer", "Whiskey", "Vodka"];

export const INC = "INC";
export const DEC = "DEC";

export const DEBOUNCE_TIME = 300;
