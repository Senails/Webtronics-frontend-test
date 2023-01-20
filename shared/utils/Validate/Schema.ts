import * as yup from "yup";

export const feedbackFormSchema = yup.object({
    name: yup.string().required().min(4).max(20),
    phone: yup.string().required().min(10).max(20).matches(/^[0-9+-\[\]()]+$/,"Incorrect phone"),
    email: yup.string().required().email('Incorrect email'),
}).required();