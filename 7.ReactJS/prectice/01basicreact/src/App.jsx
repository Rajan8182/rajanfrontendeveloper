import "./App.css";
import Card from "./Card";

const data = [
  {
    link: ["https://cdn.ferrari.com/cms/network/media/img/resize/65365152790f9e00231f447f-ferrari729151piufondo_1920x1080%20centered?width=1080",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/1200px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg",
      "https://images.hindustantimes.com/auto/img/2023/09/04/1600x900/Mercedes-Benz_EQG_1693801998397_1693801998508.jpg",
      "https://www.cartoq.com/wp-content/uploads/2022/05/fortuner-gr-s-2.jpg",
      "https://www.bmw.in/content/dam/bmw/common/topics/offers-and-services/bmw-special-sales-2020/protection-vehicle/bmw-css-7-series-protection-ms-new-standard.jpg",
      ],
    name: ["Ferrari", "Thar", "Mercedes-benz", "Forchunar", "BMW"],
    disc: ["Ferrari car price starts at Rs. 3.50 Crore and goes upto Rs. 10.50 Crore (Avg. ex-showroom). The prices for the top 5 popular Ferrari Cars are: Ferrari Purosangue SUV Price is Rs. 10.50 Crore, Ferrari 296 GTB Price is Rs. 5.40 Crore, Ferrari Roma Price is Rs. 3.76 Crore, Ferrari F8 Tributo Price is Rs. 4.02 Crore and Ferrari 296 GTS Price is Rs. 6.24 Crore.","The Thar is a two-door, serious off-roader that drives reasonably well on the road. It stands out with its rugged stance, modern design, and durable construction. The powertrains are powerful, with the petrol option being superbly refined and entertaining for a Mahindra.","The G-Class, despite its price, is not just for show. It offers powerful driving with great steering, speed, and braking. It's comfortable even on rough roads, inviting you to explore. The cost is justified mainly through style and emotional appeal.","The Fortuner, known for Toyota's bulletproof reliability, commands the road with its imposing stance, true 4x4 capability, and powerful engines. Adequately equipped with features, it seats seven passengers comfortably and excels at covering long distances with ease and comfort.","BMW car price starts at Rs 43.90 Lakh for the cheapest model which is 2 Series Gran Coupe and the price of most expensive model, which is XM starts at Rs 2.60 Crore. BMW offers 22 car models in India, including 9 cars in SUV category, 8 cars in Sedan category, 1 car in Convertible category, 4 cars in Coupe category. BMW has 1 upcoming car in India, New X3."
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