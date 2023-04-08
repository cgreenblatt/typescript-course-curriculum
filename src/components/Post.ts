export default function Post(): HTMLElement {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const id = urlSearchParams.get('id');
  const text = id
    ? `Post id=${id}`
    : 'Post id is required to fetch user stories';
  const postHeader = document.createElement('h1');
  postHeader.textContent = text;
  return postHeader;
}
