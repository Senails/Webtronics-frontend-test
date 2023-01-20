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
            {<svg width="475" height="191" viewBox="0 0 475 191" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="475" height="191" rx="8" fill="white" fill-opacity="0.05"/>
            <rect x="0.5" y="0.5" width="474" height="190" rx="7.5" stroke="url(#paint0_linear_2046_306)" stroke-opacity="0.7"/>
            <defs>
            <linearGradient id="paint0_linear_2046_306" x1="52.25" y1="17.9792" x2="105.709" y2="269.493" gradientUnits="userSpaceOnUse">
            <stop stop-color="#15BFFD"/>
            <stop offset="1" stop-color="#9C37FD"/>
            </linearGradient>
            </defs>
            </svg>}
            <div className={style.background}>
                <p className={style.miniTitile}>{miniTitile}</p>
                <h3 className={style.title}>{title}</h3>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    </div>
}