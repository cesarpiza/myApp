import * as yup from 'yup';

export const schema = yup.object({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    cep: yup.string().min(9, 'Cep inválido'),
    rua: yup.string().min(1, 'Deve conter no mínimo 1 caractere')
        .trim(),
    bairro: yup.string().min(1, 'Deve conter no mínimo 1 caractere')
        .trim(),
    complemento: yup.string().trim(),
    cidade: yup.string().min(1, 'Deve conter no mínimo 1 caractere')
        .trim(),
    estado: yup.string().min(1, 'Deve conter no mínimo 1 caractere')
        .trim(),
    celular: yup.string().min(11, 'Telefone inválido')
        .transform((data) => {
            const phoneNumberWithoutMask = data.replace(/\D/g, ''); // Remove todos os não dígitos
            const reversedPhoneNumber = phoneNumberWithoutMask.replace(/^(\d{2})?(\d{5})(\d{4})$/, '$1$2$3');
            return reversedPhoneNumber;
        }),
    cpf: yup.string().min(11, 'CPF inválido')
        .transform((data) => {
            const stringWithoutDots = data.replace(/[.-]/g, '');

            return stringWithoutDots;
        }),
    phoneNumber2: yup.string().min(11, 'Telefone2 inválido')
        .transform((data) => {
            const phoneNumberWithoutMask = data.replace(/\D/g, ''); // Remove todos os não dígitos
            const reversedPhoneNumber = phoneNumberWithoutMask.replace(/^(\d{2})?(\d{5})(\d{4})$/, '$1$2$3');
            return reversedPhoneNumber;
        }),
    check: yup.bool().oneOf([true, null], 'Aceitar os termos é obrigatório!'),
});