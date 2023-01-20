import axios from "axios";

export type ContactFormData = {
    email: string,
    name: string,
    phone: string
}

export async function sendFormData(data:{
    email: string,
    name: string,
    phone: string
}):Promise<"ok"|"error">
{
    try{
        let res = await axios.post('http://localhost:3004/feedback',data,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        }
        })

        return "ok"
    }catch{
        return "error"
    }
}