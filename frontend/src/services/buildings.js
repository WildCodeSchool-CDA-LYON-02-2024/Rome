import barracks1 from "../../public/images/buildings/barracks1.png";
import barracks2 from "../../public/images/buildings/barracks2.png";
import barracks3 from "../../public/images/buildings/barracks3.png";
import barracks4 from "../../public/images/buildings/barracks4.png";
import forum1 from "../../public/images/buildings/forum1.png";
import forum2 from "../../public/images/buildings/forum2.png";
import forum3 from "../../public/images/buildings/forum3.png";
import forum4 from "../../public/images/buildings/forum4.png";
import house1 from "../../public/images/buildings/house1.png";
import house2 from "../../public/images/buildings/house2.png";
import house3 from "../../public/images/buildings/house3.png";
import house4 from "../../public/images/buildings/house4.png";
import racecourse from "../../public/images/buildings/racecourse.png";
import temple from "../../public/images/buildings/temple.png";

const building = {
  batiments: [
    {
      name: "Temple",
      positionX: 150,
      positionY: 150,
      state: "enable",
      image: `${temple}`,
      width: "150",
      height: "150",
    },
    {
      name: "House2",
      positionX: 200,
      positionY: 50,
      state: "enable",
      image: `${house2}`,
      width: "150",
      height: "150",
    },
    {
      name: "House3",
      positionX: 20,
      positionY: 150,
      state: "enable",
      image: `${house3}`,
      width: "150",
      height: "150",
    },
    {
      name: "House1",
      positionX: 30,
      positionY: 50,
      state: "enable",
      image: `${house1}`,
      width: "150",
      height: "150",
    },
    {
      name: "Racecourse",
      positionX: 30,
      positionY: 250,
      state: "enable",
      image: `${racecourse}`,
      width: "150",
      height: "150",
    },
    {
      name: "Forum2",
      positionX: 200,
      positionY: 350,
      state: "enable",
      image: `${forum2}`,
      width: "150",
      height: "150",
    },
    {
      name: "Forum3",
      positionX: 150,
      positionY: 250,
      state: "enable",
      image: `${forum3}`,
      width: "150",
      height: "150",
    },
    {
      name: "House4",
      positionX: 100,
      positionY: 400,
      state: "enable",
      image: `${house4}`,
      width: "150",
      height: "150",
    },
    {
      name: "Barracks1",
      positionX: 90,
      positionY: 310,
      state: "enable",
      image: `${barracks1}`,
      width: "150",
      height: "150",
    },
    {
      name: "Barracks2",
      positionX: 200,
      positionY: 450,
      state: "enable",
      image: `${barracks2}`,
      width: "150",
      height: "150",
    },
    {
      name: "Forum4",
      positionX: 250,
      positionY: 150,
      state: "enable",
      image: `${forum4}`,
      width: "150",
      height: "150",
    },
    {
      name: "Forum1",
      positionX: 100,
      positionY: 90,
      state: "enable",
      image: `${forum1}`,
      width: "150",
      height: "150",
    },
    {
      name: "Barracks3",
      positionX: 150,
      positionY: 150,
      state: "enable",
      image: `${barracks3}`,
      width: "150",
      height: "150",
    },
    {
      name: "Barracks4",
      positionX: 30,
      positionY: 450,
      state: "enable",
      image: `${barracks4}`,
      width: "150",
      height: "150",
    },
  ],
  ressources: [
    {
      name: "gold",
      count: "35%",
    },
    {
      name: "food",
      count: "50%",
    },
  ],
};

export default building;
