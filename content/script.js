const overrideCSS = `
  #left-sidebar-container {
    display: none !important;
  }

  #right-sidebar-container {
    display: none !important;
  }

  button[aria-label="Open user actions"] {
    display: none !important;
  }

  shreddit-join-button {
    display: none !important;
  }

  shreddit-gallery-carousel {
    display: none !important;
  }

  hr {
    display: none !important;
  }

  article {
    margin: 1.2rem 0 !important;
  }

  #login-button {
    display: none !important;
  }

  #expand-user-drawer-button {
    display: none !important;
  }

  #get-app {
    display: none !important;
  }

  reddit-header-action-items nav {
    border: none !important;
  }

  shreddit-post {
    padding: 1rem !important;
  }

  shreddit-post-overflow-menu {
    display: none !important;
  }
`;

const style = document.createElement("style");
style.textContent = overrideCSS;

document.head.appendChild(style);
