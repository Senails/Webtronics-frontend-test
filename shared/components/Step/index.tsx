import style from './style.module.scss';

type props = {
    text:string,
    title:string,
    miniTitile:string,
    direction:"left"|"right"
}

export function Step({direction,text,title,miniTitile}:props){
    return <div className={style.conteiner
        +` ${direction==="right"&&style.right}`}>
        <div className={style.gradientBorder
        +` ${direction==="right"&&style.right}`}></div>
        <div className={style.textBox}>
            <div className={style.background}>
                <p className={style.miniTitile}>{miniTitile}</p>
                <h3 className={style.title}>{title}</h3>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    </div>
}