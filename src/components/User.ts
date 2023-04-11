import { UserResponseT } from '../models/index';

export default function User(user: UserResponseT): HTMLElement {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const userHeader = document.createElement('h1');
  userHeader.textContent = user.user.id;
  return userHeader;
}
