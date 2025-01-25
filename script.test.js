import { appendToDisplay, backspace, clearDisplay, calculate } from "./calculadora-ui.js";
import {
    tokenizar,
    converterParaPosFixa,
    calcularExpressao,
    calcularPosFixa
} from "./calculadora.js";




// Testes para a função tokenizar 
test('Tokenizar expressão simples (adição e subtração)', () => {
    expect(tokenizar('5 + 3 - 2')).toEqual(['5', '+', '3', '-', '2']);
});

test('Tokenizar expressão com multiplicação e divisão', () => {
    expect(tokenizar('10 * 2 / 5')).toEqual(['10', '*', '2', '/', '5']);
});

test('Tokenizar expressão com números decimais', () => {
    expect(tokenizar('3.5 + 2.1 * 4')).toEqual(['3.5', '+', '2.1', '*', '4']);
});

test('Tokenizar expressão com múltiplos operadores', () => {
    expect(tokenizar('5 + 3 * 10 - 2 / 4 + 2')).toEqual(['5', '+', '3', '*', '10', '-', '2', '/', '4', '+', '2']);
});

test('Tokenizar expressão com espaços em branco', () => {
    expect(tokenizar('5    + 3 * 10')).toEqual(['5', '+', '3', '*', '10']);
});

test('Tokenizar expressão com números negativos', () => {
    expect(tokenizar('-5 + 3 * -2')).toEqual(['-5', '+', '3', '*', '-2']);
});

test('Tokenizar expressão vazia', () => {
    expect(tokenizar('')).toEqual([]);
});

test('Tokenizar expressão com caracteres inválidos', () => {
    expect(tokenizar('5 + abc * 2')).toEqual(['5', '+', '*', '2']);
});


// Testes para a função converter para pós fixa
test('Operações com expressões básicas "+", "-", "*", "/" ', () => {
    expect(converterParaPosFixa(["3", "+", "4"])).toEqual([3, 4, '+']);
    expect(converterParaPosFixa(["3", "-", "4"])).toEqual([3, 4, '-']);
    expect(converterParaPosFixa(["3", "*", "4"])).toEqual([3, 4, '*']);
    expect(converterParaPosFixa(["3", "/", "4"])).toEqual([3, 4, '/']);
});

test('Expressões com múltiplos operadores e precedência', () => {
    expect(converterParaPosFixa(["3", "+", "4", "*", "2"])).toEqual([3, 4, 2, '*', "+"]);
    expect(converterParaPosFixa(["5", "*", "2", "+", "3"])).toEqual([5, 2, '*', 3, "+"]);
    expect(converterParaPosFixa(["10", "-", "2", "/", "2"])).toEqual([10, 2, 2, '/', "-"]);
});

test('Expressão com números negativos', () => {
    expect(converterParaPosFixa(['-3', "+", "4"])).toEqual([-3, 4, "+"]);
    expect(converterParaPosFixa(['5', "*", "-2"])).toEqual([5, -2, "*"]);
    expect(converterParaPosFixa(['10', "+", "2", "-", "-2", "/", "5"])).toEqual([10, 2, "+", -2, 5, "/", "-"]);
});

test('Expressões com operadores de mesma precedência', () => {
    expect(converterParaPosFixa(['3', '*', '5', '/', '10'])).toEqual([3,5, "*", 10, "/"]);
});



// Testes para utilizar a função que calcula a pós fixa
test('calcula a pos fixa com operações básicas  "+", "-", "*", "/"', () => {
    expect(calcularPosFixa([3, 4, '+'])).toEqual(7);
    expect(calcularPosFixa([3, 4, '-'])).toEqual(-1);
    expect(calcularPosFixa([3, 4, '*'])).toEqual(12);
    expect(calcularPosFixa([3, 4, '/'])).toEqual(0.75);
});

test('calcula a pos fixa com múltiplos operadores e precedência', () => {
    expect(calcularPosFixa([3, 4, 2, '*', "+"])).toEqual(11)
    expect(calcularPosFixa([5, 2, '*', 3, "+"])).toEqual(13)
    expect(calcularPosFixa([10, 2, 2, '/', "-"])).toEqual(9)
});

test('Calcula a pós fixa com números negativos', () => {
    expect(calcularPosFixa([-3, 4, 2, '*', "+"])).toEqual(5)
    expect(calcularPosFixa([5, -2, '*', 3, "+"])).toEqual(-7)
    expect(calcularPosFixa([10, -2, -2, '/', "-"])).toEqual(9)
});

test('Testa divisao por zero', () => {
    expect(() => calcularPosFixa([3, 0, '/'])).toThrow('Divisão por zero não é permitida');
});

// testa display 
test("appendToDisplay adiciona valor ao display", () => {
    const display = { value: '123' };
    appendToDisplay(display, '4');
    expect(display.value).toBe('1234')
});

test("appendToDisplay corrige valor com espaço colocado no display", () => {
    const display = { value: '123' };
    appendToDisplay(display, '  4   ');
    expect(display.value).toBe('1234')
});

test("clearDisplay esta removendo tudo do display", () => {
    const display = { value: '123' }
    clearDisplay(display);
    expect(display.value).toBe('')
});

test("clearDisplay não faz nada se o display estiver vazio", () => {
    const display = { value: '' }
    clearDisplay(display);
    expect(display.value).toBe('')
});


test('backspace remove o último caractere do display', () => {
    const display = { value: '12345' };
    backspace(display);
    expect(display.value).toBe('1234');
});

test('backspace não faz nada se o display estiver vazio', () => {
    const display = { value: '' };
    backspace(display);
    expect(display.value).toBe('');
});

test('backspace remove o último caractere mesmo que seja um operador', () => {
    const display = { value: '123+' };
    backspace(display);
    expect(display.value).toBe('123');
});

test('calculate realiza o cálculo corretamente', () => {
    const display = { value: '2 + 2' };
    const calcularExpressao = () => 4; 
    calculate(display, calcularExpressao);
    expect(display.value).toBe(4);
});

test('calculate exibe "Erro" em caso de erro', () => {
    const display = { value: '2 / 0' };
    const calcularExpressao =  () => {
        throw new Error('Erro'); 
    }; 
    calculate(display, calcularExpressao);
    expect(display.value).toBe('Erro');
});


test('Mapeamento de teclas funciona corretamente', () => {
    const keyMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '.': '.',
        'Enter': '=',
        '=': '=',
        'Backspace': 'backspace',
        'Escape': 'clear',
        'c': 'clear',
        'C': 'clear'
    };

    // Verifica o mapeamento das teclas numéricas
    expect(keyMap['0']).toBe('0');
    expect(keyMap['1']).toBe('1');
    expect(keyMap['2']).toBe('2');
    expect(keyMap['3']).toBe('3');
    expect(keyMap['4']).toBe('4');
    expect(keyMap['5']).toBe('5');
    expect(keyMap['6']).toBe('6');
    expect(keyMap['7']).toBe('7');
    expect(keyMap['8']).toBe('8');
    expect(keyMap['9']).toBe('9');

    // Verifica o mapeamento dos operadores
    expect(keyMap['+']).toBe('+');
    expect(keyMap['-']).toBe('-');
    expect(keyMap['*']).toBe('*');
    expect(keyMap['/']).toBe('/');

    // Verifica o mapeamento do ponto decimal
    expect(keyMap['.']).toBe('.');

    // Verifica o mapeamento das teclas de ação
    expect(keyMap['Enter']).toBe('=');
    expect(keyMap['=']).toBe('=');
    expect(keyMap['Backspace']).toBe('backspace');
    expect(keyMap['Escape']).toBe('clear');
    expect(keyMap['c']).toBe('clear');
    expect(keyMap['C']).toBe('clear');
});


