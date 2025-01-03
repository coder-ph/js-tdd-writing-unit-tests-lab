// Your tests here
import {isPalindrome} from '../utils'

describe('isPalindrome', ()=> {
    test('isPalindrome returns true if palindrome else false', ()=>{
        const word = 'racecar'
        expect(isPalindrome(word)).toBe(true)
    })
})