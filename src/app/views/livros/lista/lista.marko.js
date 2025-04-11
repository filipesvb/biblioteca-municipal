// Compiled using marko@4.1.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag"));

function render(input, out) {
  var data = input;

  out.w("<html><body><a href=\"/\">Página inicial</a><a href=\"/livros/cadastro\"> - Cadastro</a><h1>Livros</h1><table><tr><td>ID</td><td>TITULO</td></tr>");

  marko_forEach(data.livros, function(livro) {
    out.w("<tr><td>" +
      marko_escapeXml(livro.id) +
      "</td><td" +
      marko_attr("title", (`${livro.descricao}`)) +
      ">" +
      marko_escapeXml(livro.titulo) +
      "</td><td><button" +
      marko_attr("data-id", (`${livro.id}`)) +
      " class=\"livro-button\" style=\"border: 1px solid; border-radius: 1rem; background-color: #cecece; font-size: 10px\"" +
      marko_attr("onclick", (`${() => {console.log('Ha')}}`)) +
      ">X</button></td></tr>");
  });

  out.w("</table><script>\n        const livrosBtns = document.querySelectorAll(\".livro-button\");\n        livrosBtns.forEach(btn => {\n            btn.addEventListener(\"click\", () => {\n                const id = btn.dataset.id\n                data.excluir(id)\n            })\n        })\n    </script>");

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
