export function sleep(ms:number){
    return new Promise((res)=>{
        setTimeout(()=>{
            res('sleep');
        },ms);
    })
}