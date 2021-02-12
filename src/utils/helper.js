import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';

export const autoCurency = (number) => {
    if (parseInt(number)) {
        const formated = new Intl.NumberFormat('id-ID', {}).format(parseInt(number))
        return `Rp${formated}`
    }
    return `Rp0`
}

export const capitalizeBankName = (string) => {
    if (string.length <= 4) {
        return string.toUpperCase()
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const dateFormat = (v) => {
    const date = new Date(v);
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return Intl.DateTimeFormat('id-ID', options).format(date)
}

export const filterAscending = (data, key) => {
    const filtered = data.sort((a, b) => (
        a[key.value] > b[key.value] ? 1 : b[key.value] > a[key.value] ? -1 : 0
    ))
    return filtered
}

export const filterDescending = (data, key) => {
    const filtered = data.sort((a, b) => (
        b[key.value] > a[key.value] ? 1 : a[key.value] > b[key.value] ? -1 : 0
    ))
    return filtered
}

export function copyToClipboard(v) {
    Clipboard.setString(v);
    Toast.show(v + ' berhasil di salin');
}