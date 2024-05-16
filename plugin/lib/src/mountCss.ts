export default function mountCSS() {
    let shadow = document.body.getElementsByTagName("my-component")[0].shadowRoot;
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = import.meta.env.VITE_CSS_URL;
    shadow.appendChild(link);
}