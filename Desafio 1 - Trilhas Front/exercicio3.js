let frascos = [12, 5, 23, 17, 8, 14, 3, 19];

function bubbleSort(array) {
    let temporario;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                temporario = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporario;
            }
        }
    }
}

bubbleSort(frascos);
console.log(`Frascos Ordenados: ${frascos}`);