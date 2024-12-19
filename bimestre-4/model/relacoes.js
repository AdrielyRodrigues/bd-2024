const Produto = require("./produto");
const Categoria = require("./categoria");
const Detalhe = require("./detalhe");
const Rotulo = require("./rotulo");
const ProdutoRotulo = require("./produtorotulo");

module.exports = () => {
    Categoria.hasMany(Produto, {
        foreingKey: "categoria_id",
    });
    Produto.belongsTo(Categoria, {
        foreingKey: "categoria_id",
    });
    Produto.hasMany(Detalhe, {
        foreingKey: "Categoria_id",
    });
    Detalhe.hasOne(Produto, {
        foreingKey: "produto_id",
    });

};