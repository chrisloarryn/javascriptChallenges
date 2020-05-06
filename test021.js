// Programa una función que retorne el monto entero a pagar por indemnización,
// tomando como argumentos el sueldo de la persona y el número de meses trabajados.

// La fórmula para calcular la indemnización es la siguiente:
//      1. Si se ha trabajado menos de un año, no hay beneficio.
//      2. Si se ha trabajado un año o más, se suma 1 sueldo por cada año o fracción superior o igual a 6 meses trabajados.

const dummy_data = [400000, 37]

const calcBenefits = (data) => {
    let indem;
    const [salary, months] = [data[0], data[1]]
    switch (true) {
        case months<12:
            indem = 0;
            break;
        case months>=12:
            const calcMonths = months/12
            let salariesByYears = parseInt(calcMonths); // two salaries by month
            const comparative = months - (salariesByYears * 12);
            if (comparative >= 6) salariesByYears++; // validate > 6 months
            indem = salariesByYears * salary;
            break;
        default:
            console.log('error');
    }
    return indem;
};

console.log(calcBenefits(dummy_data));
