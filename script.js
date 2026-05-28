function openModal(modalId){

    const modal = document.getElementById(modalId);

    modal.style.display = "flex";

}

function closeModal(modalId){

    const modal = document.getElementById(modalId);

    modal.style.display = "none";

}

window.addEventListener("click", function(event){

    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {

        if(event.target === modal){

            modal.style.display = "none";

        }

    });

});

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        const modals = document.querySelectorAll(".modal");

        modals.forEach(modal => {

            modal.style.display = "none";

        });

    }

});