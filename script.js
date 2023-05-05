// [X] Iniciar o app
// [X] Pegar os dados do usuário
// [] Verificar inputs vazio
// [] Calcular a area do tringulo
// [] Mostrar o resultado para o usuário

function app() {
    let form = document.querySelector(".form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let newData = getValues();
        if (newData.base == "" || newData.altura == "") {
            window.alert("preencha os dados direito, seu animal");
        } else {
            calc(newData);
        }
    });


    let getValues = () => {
        let b = document.querySelector("#base");
        let h = document.querySelector("#altura");
        let data = {
            base: b.value,
            altura: h.value
        };
        return data;
    };
    let calc = (value) => {
        let result = (parseInt(value.base)) * (parseInt(value.altura)) / 2;
        ShowResultToUser(result);
    };
    let ShowResultToUser = (value) => {
        let p = document.querySelector("#result");
        p.innerHTML = `${value}`;
    };
}
    app()