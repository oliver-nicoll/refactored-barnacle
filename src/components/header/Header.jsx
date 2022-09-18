import CTA from './CTA';
import './Header.css';

const Header = () => {

  return (
    <Header>
      <div className="container header__container ">
        <h5>Hello I'm</h5>
        <h1> Nicoll Oliver</h1>
        <h5 className="text-light">Fullstack Developer | Designer | Drafter | Dreamer </h5>
        {/* <CTA /> */}
      </div>
    </Header>
  )
}

export default Header;