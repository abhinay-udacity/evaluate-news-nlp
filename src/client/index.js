import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'


alert("I EXIST")
console.log("CHANGE!!");
let mainForm = document.getElementById("mainForm");
mainForm.addEventListener("submit",handleSubmit)
export {
    checkForName,
    handleSubmit
}