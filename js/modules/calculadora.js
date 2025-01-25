// Função para tokenizar a expressão (dividir em números e operadores)
export function tokenizar(expressao) {
    const regex = /(\d+\.?\d*)|([\+\-\*\/\(\)])/g;
    const tokens = expressao.match(regex) || [];

    // Corrige números negativos no início da expressão ou após operadores
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '-' && !isNaN(tokens[i + 1])) {
            const prevToken = tokens[i - 1];
            // O sinal de menos faz parte do número negativo se:
            // 1. Estiver no início da expressão.
            // 2. O token anterior for um operador ou '('.
            if (i === 0 || ['+', '-', '*', '/', '('].includes(prevToken)) {
                tokens[i + 1] = '-' + tokens[i + 1];
                tokens.splice(i, 1); // Remove o sinal de menos
            }
        }
    }

    return tokens;
}

// Função para converter infixa para pós-fixa (notação polonesa reversa)
export function converterParaPosFixa(tokens) {
    const precedencia = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const pilha = [];
    const saida = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            saida.push(parseFloat(token));
        } else if (token in precedencia) {
            while (
                pilha.length > 0 &&
                pilha[pilha.length - 1] !== '(' &&
                precedencia[pilha[pilha.length - 1]] >= precedencia[token]
            ) {
                saida.push(pilha.pop());
            }
            pilha.push(token);
        } else if (token === '(') {
            pilha.push(token);
        } else if (token === ')') {
            while (pilha.length > 0 && pilha[pilha.length - 1] !== '(') {
                saida.push(pilha.pop());
            }
            pilha.pop(); // Remove o '(' da pilha
        }
    }

    while (pilha.length > 0) {
        saida.push(pilha.pop());
    }
    return saida;
}

// Função para calcular uma expressão em notação pós-fixa
export function calcularPosFixa(rpn) {
    const pilha = [];

    for (const token of rpn) {
        if (!isNaN(token)) {
            pilha.push(token);
        } else {
            const b = pilha.pop();
            const a = pilha.pop();
            switch (token) {
                case '+':
                    pilha.push(a + b);
                    break;
                case '-':
                    pilha.push(a - b);
                    break;
                case '*':
                    pilha.push(a * b);
                    break;
                case '/':
                    if (b === 0) {
                        throw new Error("Divisão por zero não é permitida.");
                    }
                    pilha.push(a / b);
                    break;
                default:
                    throw new Error("Operador inválido.");
            }
        }
    }

    return pilha.pop();
}

// Função para calcular uma expressão matemática com precedência de operadores
export function calcularExpressao(expressao) {
    const tokens = tokenizar(expressao);
    const rpn = converterParaPosFixa(tokens);
    return calcularPosFixa(rpn);
}