
const btn = document.getElementById("btn-post")

const form = document.getElementById("form-post")

const URL_API_BASE = "https://gabrielbosio.pythonanywhere.com/reserva/"


        function limpiarModal(){
            document.querySelector(".desde").value = ""
            document.querySelector(".hasta").value = ""
            document.querySelector(".cant").value = ""
        }

    btn.addEventListener(
        "click", (e) => {
            e.preventDefault()
            fetch(URL_API_BASE,{
                method: 'POST',
                body: new FormData(form)
            }).then(res => alert("Reserva Creada Con Exito")).then(e => limpiarModal())
            .catch(error => console.log({error}))
        }
    )