/**
 * @param {string} s
 * @return {number}
 */
// var balancedStringSplit = function(s) {
//     let count = 0;
//     let subString = '';
//     let front = 0;
//     for(let i = 0; i < s.length; i++) {
//         subString = s.slice(front, i + 1);
//         if(isBalance(subString)) {
//             count++;
//             front = i + 1;
//         }
//     }

//     if(front != s.length) {
//         return 1;
//     } else {
//         return count;
//     }
// };

// const isBalance = (s) => {
//     if(s.length % 2 != 0) {
//         return false;
//     }
//     let lCount = 0;
//     let rCount = 0;
//     for(let i = 0; i< s.length; i++) {
//         if(s[i] === 'R') {
//             rCount++
//         } else {
//             lCount++;
//         }
//     }
//     return lCount === rCount;
// }

var balancedStringSplit = function(s) {
    let count = 0;
    let res = 0;
    for(let i = 0; i < s.length; i++) {
        res = res + (s[i] === 'R' ? +1 : -1);
        if(res === 0) { count++; }
    }
    return count;
}

balancedStringSplit("RRLRRLRLLLRL");