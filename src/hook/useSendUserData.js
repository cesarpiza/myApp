import { Alert } from "react-native";

export async function useSendUserData(data) {
    // O método setError no React Hook Form permite definir manualmente um ou mais erros para um campo de entrada específico. No entanto, não bloqueará o envio do formulário automaticamente. Quando você usa setError, ele define o erro para o campo de entrada especificado, mas não impede que o formulário seja enviado. O envio do formulário normalmente é controlado pela função handleSubmit, onde você pode executar uma lógica de validação adicional e decidir se deseja prosseguir com o envio. obs: da para bloquear o envio com submit porém de outro forma, assista ao vídeo: https://react-hook-form.com/docs/useform/seterror
    // ex de lógica:
    // if (isCepError) {
    //     setTimeout(() => {
    //         setError('cep', {
    //             type: 'custom',
    //             message: 'Cep inválido',
    //         }, {
    //             shouldFocus: true,
    //         });
    //     }, 250);

    //     return;
    // }

    // Delay personalizado...
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });

    Alert.alert('', 'Dados enviados com sucesso');

    console.log(data);
}