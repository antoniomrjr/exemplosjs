const swap = (vetor, pos1, pos2) => { // trocando os valores de duas posições de um vetor com a função 'swap'
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

const shuffle = (vetor, trocas) => { // embaralhando os elementos do vetor com a função 'shuffle'
    for (let i = 0; i < trocas; i++) {
        let pos1 = Math.floor(Math.random() * vetor.length);
        let pos2 = Math.floor(Math.random() * vetor.length);

        swap(vetor, pos1, pos2);
    }

    return vetor;
};

const bubble_sort = (vetor) => { // ordenando o vetor de inteiros com a função 'bubble_sort'
    let tamanho = vetor.length;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }

    return vetor;
};

const selection_sort = (vetor) => { // ordenando o vetor de inteiros com a função 'selection_sort'
    let tamanho = vetor.length;

    for (let i = 0; i < tamanho - 1; i++) {
        let menor = i;

        for (let j = i + 1; j < tamanho; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }

        if (menor !== i) {
            swap(vetor, i, menor);
        }
    }

    return vetor;
};

const particionamento = (vetor, inicio, fim, pivot) => { // função de particionamento para Quick Sort
    let i = inicio;
    let j = fim;

    while (i <= j) {

        while (vetor[i] < pivot) {
            i++;
        }

        while (vetor[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(vetor, i, j);
            i++;
            j--;
        }
    }

    return i;
};

const quick_sort = (vetor, inicio, fim) => { // ordenação Quick Sort (recursiva)

    if (inicio < fim) {

        let pivot = vetor[Math.floor((inicio + fim) / 2)];

        let indice = particionamento(vetor, inicio, fim, pivot);

        if (inicio < indice - 1) {
            quick_sort(vetor, inicio, indice - 1);
        }

        if (indice < fim) {
            quick_sort(vetor, indice, fim);
        }
    }

    return vetor;
};