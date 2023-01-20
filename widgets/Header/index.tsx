import { Logo } from '../../shared/components/Logo';
import { scrollPageTo } from '../../shared/utils/scrollTo';
import style from './style.module.scss';

export function Header(){
    return <div className={style.conteiner}>
        <Logo></Logo>
        <nav className={style.navbar}>
            <a href="##" onClick={()=>scrollPageTo('AboutUs')}>About Us</a>
            <a href="##" onClick={()=>scrollPageTo('Steps')}>Steps</a>
            <a href="##" onClick={()=>scrollPageTo('Questions')}>FAQs</a>
            <a href="##" onClick={()=>scrollPageTo('Revie')}>Review</a>
            <a href="##" onClick={()=>scrollPageTo('Gallery')}>Gallery</a>
        </nav>
    </div>
}