import style from './style.module.scss';

export function Gallery(){
    return <div id='Gallery' className={style.conteiner}>
        <h2>Gallery</h2>
        <div className={style.content}>
            <div className={style.left}>
                <p>
                    By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.
                </p>
                <div className={style.image}></div>
            </div>
            <div className={style.right}>
                <div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div> 
                </div>
                <p style={{width:"868px"}}>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</p>
            </div>
        </div>
    </div>
}