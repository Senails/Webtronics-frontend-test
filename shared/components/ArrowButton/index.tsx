import style from './style.module.scss';

type props = {
    onClick:()=>void,
    direction:"left"|"right",
}

export function Arrow({onClick,direction}:props){
    return <div className={style.conteiner} onClick={onClick}>
        <div className={style.fon}>
            <div className={style.arrowImage
            +` ${direction==="left"&&style.left}`}></div>
        </div>
    </div>
}