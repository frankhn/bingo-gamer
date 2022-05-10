import { Iboxes } from "../../interfaces/boxes.interface";

const arr: Array<Iboxes> = [
    { id: 1, text: "We only write humans understandable codes", marked: false },
    { id: 2, text: "First, solve the problem. Then, write the code", marked: false },
    { id: 3, text: "Experience is the name given to your mistakes", marked: false },
    { id: 4, text: "In order to be irreplaceable, one must always be different", marked: false },
    { id: 5, text: "Java is to JavaScript what car is to Carpet", marked: false },
    { id: 6, text: "Perfection is achieved not when there is nothing more to add", marked: false },
    { id: 7, text: "Ruby is rubbish! PHP is phpantastic!", marked: false },
    { id: 8, text: "Code is like humor. When you have to explain it, it’s bad", marked: false },
    { id: 9, text: "Fix the cause, not the symptom.", marked: false },
    { id: 10, text: "Optimism is an occupational hazard of programming: feedback is the treatment", marked: false },
    { id: 11, text: "Use iterative development only on projects that you want to succeed.", marked: false },
    { id: 12, text: "C is memory with syntactic sugar", marked: false },
    { id: 13, text: "Conf call Bingo", marked: true },
    { id: 14, text: "Simplicity is the soul of efficiency", marked: false },
    { id: 15, text: "Before software can be reusable it first has to be usable", marked: false },
    { id: 16, text: "Make it work, make it right, make it fast", marked: false },
    { id: 17, text: "Invest in quality headphones", marked: false },
    { id: 18, text: "Re-read code before opening a PR", marked: false },
    { id: 19, text: "Don't be afraid to admit you don't know something", marked: false },
    { id: 20, text: "Good programmers worry about data structures and their relationships.", marked: false },
    { id: 21, text: "Teach them how to program, you frustrate them for a lifetime.", marked: false },
    { id: 22, text: "Much of the essence of building a program is in fact the debugging of the specification", marked: false },
    { id: 23, text: "Any sufficiently advanced bug is indistinguishable from a feature", marked: false },
    { id: 24, text: "Sufficiently advanced abstractions are indistinguishable from obfuscation", marked: false },
    { id: 25, text: "An estimate is the most optimistic prediction that has a non-zero probability of coming true", marked: false },
]

const shuffle = (data: Array<Iboxes>) => {
    const confIdx = { id: 13, text: "Conf call Bingo", marked: true }

    let arr = data.filter(arr => arr.id !== 13)

    arr = arr.slice().sort(() => Math.random() - 0.5)

    arr.splice(12, 0, confIdx)
    return arr;
}

export const data = shuffle(arr)
