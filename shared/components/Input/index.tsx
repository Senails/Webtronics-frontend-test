import style from './style.module.scss';

type props = {
    value:string,
    onChange:(value:string)=>void,
    error?:string,
    placholder:string,
    disabled:boolean,
}
  

export function Input({placholder,error,disabled,value,onChange}:props){
    return <div className={style.conteiner+` ${error&&style.error}`}>
        <div className={[
            style.inputbox,
            error?style.error:"",
            disabled?style.disabled:"",
            ].join(' ')}>
            <input className={style.input} 
            value={value}
            onChange={(event)=>onChange(event.target.value)}
            disabled={disabled}
            type="text" placeholder={placholder}/>
        </div>
        {error&&<p className={style.errortext}>{error}</p>}
    </div>
}