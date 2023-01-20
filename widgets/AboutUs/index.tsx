import { Mentor } from '../../shared/components/Mentor';
import style from './style.module.scss';

export function AboutUs(){
    return <div id={"AboutUs"} className={style.conteiner}>
        <h2>About Us</h2>
        <div className={style.content}>
            <div className={style.left}>
                <h4>Mentors</h4>
                <div className={style.image}></div>
                <div className={style.mentors}>
                    <div><Mentor 
                    image='./photos/photo1.jpg'
                    name='Wade Warren'
                    job='Front-end engineers work closely with designers'
                    /></div>
                    <div><Mentor 
                    image='./photos/photo2.jpg'
                    name='Kristin Watson'
                    job='Front-end engineers work closely with designers'
                    /></div>
                    <div><Mentor 
                    image='./photos/photo3.jpg'
                    name='Robert Fox'
                    job='Front-end engineers work closely with designers'
                    /></div>
                </div>
            </div>
            <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
        </div>
        <div className={style.Front}></div>
    </div>
}