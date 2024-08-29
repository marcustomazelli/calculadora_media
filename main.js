const form =  document.getElementById('form-atividade');
const imgAprovado = '<img src= "./images/aprovado.png" alt= "emoji celebrando" />';
const imgReprovado = '<img src= "./images/reprovado.png" alt= "emoji decepcionado" />';
let linhas = '';

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha+= `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado} </td>`;
    linha += `</td>`;

    linhas += linha;

    const corpoTab = document.querySelector('tbody');
    corpoTab.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNomeAtividade.value = '';

});