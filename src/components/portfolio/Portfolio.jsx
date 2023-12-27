import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    // {
    //   id: 'mobile',
    //   title: 'Mobile App',
    // },
    // {
    //   id: 'designing',
    //   title: 'Designing',
    // },
    // {
    //   id: 'branding',
    //   title: 'Branding',
    // }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);

        break;
      case "web":
        setData(webPortfolio);

        break;
      case "mobile":
        setData(mobilePortfolio);

        break;
      case "designing":
        setData(designPortfolio);

        break;
      case "content":
        setData(contentPortfolio);

        break;

      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <a className="item" href={item?.link} target="_blank" id={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}<p style={{fontSize:'10px'}}>{item?.text}</p></h3>
          </a>
        ))}
        {/* <div className="item">
        <img src="https://media.licdn.com/dms/image/D4D22AQFmkFKDifzsWQ/feedshare-shrink_800/0/1689854248800?e=2147483647&v=beta&t=hUl6CoYw9nt-lMgHf_mjjh_BLmApAz0HMD1TurFZfIs" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://media.licdn.com/dms/image/D4D22AQFmkFKDifzsWQ/feedshare-shrink_800/0/1689854248800?e=2147483647&v=beta&t=hUl6CoYw9nt-lMgHf_mjjh_BLmApAz0HMD1TurFZfIs" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://media.licdn.com/dms/image/D4D22AQFmkFKDifzsWQ/feedshare-shrink_800/0/1689854248800?e=2147483647&v=beta&t=hUl6CoYw9nt-lMgHf_mjjh_BLmApAz0HMD1TurFZfIs" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://media.licdn.com/dms/image/D4D22AQFmkFKDifzsWQ/feedshare-shrink_800/0/1689854248800?e=2147483647&v=beta&t=hUl6CoYw9nt-lMgHf_mjjh_BLmApAz0HMD1TurFZfIs" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://media.licdn.com/dms/image/D4D22AQFmkFKDifzsWQ/feedshare-shrink_800/0/1689854248800?e=2147483647&v=beta&t=hUl6CoYw9nt-lMgHf_mjjh_BLmApAz0HMD1TurFZfIs" alt="" />
        <h3>Banking App</h3>
      </div>
      <div className="item">
        <img src="https://media.licdn.com/dms/image/D4D22AQFmkFKDifzsWQ/feedshare-shrink_800/0/1689854248800?e=2147483647&v=beta&t=hUl6CoYw9nt-lMgHf_mjjh_BLmApAz0HMD1TurFZfIs" alt="" />
        <h3>Banking App</h3> */}
        {/* </div> */}
      </div>
    </div>
  );
}
