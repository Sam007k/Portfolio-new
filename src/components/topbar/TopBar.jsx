import "./topBar.scss";
import {Person, Mail} from '@material-ui/icons'

export default function TopBar() {
  return <div className="topbar" id='topbar'>
    <div className='wrapper'>
      <div className='left'>
        <a href='#intro' className='logo'>genius.</a>
        <div className='itemContainer'>
          <Person className='icon'/>
          <span>+44 924 92 22</span>
        </div>
        <div className='itemContainer'>
          <Mail className='icon'/>
          <span>safak@genius.com</span>
        </div>
      </div>
      <div className='right'>
        <div className='hamburger'>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>

    </div>
  </div>;
}
