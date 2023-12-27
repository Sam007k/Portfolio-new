import "./menu.scss";

export default function Menu(props) {
  return (
    <div className={props.menuOpen ? "menu active" : "menu"} id="menu">
      <ul>
        <li onClick={props.hamburgerHandler}>
          <a href="#intro" >Home</a>
        </li>
        <li  onClick={props.hamburgerHandler}>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li onClick={props.hamburgerHandler}>
          <a href="#works">Works</a>
        </li>
        <li onClick={props.hamburgerHandler}>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li onClick={props.hamburgerHandler}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
