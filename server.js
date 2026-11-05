import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bem vindo(a) à Central de Informações da Escola!");
});


//ex1.1
function saudacaoAssincrona(nome) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(`Olá, ${nome}! Bem-vindo ao Mensageiro Local.`);

        }, 2000);

    });

}


saudacaoAssincrona("Isabela")
    .then(resposta => console.log(resposta));

 //ex1.2
function obterMensagemPorId(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (id <= 0) {

                return reject(new Error("ID inválido: deve ser maior que zero"));

            } else {

                resolve({
                    id: id,
                    texto: "Mensagem do laboratório"
                });
                

            }

        }, 1000);

    });

}

obterMensagemPorId(1)
    .then(msg => console.log("Sucesso:", msg))
    .catch(err => console.error(err.message));

obterMensagemPorId(-2)
    .then(msg => console.log("Sucesso:", msg))
    .catch(err => console.error("Erro capturado:", err.message))

// ex 2.1

app.get("/saudacao-then", (req, res) => {
    saudacaoAssincrona("Isabela")
        .then((mensagem) => {
            res.send(mensagem);
        });
});


// Exercício 2.2
app.get("/mensagem-invalida-then", (req, res) => {
    obterMensagemPorId(-5)
        .then((msg) => {
            res.json(msg);
        })
        .catch((erro) => {
            res.status(500).json({
                erro: erro.message
            });
        });
});






app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});