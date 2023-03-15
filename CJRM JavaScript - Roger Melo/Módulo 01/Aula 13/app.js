const postTitle = "É bolacha ou biscoito";
const postAuthor = "Bia D'Emery";
const postComments = 15;

// usando concatenação
// const postMenssage =
//   "O post '" + postTitle + "', da" + postAuthor + "tem" + postComments + "comentários";

// usando template strings
const postMenssage = `O post "${postTitle}", da ${postAuthor} tem ${postComments} comentários`;

// criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>${postAuthor}</p>
    <span>Este post tem ${postComments} comentários</span>
`;

console.log(html);
