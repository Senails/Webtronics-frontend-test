import { Logo } from '../../shared/components/Logo';
import { scrollPageTo } from '../../shared/utils/scrollTo';
import style from './style.module.scss';

export function Footer(){
    return <div className={style.conteiner}>
        <div className={style.content}>
            <div className={style.leftSection}>
                <Logo></Logo>
                <p>
                    Wisconsin Ave, Suite 700<br />
                    Chevy Chase, Maryland 20815
                </p>
            </div>
            <div className={style.CenterSection}>
                <h4>Company</h4>
                <div className={style.linksBox}>
                    <div className={style.left}>
                        <a href="##" onClick={()=>scrollPageTo('AboutUs')}>About Us</a>
                        <a href="##" onClick={()=>scrollPageTo('Steps')}>Steps</a>
                        <a href="##" onClick={()=>scrollPageTo('Questions')}>FAQs</a>
                    </div>
                    <div className={style.right}>
                        <a href="##" onClick={()=>scrollPageTo('Revie')}>Review</a>
                        <a href="##" onClick={()=>scrollPageTo('Gallery')}>Gallery</a>
                    </div>
                </div>
            </div>
            <div className={style.RightSection}>
                <h4>Social media</h4>
                <div className={style.icons}>
                    <a href="##"><img src="./social/social.svg" alt="facebook" /></a>
                    <a href="##"><img src="./social/social-1.svg" alt="undefined" /></a>
                    <a href="##"><img src="./social/social-2.svg" alt="twitter" /></a>
                    <a href="##"><img src="./social/social-3.svg" alt="linkedin" /></a>
                </div>
            </div>
        </div>
    </div>
}