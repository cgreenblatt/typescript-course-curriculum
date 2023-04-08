export default function User(): HTMLElement {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const id = urlSearchParams.get('id');
  const text = id
    ? `User id=${id}`
    : 'User id is required to fetch user stories';
  const userHeader = document.createElement('h1');
  userHeader.textContent = text;
  return userHeader;
}
