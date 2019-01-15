/**
 * @param {string} s
 * @return {string}
 * Solution 1
 * Runtime: 13176 ms, faster than 0.87% of JavaScript online submissions for Longest Palindromic Substring.
 */
// var longestPalindrome = function(s) {
//     if(s === "") { return ""; }
//     if(s.length === 1) { return s };
//     return traverseSubSet(s, s.length);

// };

// var isStringPalindrome = function(s) {

//     const halfLength = s.length / 2;
//     const stack = [];
//     let flag = true;
//     for(let i = 0; i < Math.floor(halfLength); i++) {
//         stack.push(s[i]);
//     }
//     for(let i = Math.ceil(halfLength); i < s.length; i ++) {
//         const char = stack.pop();
//         flag = flag && (char === s[i]);
//     }
//     return flag;
// }

// var traverseSubSet = function(s, length) {
//     if(length === 0){
//         return '';
//     } else {
//         let start = 0;
//         while(start + length <= s.length) {
//             const end = start + length;
//             if(isStringPalindrome(s.slice(start, end))) {
//                 console.log(s.slice(start,end));
//                 return s.slice(start,end);
//             }
//             start ++ ;
//         }
//         return traverseSubSet(s, length - 1);
//     }
// }

/**
 * @param {string} s
 * @return {string}
 * Runtime: 124 ms, faster than 63.01% of JavaScript online submissions for Longest Palindromic Substring.
 * This solution is very close to the official solution approach 4, but it can be optimized to have better performance
 */
// var longestPalindrome = function(s) {
//     if(s.length === 0){
//         return '';
//     }
//     if(s.length === 1) {
//         return s;
//     }
//     if(s.length === 2) {
//         if(s[0] === s[1]) {
//             return s;
//         } else {
//             return s[0];
//         }
//     }
//     // if it is the string which length equals to three
//     // find out all palindrome
//     let lastChar = s[1];
//     let oneBeforeLast = s[0];
//     let oddPalindrome = [];
//     let evenPalindrome = [];
//     let longestPalindromeLength = 0;
//     let longestPalindrome = '';
//     if(oneBeforeLast === lastChar) {
//         longestPalindrome = s.slice(0, 2);
//     } else {
//         longestPalindrome = oneBeforeLast;
//     }
//     for(let i = 2; i < s.length; i++) {
//         if(s[i] === lastChar) {
//             evenPalindrome.push(i);
//         }
//         if(s[i] === oneBeforeLast){
//             oddPalindrome.push(i);
//         }
//         lastChar = s[i];
//         oneBeforeLast = s[i-1];
//     }

//     for(let i = 0; i < oddPalindrome.length; i++) {
//         let currentIndex = oddPalindrome[i];

//         let head = currentIndex - 2;
//         let tail = currentIndex;
//         while(head >= 0 && tail < s.length && s[head] === s[tail]) {
//             head --;
//             tail ++;
//         }
//         const length = tail - head;
//         if(length > longestPalindromeLength) {
//             longestPalindromeLength = length;
//             longestPalindrome = s.slice(head + 1, tail);
//             // console.log(tail, s[tail -1 ], head, s[head+1], longestPalindromeLength, longestPalindrome);
//         }
//     }


//     for(let i = 0; i < evenPalindrome.length; i++) {
//         let currentIndex = evenPalindrome[i];

//         let head = currentIndex - 1;
//         let tail = currentIndex;
//         while(head >= 0 && tail < s.length && s[head] === s[tail]) {
//             head --;
//             tail ++;
//         }
//         const length = tail - head;
//         if(length > longestPalindromeLength) {
//             longestPalindromeLength = length;
//             longestPalindrome = s.slice(head + 1, tail);
//             // console.log(tail, s[tail], head, s[head], longestPalindromeLength, longestPalindrome);
//         }
//     }
//     return longestPalindrome;
// };

/**
 * @param {string} s
 * @return {string}
 * This is the optimized version of expand from center solution above
 * Runtime: 96 ms, faster than 97.69% of JavaScript online submissions for Longest Palindromic Substring.
 */
var longestPalindrome = function(s) {
    if(s == undefined || s.length < 2) {
        return s;
    }
    let start = 0;
    let end = 0;
    for(let i = 0; i < s.length; i++) {
        const evenLen = expandFromCenter(s, i, i);
        const oldLen = expandFromCenter(s, i, i + 1);
        const longer = Math.max(evenLen, oldLen);
        if(longer > end - start) {
            start = Math.ceil(i - (longer - 1 ) / 2);
            end = i + longer / 2;
        }
    }
    return s.slice(start, end + 1);
};

var expandFromCenter = function(s, left, right) {
    while (right < s.length && left >= 0 && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left -1;
}

// console.log(longestPalindrome('eabcbad'));
// console.log(longestPalindrome('ccc'));
console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome("esbtzjaaijqkgmtaajpsdfiqtvxsgfvijpxrvxgfumsuprzlyvhclgkhccmcnquukivlpnjlfteljvykbddtrpmxzcrdqinsnlsteonhcegtkoszzonkwjevlasgjlcquzuhdmmkhfniozhuphcfkeobturbuoefhmtgcvhlsezvkpgfebbdbhiuwdcftenihseorykdguoqotqyscwymtjejpdzqepjkadtftzwebxwyuqwyeegwxhroaaymusddwnjkvsvrwwsmolmidoybsotaqufhepinkkxicvzrgbgsarmizugbvtzfxghkhthzpuetufqvigmyhmlsgfaaqmmlblxbqxpluhaawqkdluwfirfngbhdkjjyfsxglsnakskcbsyafqpwmwmoxjwlhjduayqyzmpkmrjhbqyhongfdxmuwaqgjkcpatgbrqdllbzodnrifvhcfvgbixbwywanivsdjnbrgskyifgvksadvgzzzuogzcukskjxbohofdimkmyqypyuexypwnjlrfpbtkqyngvxjcwvngmilgwbpcsseoywetatfjijsbcekaixvqreelnlmdonknmxerjjhvmqiztsgjkijjtcyetuygqgsikxctvpxrqtuhxreidhwcklkkjayvqdzqqapgdqaapefzjfngdvjsiiivnkfimqkkucltgavwlakcfyhnpgmqxgfyjziliyqhugphhjtlllgtlcsibfdktzhcfuallqlonbsgyyvvyarvaxmchtyrtkgekkmhejwvsuumhcfcyncgeqtltfmhtlsfswaqpmwpjwgvksvazhwyrzwhyjjdbphhjcmurdcgtbvpkhbkpirhysrpcrntetacyfvgjivhaxgpqhbjahruuejdmaghoaquhiafjqaionbrjbjksxaezosxqmncejjptcksnoq"));
