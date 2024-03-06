import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function useUseForm(schema) {
    const { control, handleSubmit, formState: { errors, isSubmitting }, watch, setValue } = useForm({
        defaultValues: {
            email: '',
            cep: '',
            rua: '',
            bairro: '',
            complemento: '',
            cidade: '',
            estado: '',
            celular: '',
            cpf: '',
            phoneNumber2: '',
            check: false,
        },
        mode: 'all',
        resolver: yupResolver(schema),
    });

    return { control, handleSubmit, errors, isSubmitting, watch, setValue }
}
