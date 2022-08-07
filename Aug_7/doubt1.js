var teacher = "Anup"
let askQuestion = (ques) => {
  console.log(this.teacher, ques)
}
let obj = {
  teacher : "Singh",
	ask : askQuestion
}
obj.ask("What is next")