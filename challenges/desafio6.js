db.produtos.find(
    { $and: [{ curtidas: { $lt: 100, $gt: 10 } }] },
    { nome: 1, curtidas: 1, _id: 0 },
).pretty();