// Compiled using marko@4.1.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag"));

function render(input, out) {
  var data = input;

  out.w("<html><body><a href=\"/\">Página inicial</a><a href=\"/livros\"> - Livros</a><h1>Cadastro de livros</h1><form action=\"/livros\" method=\"post\"><input type=\"hidden\" id=\"id\" name=\"id\"><div><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome\" name=\"nome\" placeholder=\"Nome do livro...\"></div><div><label for=\"preco\">Preço:</label><input type=\"text\" id=\"preco\" name=\"preco\" placeholder=\"50.00\"></div><div><label for=\"descricao\">Descrição</label><textarea cols=\"20\" rows=\"10\" name=\"descricao\" id=\"descricao\"></textarea></div><input type=\"submit\" value=\"Enviar\"></form>");

  await_reorderer_tag({}, out);

  init_components_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/taglibs/async/await-reorderer-tag",
      "marko/components/taglib/init-components-tag"
    ]
  };
