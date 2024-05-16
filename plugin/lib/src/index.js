import _ from "./MyComponent.wc.svelte";

function mountChatPlugin(props) {
  let dom = document.createElement("my-component");
  // @ts-ignore
  dom.publicKey = props.publicKey;
  window.onload = function () {
    document.body.appendChild(dom);
  };
}

export default mountChatPlugin;
