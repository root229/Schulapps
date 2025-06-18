function createMenu() {
    const menuHTML = `
      <div class="dropdown">
        <button onclick="toggleMenu()" class="menu-btn">☰</button>
        <div id="menuContent" class="menu-content">
          <a href="index.html">Startseite</a>
          <a href="impressum.html">Impressum</a>
          <a href="datenschutz.html">Datenschutz</a>
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
  
    // Klick außerhalb schließt das Menü
    document.addEventListener("click", function(event) {
      const menu = document.getElementById("menuContent");
      const button = document.querySelector(".menu-btn");
      if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
      }
    });
  }
  
  function toggleMenu() {
    const menu = document.getElementById("menuContent");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
  
  window.onload = createMenu;
