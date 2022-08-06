function saying(word) {
    console.log(this)
    let ask = (ques) => {
        console.log(this.teacher, ques);
    }
    ask(word);
}

let obj = {
    teacher: 'Sanket',
    say: saying
}

obj.say("what is the next topic")

