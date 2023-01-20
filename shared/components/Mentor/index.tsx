import style from './style.module.scss';

type props = {
    image:string,
    name:string,
    job:string,
}

export function Mentor({image,name,job}:props){
    return <div className={style.conteiner}>
        <div className={style.photoCirlce}>
            <div className={style.image} style={{backgroundImage:`URL(${image})`}}></div>
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
    </div>
}