import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../shared/components/Button';
import { Input } from '../../shared/components/Input';
import style from './style.module.scss';
import { feedbackFormSchema } from "../../shared/utils/Validate/Schema";
import { ContactFormData, sendFormData } from "../../shared/api/sendFormData";
import { useRef, useState } from "react";


export function Contact(){
    const form = useForm({resolver: yupResolver(feedbackFormSchema)});
    const [status, setstatus] = useState<"wait"|"success"|"error"|"loading">("wait");

    async function clickButton(){
        setstatus("loading");
        let triggerres = await form.trigger();
        if (!triggerres) return setstatus("wait");

        let formData = form.getValues() as ContactFormData;
        let result = await sendFormData(formData);
        if (result==="ok"){
            setstatus("success");
        }else{
            setstatus("error");
        }
    }

    return <div id={"Contact"} className={style.conteiner}>
        <form> 
            <h2>{status==="wait"?"Contact  us":
            status==="loading"?"Loading...":
            status==="success"?"Отправлено":"Повторите попытку"
            }</h2>
            <p>Do you have any kind of help please contact with us.</p>
            <div style={status==="success"?{display:"none"}:{}}>
                <div style={{marginBottom: "8px"}}>
                    <Controller
                        control={form.control}
                        name='name'
                        render={({field,fieldState})=><Input 
                        placholder='Name' 

                        error={fieldState.error?.message} 
                        disabled={status==="loading"} 
                        value={field.value}
                        onChange={field.onChange}
                        />}
                    ></Controller>
                    <Controller
                        control={form.control}
                        name='phone'
                        render={({field,fieldState})=><Input 
                        placholder='Phone' 

                        error={fieldState.error?.message} 
                        disabled={status==="loading"} 
                        value={field.value}
                        onChange={field.onChange}
                        />}
                    ></Controller>
                    <Controller
                        control={form.control}
                        name='email'
                        render={({field,fieldState})=><Input 
                        placholder='E-mail' 
                        
                        error={fieldState.error?.message} 
                        disabled={status==="loading"} 
                        value={field.value}
                        onChange={field.onChange}
                        />}
                    ></Controller>
                </div>  
                <Button onClick={clickButton} size="large" label='Send'/>
            </div>
        </form>
    </div>
}