


function checkPhone(myId, msgID) {
    const element = document.getElementById(myId);
    const element2 = document.getElementById(msgID);
    const val = element.value;

    //123-456-7890
    let simpleRe = new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{3}$');
    const retVal = simpleRe.test(val);

    if (retVal) {
        element2.innerText = "";
        element2.style.display = 'block';

    }
    else {
        element2.style.display = 'block';
        element2.style.backgroundColor = 'red';
        element2.style.color = 'white';
        element2.innerText = "Please enter a valid number: ex(123-456-7890)";
    }
    return retVal;
}