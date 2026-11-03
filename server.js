//ex1
function saudacaoAssincrona(nome) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(`Olá, ${nome}! Bem-vindo ao Mensageiro Local.`);

        }, 2000);

    });

}


saudacaoAssincrona("Isabela")
    .then(resposta => console.log(resposta));

 //ex2
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