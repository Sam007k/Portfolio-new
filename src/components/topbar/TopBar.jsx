import "./topBar.scss";
import {Person, Mail} from '@material-ui/icons'

export default function TopBar(props) {
 
  return <div className={props.menuOpen ? `topbar active` : 'topbar'}  id='topbar'>
    <div className='wrapper'>
      <div className='left'>
        <a href='#intro' className='logo'>S.</a>
        {/* <div className='itemContainer'>
          <Person className='icon'/>
          <span>+44 924 92 22</span>
        </div> */}
        <div className='itemContainer'>
          <Mail className='icon'/>
          <span>msameer007k@gmail.com</span>
        </div>
      </div>
      <div className='right'>
        <div className='hamburger' onClick={()=>props.hamburgerHandler()}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>

    </div>
  </div>;
}
