import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';

type props = {
    text:string,
    title:string,
    openOnStart:boolean
}


export function FAQpost({text,title,openOnStart}:props){
    const [close,setclose] = useState(false);
    const [height,setheight] = useState('auto');
    const [first,setfirst] = useState(!openOnStart);
    let paragraph = useRef<HTMLParagraphElement>(null);

    useEffect(()=>{
        setheight(paragraph.current!.clientHeight-26+'px');
        if (openOnStart){
            setfirst(false);
        }else{
            setclose(true);
            setTimeout(()=>{
            setfirst(false);
            },100)
        }
    },[])


    function onclose(){
        if (close) {
            setclose(!close)
        }else{
            setclose(!close)
        }
    }

    return <div className={style.conteiner}>
        <div className={style.fon} style={first?{height:"60px"}:{}}>
            <h4 className={style.title}>{title}</h4>
            <p ref={paragraph}
            style={{height:height}}
            className={style.text
            +` ${close&&style.close}`
            +` ${!first&&style.transition}`}>{text}</p>
            <div className={style.icon
            +` ${close&&style.close}`
            +` ${!first&&style.transition}`} onClick={onclose}>
            </div>
        </div>
    </div>
}