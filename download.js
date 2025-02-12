document.getElementById("downloadBtn").addEventListener("click", function(){
    // Defina o caminho do arquivo e o nome do arquivo
    const pastaUrl = "docs/Lucas_F_Lima_CV.pdf";
    const pastaName = "Lucas_F_Lima_CV.pdf";
    // Crie um elemento <a> e defina o atributo de download
    const a = document.createElement("a");
    a.href = pastaUrl;
    a.download = pastaName;
    // Adicione o elemento <a> ao corpo da página
    document.body.appendChild(a);
    // Clique no elemento <a> para iniciar o download
    a.click();
    // Remova o elemento <a> do corpo da página
    document.body.removeChild(a);
});