export function useCepMask(cep) {
    // Remove todas as letras e aceita apenas números
    const numericValue = cep.replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')

    return numericValue;
}