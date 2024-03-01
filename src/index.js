import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native';
import { styles } from './styles';
import { Input } from './input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OtherComponent } from './otherComponent';
import { useEffect } from 'react';

const schema = yup.object({
    name: yup.string()
        .required('Campo name obrigatório')
        .transform((value) => {
            return value.trim(); // Remove espaços em branco antes e depois
        })
    ,
    phoneNumber: yup.string()
        .required('Campo Phone number obrigatório')
        .transform((value) => {
            return value.trim(); // Remove espaços em branco antes e depois
        })
    ,
    CPF: yup.string()
        .required('Campo CPF obrigatório')
        .transform((value) => {
            return value.trim(); // Remove espaços em branco antes e depois
        })
    ,
    email: yup.string()
        // No Yup, o método label é usado para fornecer um rótulo personalizado para o campo. Isso pode ser útil para tornar as mensagens de erro mais descritivas e amigáveis, especialmente quando o nome do campo no código não é diretamente amigável para exibição ao usuário.
        .label('Email')
        // uma mensagem também pode ser uma função
        .required(({ label }) => `Campo ${label} obrigatório`)
        .min(6, 'O email deve ter ao menos 6 caracteres')
        // O método matches do Yup permite que você forneça uma expressão regular (regex) como argumento para validar um campo de acordo com o padrão especificado. Ou eu posso usar .email().
        .matches(/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'E-mail inválido')
        .transform((value) => {
            return value.trim(); // Remove espaços em branco antes e depois
        })
    ,
    password: yup.string()
        .required('Campo Password obrigatório')
        .min(6, 'A senha deve ter ao menos 6 caracteres')
        // O método transform no Yup é usado para transformar o valor final do campo antes que ele seja validado. Portanto, se você der espaços em branco como entrada para o campo de senha e aplicar a transformação para remover espaços em branco, o valor final do campo de senha será sem espaços em branco quando for validado.
        .transform((value) => {
            return value.trim(); // Remove espaços em branco antes e depois (entre os caracteres não)
        }),
    // O método oneOf do Yup é utilizado para validar se o valor de um campo é igual a um dos valores permitidos em uma lista. Ele é frequentemente usado para validar campos de confirmação, como senhas ou e-mails, onde o usuário precisa digitar o mesmo valor duas vezes para confirmar.
    passwordConfirm: yup.string()
        .required('Campo Password confirm obrigatório')
        .oneOf([yup.ref('password'), null], 'A senha de confirmação não confere')
        .transform((value) => {
            return value.trim(); // Remove espaços em branco antes e depois
        })
    ,
});

export default function App() {

    // control: O objeto control é fornecido pelo react-hook-form e é utilizado para controlar o formulário. Eu preciso passar ele como parâmetro para o Controller, para "dizer" ao inputs (TextInput), que agora eles serão controlados pelo react-hook-form.
    // handleSubmit: Essa função é fornecida pelo react-hook-form e deve ser chamada quando o formulário é submetido. Ela lida com a lógica de envio do formulário, incluindo a validação dos dados.
    // isSubmitting: essa propriedade indica se o formulário está atualmente em processo de submissão (submitting). Ele é um booleano que será true durante o processo de submissão e false quando a submissão for concluída. obs: mesmo com erro ele é true ao apertar o botão.
    // isSubmitSuccessful: Indica que o formulário foi enviado com êxito sem nenhum erro.
    // submitCount: número de vezes que o formulário foi enviado.
    // isValid: defina como true se o formulário não tiver erros. Mesmo antes que o formulário foi enviado.
    // isLoading: true Se o formulário estiver carregando valores padrão assíncronos. Importante: este acessório só é aplicável a assíncronos defaultValues (quando eu uso async na function no defaultValues) ex:
    // const { 
    // formState: { isLoading } 
    // } = useForm({ 
    // defaultValues: async () => await fetch('/api') 
    // });
    // isValidating: defina como true durante a validação. No React Hook Form, isValidating é true quando a validação está ocorrendo. Isso inclui os momentos em que os ouvintes (listeners) de eventos estão em execução, como durante eventos de mudança (onChange) ou eventos de desfoco (onBlur). Durante a validação, o React Hook Form verifica as regras de validação configuradas para cada campo e, se necessário, executa a validação. Isso pode acontecer quando os usuários interagem com os campos, como digitando ou saindo de um campo.
    // isSubmitted: defina como true depois que o formulário for enviado. Permanecerá true até que o método reset seja chamado. 
    const { control, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful, submitCount, isValid, isValidating, isLoading, isSubmitted }, reset, watch, setValue, getValues, setFocus } = useForm({
        // defaultValues configura o valor inicial de cada campo/input. obs: como se fosse: const nameInitialState = 'Cesar'; const [name, setName] = useState(nameInitialState);
        defaultValues: {
            name: '',
            phoneNumber: '',
            CPF: '',
            email: '',
            password: '',
            passwordConfirm: '',
        },
        // mode: onSubmit: A validação é acionada no evento de submissão do formulário (onSubmit). Os campos attacham listeners de evento onChange para revalidar quando o valor é alterado. onBlur: A validação é acionada no evento de desfocar do campo (onBlur). Os campos não revalidam automaticamente durante a digitação, apenas quando o foco é removido obs: Para usar o mode: 'onBlur' com o React Hook Form, você precisa passar a função onBlur fornecida pelo field do Controller para o evento onBlur do componente de entrada. O Controller do React Hook Form recebe uma propriedade chamada render, que fornece um objeto field contendo as funções essenciais para interagir com o estado do formulário. No seu caso, você está usando field: { value, onChange, onBlur, name, ref, disabled }: Controller
        // ...
        //rules={rules}
        //render={({ field: { value, onChange, onBlur, name, ref, disabled } }) => {
        //<TextInput
        // ...
        // onBlur={onBlur}
        //{...rest}
        ///>. onChange: A validação é acionada no evento de mudança (onChange) para cada campo. Pode resultar em múltiplas re-renderizações, o que pode afetar o desempenho onTouched: A validação é inicialmente acionada no primeiro evento de desfocar do campo. Após o primeiro desfoque, a validação é acionada em cada evento de mudança. all: A validação é acionada tanto no evento de desfocar quanto no evento de mudança. obs: para formulários mais simples, pode usar all (para revalidar a todo momento, inclusive quando começar a escrever, mesmo antes de apertar o botão). Para formulários mais complexos, seria interessante deixar no padrao: onSubmit.
        // criteriaMode: quando definido como firstError (padrão), apenas o primeiro erro de cada campo será coletado. Quando definido como todos, todos os erros de cada campo serão coletados. obs: libere o código no componente 'input' para enteder o criteriaMode: 'all' e modifique aqui em baixo o criteriaMode para 'all'. link para entender melhor também: 'https://codesandbox.io/p/sandbox/react-hook-form-criteriamode-all-p9xm6?file=%2Fsrc%2Findex.js%3A11%2C17'. outra coisa, use 'all' em criteriaMode e observe no console.log(errors) que uma nova propriedade aparece types.
        criteriaMode: 'firstError',
        mode: 'all', // padrão é onSubmit
        resolver: yupResolver(schema)
    });

    console.log(errors);

    // Diferente do watch(), O useWatch reage apenas às mudanças nos campos que você está assistindo, tornando-o eficiente em termos de desempenho, especialmente quando você tem muitos campos em um formulário e só precisa reagir a alterações em campos específicos. O componente renderizará novamente sempre que o valor do campo 'password' mudar.

    // Ao usar o método watch() (sem nenhum argumento: watch(vazio)) eu consigo monitorar/ter acesso, em tempo real, a cada caracter escrito nos campos que estão sendo controlados pelo react hook form ou, em um especifico: watch('name') ou mais de um watch(['name', 'email']). observação1: se for somente um campo assistido, da para configurar o valor inicial do campo assim watch('name', 1).
    // observação2: ao usar 'objeto de valores iniciais': Quando você utiliza o watch com um objeto de valores iniciais, esses valores iniciais são utilizados apenas quando os campos ainda não foram preenchidos. Uma vez que você começa a interagir com os campos e preencher dados, a função watch reflete os valores atuais dos campos, ou seja, os valores iniciais (undefined se não foram setados em defaultValues). E os valores iniciais fornecidos em watch não têm mais efeito.
    // const nameValue = watch(['name', 'email'], {
    //     email: 'coco',
    // });
    // console.log(nameValue);
    // Essa forma usando ouvinte não renderiza o componente
    // useEffect(() => {
    //     const subscriber = watch((data) => {
    //         if (data.email === 'cesar@gmail.com') {
    //             console.log('É igual!');
    //         }
    //         console.log(data.email);
    //     })

    //     return () => {
    //         subscriber.unsubscribe();
    //     }
    // }, []);

    async function handleCreateUser(data) {
        console.log(data);

        // para ver o efeito do isSubmitting
        // const myPromise = await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve();
        //     }, 6000);
        // });
        // obs: getValues não mostra o valor final que foi transformado pelo transform em password, por exemplo. Mostra somente o valor que foi digitado no campo.
        // const password = getValues('password');
        // console.log(password);
        // getValues retorna o valor de um campo: getValues('name'),  ou mais: getValues(['name', 'password']).
        //const [name, password] = getValues(['name', 'password']);
        //console.log(name, password);
        // Com setValue eu consigo escolher o campo que eu quero setar o valor e o valor logo em seguida.
        //setValue('name', 'Lucas');

        // reset() reseta o valor de todos os campos para o valor inicial configurado em defaultValues. obs: se o valor inicial não foi configurado em defaultValues, todos os campos serão apagados, ou seja, voltarão para nada.
        reset()
        // reset({name: 'Ana'}). Nesse caso, todos os campos serão resetados para o valor inicial configurado em defaultValues menos o campo name, que terá um novo valor inicial: 'Ana'.
        // reset({
        //     name: 'dsdsd'
        // });
    }

    // setFocus foca no campo escolhido em ('name') do setFocus. Lembrando que no react native (aparentemente), precisa colocar o ref do field no TextInput para que a lib possa ter acesso a refência do campo para usar métodos como focus: 
    // <Controller
    // ...
    // render={({ field: { value, onChange, onBlur, name, ref, disabled } }) => {
    // return (
    // <TextInput
    // ref={ref}...
    // useEffect(() => {
    //     setFocus('name');
    // }, [setFocus])

    return (
        <SafeAreaView>
            <StatusBar style='auto' hidden />
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <KeyboardAvoidingView
                    behavior='position'
                    keyboardVerticalOffset={-100}
                    enabled
                >
                    <View
                        style={styles.container}
                    >
                        <View style={styles.inputsContainer}>
                            {/* Como usar o useWatch para assistir/monitorar em tempo real o valor de um campo, ex 'password', e renderizar somente o componente que o useWatch estiver. Que é o contrário do watch(): se estiver assim dentro do component 'OtherComponent': <OtherComponent control={control} />... export function OtherComponent({ watch }) { const nameValue = watch('password'); console.log(nameValue), tanto o component pai/raiz quanto o filho vão ser renderizados. Com useWatch no component filho somente o filho é renderizado */}
                            {/* <OtherComponent control={control} /> */}
                            <Text
                                style={styles.title}
                            >
                                Crie sua conta
                            </Text>
                            <Input
                                placeholder='Your name here...'
                                autoCapitalize='none'
                                name={'name'}
                                control={control}
                                error={errors?.name}
                            />
                            <Input
                                placeholder='Your phone number here...'
                                autoCapitalize='none'
                                name={'phoneNumber'}
                                control={control}
                                error={errors?.phoneNumber}
                            />
                            <Input
                                placeholder='Your CPF number here...'
                                autoCapitalize='none'
                                name={'CPF'}
                                control={control}
                                error={errors?.CPF}
                            />
                            <Input
                                placeholder='Your email here...'
                                autoCapitalize='none'
                                name={'email'}
                                // Exemplo de validação feita com o react-hook-form e não com o yup.
                                //rules={{
                                //required: 'Campo Email obrigatório',
                                // Se não seguir esse padrão de validação de email, usando o regex (pego na internet), gera um erro para esse campo de email e mostra a mensagem...
                                //pattern: {
                                //value: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                //message: 'E-mail inválido'
                                //}

                                //}}
                                control={control}
                                error={errors?.email}
                                keyboardType='email-address'
                            />
                            <Input
                                placeholder='Your password here...'
                                autoCapitalize='none'
                                name={'password'}
                                control={control}
                                error={errors?.password}
                                secureTextEntry
                            />
                            <Input
                                placeholder='Your password Confirm here...'
                                autoCapitalize='none'
                                name={'passwordConfirm'}
                                control={control}
                                error={errors?.passwordConfirm}
                                secureTextEntry
                            />
                        </View>
                        <View
                            style={styles.buttonContainer}
                        >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    // a ordem aqui parece que faz diferença
                                    setFocus('name')
                                    reset()
                                }}
                            >
                                <Text
                                    style={styles.buttonText}
                                >
                                    limpar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={isSubmitting}
                                style={styles.button}
                                onPress={handleSubmit(handleCreateUser)}
                            >
                                <Text
                                    style={styles.buttonText}
                                >
                                    {isSubmitting ? 'salvando' : 'salvar'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

