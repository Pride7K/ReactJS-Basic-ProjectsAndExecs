
export default (valor,setValor) => {
    var arrayFinal = []
    var minValue = 6;
    var maxValue = 100;
    if(!isNaN(valor) && parseInt(valor) >= 6)
    {
        for (let i = 1; i <= valor; i++) {
            var aleatorio = Math.round(Math.random() * (+maxValue - +minValue)) + minValue;
            if(arrayFinal.filter(item => { return item === aleatorio }).length == 0)
            {
                arrayFinal.push(aleatorio);
            }
            else if (arrayFinal.filter(item => { return item === aleatorio }).length != 0)
            {
                while(arrayFinal.filter(item => { return item === aleatorio }).length != 0)
                {
                    aleatorio = Math.round(Math.random() * (+maxValue - +minValue)) + minValue;
                }
                arrayFinal.push(aleatorio);
            }
        }
    }
    setValor(arrayFinal)
}

