import { Button } from '../../shared/components/Button';
import { scrollPageTo } from '../../shared/utils/scrollTo';
import style from './style.module.scss';

export function MainBlock(){
    return <div id='MainBlock' className={style.conteiner}>
        <div className={style.line1}>
            <h1>Front-End </h1>
            <p>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).</p>
        </div>
        <div className={style.line2}>
            <Button onClick={()=>scrollPageTo('Contact')} size="small" label='Start my career change'></Button>
            <h1>Developer</h1>
        </div>
        <h4>Courses</h4>
    </div>
}