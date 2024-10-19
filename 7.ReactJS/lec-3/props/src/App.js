import "./App.css";
import Card from "./card.jsx";

const data = [
  {
    link: [
      "https://tinypng.com/images/social/website.jpg",
      "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
      "https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg",
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippedonn-1133957.jpg&fm=jpg",
      "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    ],
    name: ["Giant panda", "Tiger", "Owl", "Hummingbirds", "Taj Mahal"],
    disc: [
      "The giant panda, also known as the panda bear or simply panda, is a bear species endemic to China. It is characterised by its white coat with black patches around the eyes, ears, legs and shoulders. ",
      "The tiger is a member of the genus Panthera and the largest living cat species native to Asia. It has a powerful, muscular body with a large head and paws, a long tail and orange fur with black, mostly vertical stripes. ",
      "Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.",
      "Hummingbirds are birds native to the Americas and comprise the biological family Trochilidae. With approximately 366 species and 113 genera, they occur from Alaska to Tierra del Fuego, but most species are found in Central and South America. ",
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631",
    ],
  },
];

function App() {
  return (
    <div>
       <>
      <div className="flex">
        {data.map((item) => {
          return (
            <>
              <Card
                key={item}
                links={item.link}
                names={item.name}
                discs={item.disc}
              />
              <Card
                key={item}
                links={item.link}
                names={item.name}
                discs={item.disc}
              />
              <Card
                key={item}
                links={item.link}
                names={item.name}
                discs={item.disc}
              />
              <Card
                key={item}
                links={item.link}
                names={item.name}
                discs={item.disc}
              />
              <Card
                key={item}
                links={item.link}
                names={item.name}
                discs={item.disc}
              />
            </>
          );
        })}
      </div>
    </>
    </div>
  );
}

export default App;
