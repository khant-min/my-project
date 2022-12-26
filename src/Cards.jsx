import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    const fetchCards = async () => {
      const data = await axios.get("../data/db.json");
      setDatas(data.data.about_us.cards);
    };
    fetchCards();
  });
  return (
    <section className="flex gap-10 flex-wrap m-4">
      {datas?.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </section>
  );
};

export default Cards;
