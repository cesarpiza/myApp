import axios from "axios";

export async function useGetCepDetails(cep, setValue, setIsCepLoading, setIsCepError) {
    try {
        if (cep.length === 9) {
            setIsCepLoading(true);
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            if (!data?.erro) {
                // Para setar o valor e validar ao mesmo tempo, use shouldValidate: true. ex: 
                // setValue('logradouro', data.rua, {
                //     shouldValidate: true,
                // }). obs: por padrão, ao usar setValue, o valor do campo é preenchido/alterado porém não há validação;
                setValue('rua', data.logradouro, {
                    shouldValidate: true,
                });
                setValue('bairro', data.bairro, {
                    shouldValidate: true,
                });
                setValue('complemento', data.complemento, {
                    shouldValidate: true,
                });
                setValue('cidade', data.localidade, {
                    shouldValidate: true,
                });
                setValue('estado', data.uf, {
                    shouldValidate: true,
                });
                setIsCepError(false);
            } else {
                setIsCepError(true);
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        setIsCepLoading(false);
    }
}