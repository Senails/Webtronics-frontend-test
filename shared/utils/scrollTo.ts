import { sleep } from "./sleep";

export async function scrollPageTo(blockId:string){
    let block = document.getElementById(blockId);
    if (!block) return;
    
    let BlockTop = block.getBoundingClientRect().top
    let needStep = (BlockTop)/60;

    window.addEventListener("wheel",blockScroll);

    for(let i=0;i<60;i++){
        await sleep(5);
        requestAnimationFrame(()=>{
            window.scrollBy({
                top:needStep
            })
        })
    }

    window.removeEventListener("wheel",blockScroll);
}

function blockScroll(event:WheelEvent|Event){
    event.preventDefault();
    return false;
}