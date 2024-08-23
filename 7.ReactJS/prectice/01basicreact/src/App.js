import "./App.css";
import Card from "./Card";

const data = [
  {
    link: [
      ],
    name: ["ferrari", "Thar", "Mercedes-benz", "Forchunar", "BMW"],
    disc: [
          ],
  },
];

function App({links , names , discs}) {
  return (
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
  );
}

export default App;