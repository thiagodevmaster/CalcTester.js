# Calculadora Simples 🧮

Uma calculadora simples e responsiva desenvolvida com **HTML**, **CSS** e **JavaScript** modular. Este projeto inclui funcionalidades como suporte a teclado, histórico de cálculos, tratamento de erros, e cálculos com precedência de operadores.

---

## 🛠️ Funcionalidades

- **Operações básicas**: Adição, subtração, multiplicação e divisão.
- **Cálculo com precedência**: Respeita a ordem matemática das operações.
- **Entrada via teclado**: Suporte completo para teclas numéricas e de operação.
- **Interface interativa**: UI responsiva para qualquer dispositivo.
- **Tratamento de erros**: Exibe mensagens amigáveis para entradas inválidas ou erros de cálculo.
- **Suporte a números decimais**: Permite cálculos com números fracionários.
- **Testes automatizados**: Verificação das funções principais do projeto usando um ambiente de testes.

---

## 📂 Estrutura do Projeto

A organização do projeto foi feita de forma modular para facilitar a manutenção e o entendimento. Abaixo está a estrutura de diretórios e arquivos:

```plaintext
calculadora/
│
├── index.html          # Arquivo principal da interface
├── styles.css          # Estilos para a calculadora
├── script.js           # Script principal para manipulação do DOM
├── calculadora.js      # Lógica matemática do cálculo (tokenização e pós-fixa)
├── calculadora-ui.js   # Lógica de interação com o usuário
├── tests/              # Pasta contendo os testes automatizados
└── README.md           # Documentação do projeto
```


### 📌 Descrição dos Arquivos
- **`index.html`**: Estrutura HTML principal da calculadora.
- **`styles.css`**: Estilos visuais da aplicação para proporcionar uma interface limpa e agradável.
- **`script.js`**: Manipulação de eventos e ligação entre a interface do usuário e a lógica de cálculo.
- **`calculadora.js`**: Contém a lógica matemática, como a tokenização de expressões e cálculos em notação polonesa reversa (pós-fixa).
- **`calculadora-ui.js`**: Responsável pelas interações e atualizações na interface do usuário.
- **`tests/`**: Diretório destinado aos testes automatizados para garantir o bom funcionamento das funcionalidades.
- **`README.md`**: Documentação detalhada do projeto, incluindo instruções de uso e contribuições.

---

## 🖥️ Tecnologias Utilizadas

- **HTML5**: Estrutura básica da aplicação.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica de interação e cálculos.
- **Jest**: Testes automatizados para validação das funcionalidades.

---

## ⚙️ Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-simples.git
   
   cd calculadora-simples 

   open index.html
   ```
2. Execute os testes:
    ```bash
    npm install

    npm test
    ```
---

## 🎮 Como Usar
1. Clique nos botões da calculadora ou utilize as teclas do teclado para inserir números e operadores.
2. Pressione **=** ou clique no botão igual para calcular.
3. Use a tecla **C** ou o botão **C** para limpar o display.
4. Utilize a tecla **Backspace** para apagar o último caractere.

---

## 🧪 Testes Automatizados
Os testes foram desenvolvidos para verificar:

1. Tokenização de expressões matemáticas.
2. Conversão para notação polonesa reversa (pós-fixa).
3. Cálculo correto das expressões em pós-fixa.
4. Funções de UI como appendToDisplay, clearDisplay, entre outras.

---

## 🤝 Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade:
```bash
git checkout -b minha-nova-funcionalidade
```
3. Envie suas mudanças:
```bash
git push origin minha-nova-funcionalidade
```
4. Abra um Pull Request.
