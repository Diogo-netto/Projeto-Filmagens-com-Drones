// Animação do drone da página INDEX
function animarDroneIndex() {
    const drone = document.querySelector('.imagem');
    if (drone && window.innerWidth > 768) {
        drone.animate([
            { transform: 'translateY(-5px)' },
            { transform: 'translateY(5px)' },
            { transform: 'translateY(-5px)' }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    }
}



// Detectar qual página estamos e aplicar a animação correta
window.onload = function () {
    if (document.body.classList.contains('index')) {
        animarDroneIndex();
    } else if (document.body.classList.contains('quemsomos')) {
        animarDroneQuemSomos();
    }
};
/* final do js animação drones da pagina index e quem somos */









// Abrir o modal e exibir a imagem 
const images = document.querySelectorAll('.clickable-image'); // Seleciona todas as imagens com a classe 'clickable-image'

images.forEach((image, index) => {
    const modal = document.getElementById(`modal${index + 1}`);
    const modalImg = document.getElementById(`modal-img${index + 1}`);
    const zoomMessage = document.getElementById(`zoom-message${index + 1}`); // Seleciona a mensagem "Clique aqui"
    
    // Quando uma imagem for clicada, o modal correspondente será exibido
    image.onclick = function() {
        modal.style.display = "block"; // Mostra o modal
        modalImg.src = this.src; // Define o src da imagem no modal
        modalImg.style.transform = "scale(1)"; // Reseta o zoom quando a imagem é aberta
    }

    // Fechar o modal ao clicar no botão x
    const close = modal.querySelector('.close');
    close.onclick = function() {
        modal.style.display = "none"; // Fecha o modal
    }

    // Mostrar a mensagem "Clique aqui" quando o mouse passa por cima da imagem
    image.addEventListener('mouseover', () => {
        zoomMessage.style.display = 'block'; // Exibe a mensagem
    });

    // Esconder a mensagem "Clique aqui" quando o mouse sai da imagem
    image.addEventListener('mouseout', () => {
        zoomMessage.style.display = 'none'; // Esconde a mensagem
    });
});

// Para dar zoom na imagem com a rolagem do mouse
const modalImages = document.querySelectorAll('.modal-content');
modalImages.forEach((img) => {
    let scale = 1; // Valor inicial do zoom

    img.addEventListener('wheel', function(event) {
        event.preventDefault(); // Previne o comportamento padrão da rolagem

        if (event.deltaY < 0) {
            // Se a bolinha de rolar for para cima (zoom in)
            scale += 0.1;
        } else {
            // Se a bolinha de rolar for para baixo (zoom out)
            scale -= 0.1;
            if (scale < 1) scale = 1; // Não deixa o zoom ficar abaixo do valor inicial
        }

        // Aplica o zoom na imagem
        this.style.transform = `scale(${scale})`;
    });
});

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

/* Final do js do moadal */




// IDs das setas (Rural e Urbana)
const scrollButtons = ['scroll-to-top', 'scroll-to'];




// Adiciona o evento de clique para cada botão encontrado
scrollButtons.forEach(id => {
    const button = document.getElementById(id); // Seleciona o botão pelo ID
    if (button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Scroll suave
            });
        });
    }
});

/* final js seta voltar ao topo */





/* js para conseguir dar zoom na galeria de imagens */
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    let scale = 1; // Escala inicial para o zoom




    // Exibe a imagem no lightbox ao clicar
    document.querySelectorAll(".photo-grid img").forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.remove("hidden");
            document.body.classList.add("lightbox-active");
            scale = 1; // Reseta o zoom para o padrão
            lightboxImg.style.transform = `scale(${scale})`;
        });
    });




    // Fecha o lightbox ao clicar fora da imagem
    lightbox.addEventListener("click", () => {
        lightbox.classList.add("hidden");
        document.body.classList.remove("lightbox-active");
    });

    // Controla o zoom usando a rolagem do mouse
    lightboxImg.addEventListener("wheel", (e) => {
        e.preventDefault(); // Previne o scroll da página
        const zoomSpeed = 0.1; // Velocidade do zoom
        if (e.deltaY < 0) {
            // Rolagem para cima - aumenta o zoom
            scale += zoomSpeed;
        } else {
            // Rolagem para baixo - reduz o zoom
            scale = Math.max(1, scale - zoomSpeed); // Evita valores menores que 1
        }
        lightboxImg.style.transform = `scale(${scale})`;
    });
});
/* final js zomm na galeria de imagens */




/* js para o Drowdown */
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.querySelector('.menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    

    
    // Toggle do menu principal (abrir e fechar o menu)
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });



    
    // Toggle dos dropdowns no mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        


        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Impede o link de funcionar normalmente
                dropdown.classList.toggle('active'); // Abre/fecha o dropdown
                


                // Fecha outros dropdowns abertos
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });



    
    // Fecha o menu ao clicar em um item (exceto dropdowns)
    const menuItems = document.querySelectorAll('.menu a:not(.dropdown a)');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menu.classList.remove('active'); // Fecha o menu ao clicar em um item
            }
        });
    });

    // Fecha o dropdown ao clicar fora dele (no mobile)
    document.addEventListener('click', function(e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target) && dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
            }
        });
    });


    
    /* final js dropdown */

    
    
});

















  const closeIcon = document.getElementById('close-icon');
  const menu = document.querySelector('nav.menu');

  closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
  });

