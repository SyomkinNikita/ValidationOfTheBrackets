function validation(str) {
    const brackets = "(){}[]";
    let bracketsSet = [];
    for (let i = 0; i < str.length; ++i) {
        let char = str[i],
            index = brackets.indexOf(char);
        if (index >= 0) {
            if (index & 1) {
                if (!bracketsSet.length) {
                    return false;
                }
                let lastBracket = bracketsSet.pop();
                if (lastBracket !== brackets[index - 1]) {
                    return false;
                }
            } else {
                bracketsSet.push(char);
            }
        }
    }
    return true;
}

const correct1 = '{((a+b)*3) + a + c*[2-x]}*x';
const correct2 = '()[{a}+c]';
const incorrect1 = '(a+{b) *c}';
const incorrect2 = '([a+b]*c}';
console.log(validation(correct2))
