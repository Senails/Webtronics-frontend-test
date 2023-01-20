import { FAQpost } from '../../shared/components/FAQpost';
import style from './style.module.scss';

export function Questions(){
    return <div id='Questions' className={style.conteiner}>
        <h2>Frequently Asked Questions</h2>
        <div className={style.conteinerBottom}>
            <div className={style.conteinerBottomLeft}>
                <p>
                    Do you have any kind of questions?<br />
                    We are here to help.
                </p>
                <div className={style.img}></div>
            </div>
            <div className={style.conteinerBottomRight}>
                <div className={style.boxMarging}>
                    <FAQpost 
                    title='What is the price?'
                    text='Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.' 
                    openOnStart={true}/>
                </div>
                <div className={style.boxMarging}>
                    <FAQpost 
                    title='What is the price?'
                    text='Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.' 
                    openOnStart={false}/>
                </div>
                <div className={style.boxMarging}>
                    <FAQpost 
                    title='What is the price?'
                    text='Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.' 
                    openOnStart={false}/>
                </div>
                <div className={style.boxMarging}>
                    <FAQpost 
                    title='What is the price?'
                    text='Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.' 
                    openOnStart={false}/>
                </div>
                <div className={style.boxMarging}>
                    <FAQpost 
                    title='What is the price?'
                    text='Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.' 
                    openOnStart={false}/>
                </div>
            </div>
        </div>
    </div>
}