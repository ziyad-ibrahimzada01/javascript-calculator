const toogleMode = document.querySelector("#toogle-mode")
const container = document.querySelector(".container")


toogleMode.addEventListener("change", ()=>{
 container.classList.toggle("dark-mode")

})

const handleKeyPress = (key) => {
    if(/[0-9]/.test(key)){
        hanleButtonPress(key)
    }
    if(/[\+\-\*\/\%]/.test(key)){
        hanleButtonPress(key)
    }

}
const hanleButtonPress = (value) => { 
    const button = Array.from(document.querySelectorAll("button")).find(
        btn => {
            btn.innerText===value
        }
    )
    if(button){
    button.click()
    }
}

const clearAll = () => {
    document.querySelector("#answer").value = ""

}


const deleteLastEntry = () => {
    const answer = document.querySelector("#answer")
    answer.value = answer.value.slice(0, -1)
}
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {

    
    const value = button.innerText
    const answer = document.querySelector("#answer")
    if(value==="C"){
        clearAll()
    }
    else if(value ==="CE"){
        deleteLastEntry()
    }
    else if (value==="="){
        try {
            answer.value=eval(answer.value.replace("x", "*"))
        } catch (error) {
            answer.value="error"
            
        }
    }
    else {
        answer.value += value
    }
})
})