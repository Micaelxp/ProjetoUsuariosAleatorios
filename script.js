function criarUsuariosAleatorios() {
    const quantidade = document.getElementById("quantidade").value;

    if (!quantidade || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    const xhr = new XMLHttpRequest();
    const url = `https://randomuser.me/api/?results=${quantidade}`;

    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = ""; // Limpar resultados anteriores

            data.results.forEach((perfil) => {
                const card = document.createElement("div");
                card.className = "card";

                const img = document.createElement("img");
                img.src = perfil.picture.large;
                img.alt = "Foto de perfil";

                const nome = document.createElement("p");
                nome.textContent = `${perfil.name.first} ${perfil.name.last}`;

                card.appendChild(img);
                card.appendChild(nome);
                resultado.appendChild(card);
            });
        } else {
            alert("Ocorreu um erro ao buscar os dados. Tente novamente.");
        }
    };

    xhr.onerror = function () {
        alert("Erro de conexão. Verifique sua internet.");
    };

    xhr.send();
}
