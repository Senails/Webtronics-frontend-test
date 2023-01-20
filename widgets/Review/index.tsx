import React from 'react';
import { useState } from 'react';
import { Photo } from '../../shared/components/PhotoReview';
import { Arrow } from '../../shared/components/ArrowButton';
import style from './style.module.scss';

const arrayInfo = [
    {
        num:1,
        image:'./previePhotos/man1.jpg',
        title:'Best courses ever',
        text:'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.'
    },
    {
        num:2,
        image:'./previePhotos/woman.jpg',
        title:'Amazing teaching',
        text:"The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    },
    {
        num:3,
        image:'./previePhotos/man2.jpg',
        title:'Simple and easy',
        text:'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.'
    },
]

const usebleInfo = 
[...arrayInfo,...arrayInfo,].map((elem,index)=>{
    return {...elem,id: index};
});

let copy = [...usebleInfo];
let elem = copy.shift()
copy = [...copy,elem!];


export function Revie(){
    let [info,setinfo] = useState(copy);

    function onNextClick(){
        let copy = [...info];
        let elem = copy.shift()
        copy = [...copy,elem!];
        setinfo(copy)
    }
    function onPrevClick(){
        let copy = [...info];
        let elem = copy.pop();
        copy = [elem!,...copy];
        setinfo(copy)
    }
    let photos = info.map((obj,index)=>{
        if (index===0) return <React.Fragment key={obj.id}></React.Fragment>;
        return <Photo 
        key={obj.id}
        hide={!(index>1 && index<5)}
        src={obj.image}
        transition={true}
        size={index===2?"large":"small"}/>
    })

    let texts = info.map((obj,index)=>{
        if (index>3) return <React.Fragment key={obj.id}></React.Fragment>;
        
        return <div key={obj.id} 
            className={style.text}>
            <div>
                <h3>{obj.title}</h3>
                <p>{obj.text}</p>
            </div>
        </div>
    })

    return <div id='Revie' className={style.conteiner}>
        <h2>Review</h2>
        <div className={style.content}>
            <div className={style.left}>
                <div className={style.texts}>
                    {texts}
                </div>
            </div>
            <div className={style.right}>
                <div className={style.topLine}>
                    <span>
                        {`${info[2].num}`}/
                        <span>{arrayInfo.length}</span>
                    </span>
                    <div>
                        <Arrow direction="left" onClick={onPrevClick}/>
                        <Arrow direction="right" onClick={onNextClick}/>
                    </div>
                </div>
                <div className={style.Cards}>
                    <div className={style.CardsConteiner}>
                        {photos}
                    </div>
                </div>
            </div>
        </div>
    </div> 
}