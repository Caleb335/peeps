import React from "react";
import NewsStyle from "./style/Newsfeed.module.css";
import { BiSearch } from "react-icons/bi";
import Card from "../../components/Card";

const Newsfeed = () => {
  const [data, setData] = React.useState({ topics: [] });
  // i'm setting the state of the data that we would
  // be fetching from the api to be inside an array.
  // You get??

  React.useEffect(() => {
    // sorry let's use fetch() i'm much familiar with that one
    // so...
    fetch("https://tipestry.com/api/topic")
      .then((response) => response.json())
      .then((data) => {
        // this outputs the api schema in our console.
        setData(data);
        console.log(data)
      });
  }, []);

  return (
    <div className={NewsStyle.card}>
      <BiSearch />
      <input type="text" placeholder="Enter a URL" />
      <h4>LOAD</h4>
      {/*  all the cards will go here...
      // I'd try adding some dummy data inside the card. */}
      {data.topics.map((topic, id) => {
        return (
          <Card key={id}>
            <div className={NewsStyle.topicContent}>
              <div className={NewsStyle.thumbs}>thumbs</div>
              <div className={NewsStyle.topicImg}>
                <img src={topic.userId.img} alt="topic image" />
              </div>
              {/* the text content falls below */}
              <div className={NewsStyle.details}>
                <h4>{topic.title}</h4>
                <p>{topic.userId.username}</p>
                <p>{topic.createdAt}</p>
                <p>{topic.tagString}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Newsfeed;
