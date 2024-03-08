const addToZero = arr => {
    for (let i = 0; i < arr.length; i++){
        arr.forEach(ele => {
            console.log(arr[i], ele)
            if(arr[i] + ele === 0){
                return true
            }
        })
    }
    return false
}

// O(n^2)

const uniqChars = str => {
    newStr = str.split(``)
    newStr = new Set(str)
    newStr = [...newStr].join(``)

    if(newStr === str){
        return true
    } else {
        return false
    }
}

// O(n)

const test = (string) => {
    if (typeof string !== 'string') {
    return 'It must be a string.';
    }
    
    const result = new Set();
    
    for (const ch of string.toUpperCase()) {
        if (/[A-Z]/.test(ch)) {
        result.add(ch);
    }
    }
    
    return result.size === 26;
};

// O(n)

function findTheLongestWord(arr) {
    let findWord
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > findWord || findWord === undefined) {
            findWord = arr[i].length
        }
    }
    return findWord
}

// O(n)