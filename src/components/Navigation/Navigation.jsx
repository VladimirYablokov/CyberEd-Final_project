import ButtonNavPages from '../UI/ButtonNavPages/ButtonNavPages'
import ButtonOrder from '../UI/ButtonOrder/ButtonOrder'
import s from './Navigation.module.sass'
import logo from '../media/nav_logo.png'

export default function Navigation() {

  return (
    <nav className={s.nav}>
        <div className={s.btnBar}>
            <img src={logo} className={s.imgLogo} alt="logo" />
            <p className={s.text}>Pages</p>
            <ButtonNavPages/>
        </div>
        <a href="/#" className={s.link}>Home</a>
        <a href="/#" className={s.link}>About</a>
        <a href="/#" className={s.link}>Pages</a>
        <a href="/#" className={s.link}>Contact Us</a>
        <ButtonOrder/>
    </nav>
  )
}
