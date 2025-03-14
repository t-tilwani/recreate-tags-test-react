

export const usePounds = (number) => {
    return Number(number).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })
}

