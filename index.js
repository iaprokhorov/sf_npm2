const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
  { id: 4, name: "Mass" },
]

myAwesomeArray.filter(element => element.name === "Mass")
myAwesomeArray.forEach(element => console.log(element.name))
myAwesomeArray.findIndex(element => element.id === 3)
myAwesomeArray.find(element => element.id === 3)