export default class DuskTestUtils {

    constructor() {
        //
    }

    disableInputValidation(){
        Array.from(document.querySelectorAll("[required]"))
            .forEach((el)=>el.removeAttribute('required'))
    }
}
