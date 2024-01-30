import randomWords from './randomWords.js'
function usePersianLorem(wordNum = 100) {
    let outputArray = [];
    while (outputArray.length < wordNum) {
        outputArray = [...outputArray, ...randomWords]
    }
    for (let i = outputArray.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [outputArray[i], outputArray[random]] = [outputArray[random], outputArray[i]]
    }
    const result = outputArray.slice(0, wordNum).join(' ')

    return result
}

export {usePersianLorem}
