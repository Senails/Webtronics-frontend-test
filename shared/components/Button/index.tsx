import style from './style.module.scss';

type props = {
  size:'large'|'small',
  disabled?:boolean,
  label:string,
  onClick?:()=>void,
}

export function Button({size="large",disabled=false,label,onClick}:props){
  return <div 
  onClick={onClick}
  className={style.button
  +` ${size==="small"&&style.small}`
  +` ${disabled&&style.disabled}`}>
    {label}
  </div>
}