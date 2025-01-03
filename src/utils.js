// Your code here
export function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '')
    const newWord = cleanedWord.split('').reverse().join('')
    return cleanedWord ===newWord
}

console.log(isPalindrome('racecar'))