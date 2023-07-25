export default function Validate(event){
    let fname = document.getElementsByName('name')[0].value
    let cr_card = document.getElementsByName('cr_card')[0].value
    let CVV = document.getElementsByName('CVV')[0].value
    let exp_date = document.getElementsByName('exp_date')[0].value
    if(fname === "" | fname === null){
        let selectedElem = document.getElementsByName('name')
        selectedElem[0].style.border = "2px solid red"
        let errorMsz = document.getElementsByClassName('disp_text')
        errorMsz[0].innerText = "this field is empty"
        errorMsz[0].style.color = "red"
        event.preventDefault()
        return false
    }
    else if(fname < 5){
        let selectedElem = document.getElementsByName('name')
        selectedElem[0].style.border = "2px solid red"
        let errorMsz = document.getElementsByClassName('disp_text')
        errorMsz[0].innerText = "Not a vaild name"
        errorMsz[0].style.color = "red"
        event.preventDefault()
        return false
    }
    if(cr_card === "" && exp_date === false && CVV === ""){
        alert("Please fill the Required Values")
        event.preventDefault()
        return false
    }
    else{
        alert("payment successful")
        event.preventDefault()
        return true
    }
}