// CONFIGURAÇÃO DO WHATSAPP
const telefone = "5511989384882";
const mensagem = "Olá, Dra. Caroline! Gostaria de informações sobre o atendimento.";
const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = linkWhatsApp;
});

// ANO AUTOMÁTICO NO RODAPÉ
document.getElementById("year").textContent = new Date().getFullYear();

// MENU PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
  menuToggle.textContent = aberto ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

// ANIMAÇÃO SUAVE AO ROLAR A PÁGINA
const elementos = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  elementos.forEach((elemento) => observador.observe(elemento));
} else {
  elementos.forEach((elemento) => elemento.classList.add("visible"));
}