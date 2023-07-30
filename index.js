// KONTROLA DIČ

// Default Value - Dropdown List

const stateElm = document.querySelector('#state')
const stateReqElm = document.querySelector('#state-requested')

const addShortCut = () => {
    let stateText = stateElm.options[stateElm.selectedIndex].textContent
    let stateReqText = stateReqElm.options[stateReqElm.selectedIndex].textContent

    const dicShort1Elm = document.querySelector('#dic-short-1')
    const dicShort2Elm = document.querySelector('#dic-short-2')

    dicShort1Elm.value = stateText.slice(0, 2)
    dicShort2Elm.value = stateReqText.slice(0, 2)
}

addShortCut()

// Change Event - Dropdown List

const changeShortCut = () => {
    let stateText = stateElm.options[stateElm.selectedIndex].textContent
    let stateReqText = stateReqElm.options[stateReqElm.selectedIndex].textContent

    const dicShort1Elm = document.querySelector('#dic-short-1')
    const dicShort2Elm = document.querySelector('#dic-short-2')

    dicShort1Elm.value = stateText.slice(0, 2)
    dicShort2Elm.value = stateReqText.slice(0, 2)
}

stateElm.addEventListener('change', changeShortCut)
stateReqElm.addEventListener('change', changeShortCut)

// VAT validation

const czechia = (dic) => {
    if (String(dic).length >= 8 && String(dic).length <= 10) {
        return true
    } return false
}

const germany = (dic) => {
    if (String(dic).length === 9) {
        return true
    } return false
}

const poland = (dic) => {
    if (String(dic).length === 10) {
        return true
    } return false
}

const slovakia = (dic) => {
    if (String(dic).length === 10) {
        return true
    } return false
}

const austria = (dic) => {
    if (String(dic).length === 9) {
        return true
    } return false
}

let result = true

const checkVAT = (e) => {
    e.preventDefault()
    const stateElm = document.querySelector('#state')
    let stateValue = stateElm.options[stateElm.selectedIndex].value
    const dicElm = document.querySelector('#dic')
    const dicReqElm = document.querySelector('#dic-requested')
    let dicValue = dicElm.value
    const formResultElm = document.querySelector('.form__result')

    if (validator.isInt(dicValue)) {
        if (stateValue === 'czechia') {
            result = czechia(dicValue)
        } else if (stateValue === 'germany') {
            result = germany(dicValue)
        } else if (stateValue === 'poland') {
            result = poland(dicValue)
        } else if (stateValue === 'slovakia') {
            result = slovakia(dicValue)
        } else if (stateValue === 'austria') {
            result = austria(dicValue)
        }
    } else {
        formResultElm.textContent = 'Chybně zadané číslo!'
        formResultElm.classList.add('form__result--wrong')
        result = null
        dicElm.value = ''
        dicReqElm.value = ''
    }

    if (result === true) {
        formResultElm.textContent = 'Ano, platné DIČ'
        formResultElm.classList.add('form__result--ok')
        dicElm.value = ''
        dicReqElm.value = ''
    } else if (result === false) {
        formResultElm.textContent = 'Ne, neplatné číslo DPH pro přeshraniční transakce v rámci EU'
        formResultElm.classList.add('form__result--wrong')
        dicElm.value = ''
        dicReqElm.value = ''
    }
}

const formElm = document.querySelector('#VAT-validation')
formElm.addEventListener('submit', checkVAT)




