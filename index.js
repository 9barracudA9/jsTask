const userNames=[
    'John',
    'Ted',
    'Jimmy',
    'Fred',
    'Jack',
    'Andrew',
    'Payton',
    'Jaylen',
    'Jason',
    'Kobe',
    'Steward',
    'Barney',
    'Nikita',
    'Yarik',
    'Egor']

const getRandom=(max,min)=>{
   return  Math.floor( Math.random()*(max-min)+min+1)
}

class Person{
    constructor(fName,currAge,newId) {

    this.name=fName
    this.age=currAge
    this.id=newId
        }
}
function personGenerate(number) {
    let arr=[]
    for (let i = 0; i < number; i++) {
        arr.push(new Person(userNames[getRandom(userNames.length - 1, 0)], getRandom(50, 18), getRandom(100, 1)))

    }
    arr.sort((a, b) => a.age - b.age)
    return arr
}
const buttonAction=document.getElementById('button')
const listItem=document.getElementById('list')
buttonAction.addEventListener('click',(event)=>{
    const sortedPersons=personGenerate(30)
    sortedPersons.forEach((element)=>{
        listItem.innerHTML+=`<span style="color: crimson"><li>${element.name}</span>,<span style="color: blue">age:${element.age}</span>,<span style="color: royalblue">id:${element.id}</span></li>`})
}
)


class User{
    constructor(fName,currAge) {
        this.name=fName
        this.age=currAge
    }
}

const userBtn=document.getElementById('username-btn')
const inputArea=document.getElementById('inp')
const usersList=document.getElementById('users')
const submitBtn=document.getElementById('submit')
const resultArea=document.getElementById('res')
const clearButton=document.getElementById('clear')



let newArr=[]

userBtn.addEventListener('click',(event)=>{
    if (event.target.closest('.btn')){
        const currUser=new User(event.target.textContent,inputArea.value)
        usersList.innerHTML+=`<li>${currUser.name},${currUser.age} y.o`
        newArr.push(currUser)
    }
})

submitBtn.addEventListener('click',(event)=> {
    newArr.forEach((element) => {
        if (element.age < 18) {
            resultArea.textContent= 'Error.Too Young'
            resultArea.style.color='red'
        } else {
            resultArea.textContent = 'SUBMIT'
            resultArea.style.color='green'
        }
    })
})
clearButton.addEventListener('click',(event)=> {
  resultArea.textContent=null
    usersList.textContent=null
})
//



const buttonsGroup=document.getElementById('idBtn')

buttonsGroup.addEventListener('click',(event)=>{
    if (event.target.closest('.btn')){
        const timeout=
        setTimeout(()=>{
            alert(`${event.target.id}`)
        },2000)
        if(timeout!==undefined){
            clearTimeout(timeout)
        }

    }
}
)

console.log('test')