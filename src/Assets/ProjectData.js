import Drumblr from "./drumblr-image.png";
import SuperPetBros from "./superPetBros.png";
import MyIslandTracker from "./acnh-tracker.png";
import Verbose from "./verbose.png";
import LetsEat from "./lets-eat.png";
import SaladBowl from "./saladBowl.png";
import LunchTime from "./lunchtime.png"

const personalProjects = [
  {
    name: "Verbose",
    url: "https://www.github.com/kev-kev/verbose",
    notes: "Vocabulary learning app built with React Bootstrap and the Owlbot API",
    image: Verbose,
  },
  {
    name: "Salad Bowl",
    url: "https://www.github.com/kev-kev/salad-bowl-frontend",
    notes:
      "Online multiplayer game made using websockets and React. Submit words, act them out, and guess them!",
    image: SaladBowl,
  },
  {
    name: "Let's Eat!",
    url: "https://github.com/kev-kev/lets-eat",
    notes:
      "Web app to help you and your partner plan meals. Frontend: React with context and Material-UI, Backend: Ruby on Rails",
    image: LetsEat,
  },
  {
    name: "lunchtime",
    url: "https://github.com/kev-kev/lunchtime",
    notes: "Top-down pixel shooter game, made with Phaser + ES6 + Webpack",
    image: LunchTime,
  },
];

const bootcampProjects = [
  {
    name: "MyIslandTracker",
    url: "https://github.com/kev-kev/acnh-tracker",
    notes: "A tracking tool for the video game Animal Crossing New Horizons.",
    image: MyIslandTracker,
    walkthrough:
      "https://www.notion.so/kevkev/Animal-Crossing-Tracker-a4c84c1041544c2486799b86a85ec6a8",
  },
  {
    name: "Drumblr",
    url: "https://github.com/kev-kev/drumblr-frontend",
    notes:
      "Browser-based drum machine made with React and the Web Drum Sequencer library.",
    image: Drumblr,
  },
  {
    name: "Super Pet Bros",
    url: "https://github.com/kev-kev/superPetBros",
    notes:
      "Create your very own virtual pet and battle it against others. Vanilla JS frontend and Ruby on Rails backend",
    image: SuperPetBros,
  },
];

export { personalProjects, bootcampProjects };
