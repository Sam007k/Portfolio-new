import "./portfolioList.scss";

export default function PortfolioList({title,id,setSelected,active}) {
  return <div className= {active ? "portfolioList active" : 'portfolioList' } onClick={()=> setSelected(id)} id='portfolioList'>
    {title}
  </div>;
}
