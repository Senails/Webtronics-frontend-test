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
        {//svg
            error?
            <svg width="493" height="70" viewBox="0 0 493 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="492" height="69" rx="7.5" fill="#FFA5A5" fill-opacity="0.2"/>
            <rect x="0.5" y="0.5" width="492" height="69" rx="7.5" stroke="#FD4646"/>
            </svg>
            :disabled?
            <svg width="493" height="70" viewBox="0 0 493 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="492" height="69" rx="7.5" fill="white" fill-opacity="0.05"/>
            <rect x="0.5" y="0.5" width="492" height="69" rx="7.5" stroke="#636363"/>
            </svg>
            :
            <svg width="493" height="70" viewBox="0 0 493 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="493" height="70" rx="8" fill="white" fill-opacity="0.05"/>
            <rect x="0.5" y="0.5" width="492" height="69" rx="7.5" stroke="url(#paint0_linear_2043_234)" stroke-opacity="0.7"/>
            <defs>
            <linearGradient id="paint0_linear_2043_234" x1="54.23" y1="6.58924" x2="61.4203" y2="102.392" gradientUnits="userSpaceOnUse">
            <stop stop-color="#15BFFD"/>
            <stop offset="1" stop-color="#9C37FD"/>
            </linearGradient>
            </defs>
            </svg>
        }
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