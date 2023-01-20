import style from './style.module.scss';

type props = {
  image:string,
  name:string,
}

export function Program({image,name}:props){
    return <div className={style.conteiner}>
        <div className={style.fon}>
            <div className={style.image} style={{backgroundImage:`url(${image})`}}></div>
            <p className={style.name}>{name}</p>
        </div>
    </div>
}