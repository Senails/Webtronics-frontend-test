import style from './style.module.scss'

type props = {
    size:"large"|"small",
    src:string,
    transition:boolean,
    hide:boolean,
}


export function Photo({size,src,transition,hide}:props){
    return <div className={style.conteiner
    +` ${transition?style.transition:''}`
    +` ${size==="small"?style.small:''}`
    +` ${hide?style.hide:''}`}>
        <div className={style.card}>
            <div className={style.photo} style={{backgroundImage:`url(${src})`}}>
            </div>
        </div>
    </div>
}