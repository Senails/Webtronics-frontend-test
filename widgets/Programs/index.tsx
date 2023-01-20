import { Program } from '../../shared/components/Program';
import style from './style.module.scss';

export function Programs(){
    return <div id='Programs' className={style.conteiner}>
        <h2>Programming technologies</h2>
        <p> By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
        <div className={style.cards}>
            <Program image='./angular.png' name='Angular'/>
            <Program image="./react.png" name="React"/>
            <Program image="./vue.png" name="Vue"/>
            <Program image="./js.png" name="JavaScript"/>
        </div>
    </div>
}