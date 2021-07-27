
    var formElement = document.forms.FORMA;
    formElement.onsubmit = validateInfoForm;


function validateInfoForm() {

        var fioElem = formElement.elements.YouName;
        var mobileElem = formElement.elements.telephon;
        var inetElem = formElement.elements.mail;
        

        var fioValue = fioElem.value;
        var netValue = inetElem.value;
        var mobileValue = parseInt(mobileElem.value.trim());

        if ( fioValue.length>10) {
            alert('Введите пожалуйста строку не длиннее 10 символов!'); 
            
          
            fioElem.focus();
            return false;
        }else if(fioValue == "") {
            alert('Эта строка должна быть заполнена.');

            fioElem.focus();
            return false;

        }

         if(netValue == "") {
            alert('Эта строка должна быть заполнена.');

            inetElem.focus();
            return false;

        }

        if ( isNaN(mobileValue) ) {

            alert('Введите пожалуйста в поле телефона цифру');
            mobileElem.focus();
            
            return false;
        } 


        return true;
 }