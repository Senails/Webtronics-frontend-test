import { Step } from '../../shared/components/Step';
import style from './style.module.scss';

export function Steps(){
    return <div id='Steps' className={style.conteiner}>
        <h2>Steps</h2>
        <div className={style.cardBox}>
            <div className={style.leftSection}>
                <div className={style.margingBox}>
                    <Step direction="right"
                    text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
                    title='Introduction to Front-End'
                    miniTitile='Step 1'/>
                </div>
                <div className={style.margingBox}>
                    <Step direction="right"
                    text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
                    title='Introduction to Front-End'
                    miniTitile='Step 3'/>
                </div>
                <div className={style.margingBox}>
                    <Step direction="right"
                    text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
                    title='Introduction to Front-End'
                    miniTitile='Step 5'/>
                </div>
            </div>
            <div className={style.centerSection}>
                <div className={style.centerImage}></div>
            </div>
            <div className={style.rightSection}>
                <div className={style.margingBox}>
                    <Step direction="left"
                    text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
                    title='Overview of Development'
                    miniTitile='Step 2'/>
                </div>
                <div className={style.margingBox}>
                    <Step direction="left"
                    text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
                    title='Overview of Development'
                    miniTitile='Step 4'/>
                </div>
                <div className={style.margingBox}>
                    <Step direction="left"
                    text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
                    title='Overview of Development'
                    miniTitile='Step 6'/>
                </div>
            </div>
        </div>
    </div>
}