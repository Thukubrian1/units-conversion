function convert() {
           
    var number = parseFloat(document.getElementById("number").value);
    var unit = document.getElementById("unit").value;

    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");

    let mvalue,hmvalue,kmvalue,cmvalue,mmvalue;

    if (isNaN(number)){

        window.alert("Enter a number");
    
    }

    else if (unit == 1){
        mvalue = number * 1000;
        hmvalue = number * 10;
        cmvalue = number * 100000;
        mmvalue = number * 1000000;

        answer1.innerHTML = ` ${number} kilometers = ${mvalue} meters`;
        answer2.innerHTML = ` ${number} kilometers = ${hmvalue} hectometers`;
        answer3.innerHTML = ` ${number} kilometers = ${cmvalue} centimeters`;
        answer4.innerHTML = ` ${number} kilometers = ${mmvalue} millimeters`;
    }

    else if (unit == 2){
        mvalue = number * 100;
        kmvalue = number / 10;
        cmvalue = number * 10000;
        mmvalue = number * 100000;

        answer1.innerHTML = ` ${number} hectometers  = ${mvalue} meters`;
        answer2.innerHTML = ` ${number} hectometers  = ${kmvalue} kilometers`;
        answer3.innerHTML = ` ${number} hectometers = ${cmvalue} centimeters`;
        answer4.innerHTML = ` ${number} hectometers = ${mmvalue} millimeters`;
    }

    else if (unit == 3){
        mvalue = number / 100;
        kmvalue = number / 100000;
        hmvalue = number / 10000;
        mmvalue = number * 10;

        answer1.innerHTML = ` ${number} centimeters = ${mvalue} meters`;
        answer2.innerHTML = ` ${number} centimeters = ${hmvalue} hectometers`;
        answer3.innerHTML = ` ${number} centimeters = ${kmvalue} kilometers`;
        answer4.innerHTML = ` ${number} centimeters = ${mmvalue} millimeters`;
    }

    else if (unit == 4){
            mvalue = number / 1000;
            kmvalue = number / 1000000;
            hmvalue = number / 100000;
            cmvalue = number * 10;

            answer1.innerHTML = ` ${number} milllimeters = ${mvalue} meters`;
            answer2.innerHTML = ` ${number} millimeters = ${hmvalue} hectometers`;
            answer3.innerHTML = ` ${number} millimeters = ${kmvalue} kilometers`;
            answer4.innerHTML = ` ${number} millimeters = ${cmvalue} centimeters`;
    }

    else if (unit == 5){
        cmvalue = number * 100;
        kmvalue = number / 1000;
        hmvalue = number / 100;
        mmvalue = number * 1000;

        answer1.innerHTML = ` ${number} meters = ${cmvalue} centimeters`;
        answer2.innerHTML = ` ${number} meters = ${hmvalue} hectometers`;
        answer3.innerHTML = ` ${number} meters = ${kmvalue} kilometers`;
        answer4.innerHTML = ` ${number} meters = ${mmvalue} millimeters`;
    }

    else{

         window.alert("Invalid input");
     }
}