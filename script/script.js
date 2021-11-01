                
function BMI() {
    let imcBar = document.getElementById('IMCbar');
    let imcData = document.getElementById('imcData');

    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let Height = document.getElementById('height');
    let Weight = document.getElementById('weight');
    let gender = document.querySelector(`input[name="gender"]:checked`).value;
    let age = document.getElementById('age');
    let x = document.getElementById('male');
    let y = document.getElementById('female');
    let result = document.getElementById('result');
   
    
    let user ={
        Genero : gender,
        Edad : age.value,
        Peso : Weight.value,
        Altura : Height.value
    }

    let array = JSON.parse(localStorage.getItem("Usuario")) || [];
    array.push(user);
    localStorage.setItem("Usuario", JSON.stringify(array));

    if ((height === '') || (height < 0) || (isNaN(height)) ) {
        result.innerHTML = `${height} is Altura invalida <br/> Por favor ingrese una altura valida`;
    } else if ((weight === '') || (weight < 0) || (isNaN(weight)) ) {
        result.innerHTML = `${weight} is Peso invalido <br/> Por favor ingrese un peso valido`;
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.5) {
            if(x.checked === true)
            {
                result.innerHTML = `${x.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Bajo peso`; 
                imcData.innerHTML = `IMC: ${bmi} Bajo peso`;
            }
            else{
                result.innerHTML = `${y.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Bajo peso`;
                imcData.innerHTML = `IMC: ${bmi} Bajo peso`;
            }
        } else if (bmi > 18.5 && bmi < 24.9){
            if(x.checked === true)
            {
                result.innerHTML = `${x.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Peso normal`;
                imcData.innerHTML = `IMC: ${bmi} Peso normal`; 
            }
            else{
                result.innerHTML = `${y.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Peso normal`;
                imcData.innerHTML = `IMC: ${bmi} Peso normal`;
            }
        } else if(bmi > 25.0 && bmi < 29.9){
            if(x.checked === true)
            {
                result.innerHTML = `${x.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Sobrepeso`; 
                imcData.innerHTML = `IMC: ${bmi} Sobrepeso`;
            }
            else{
                result.innerHTML = `${y.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Sobrepeso`;
                imcData.innerHTML = `IMC: ${bmi} Sobrepeso`;
            }
        }else if(bmi > 30.0 ){
            if(x.checked === true)
            {
                result.innerHTML = `${x.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Obesidad`;
                imcData.innerHTML = `IMC: ${bmi} Obesidad`;
            }
            else{
                result.innerHTML = `${y.value} <br/> ${age.value} años <br/> IMC = ${bmi} <br/> Obesidad`;
                imcData.innerHTML = `IMC: ${bmi} Obesidad`;
            }

        }

        if (bmi <= 15) {
            imcBar.style.width = '0%';
        } else if (bmi >= 35) { // si es 35 o mayor es 100%
            imcBar.style.width = '100%';
        } else { // If IMC wis between 15 and 35
            imcBar.style.width = (((bmi - 15) * 100) / 20) + '%';
        }
         return false;

    }

    

}

