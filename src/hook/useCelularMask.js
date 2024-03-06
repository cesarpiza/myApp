export function useCelularMask(celular) {
    // Remove todas as letras e aceita apenas números
    const phoneNumber = celular.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')

    return phoneNumber;
}