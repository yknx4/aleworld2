import Nav from './Nav';
import LayoutElement from './LayoutElement';
import ThemifyIcon from './ThemifyIcon';
import Tag from './Tag';

const MenuTitle = Tag('span', 'title');
const MegaMenu = Tag('ul', 'mega-menu');
const MainContainer = Tag('div', 'main-container');
const Dropdown = Tag('li', 'has-dropdown');
const ImageTile = Tag('div', 'image-tile');
const Menu = Tag('ul', 'menu');
const Module = Tag('div', 'module');
const ModuleGroup = Tag('div', 'module-group');
const PageTitle = Tag('section', 'page-title');

export {
  Nav,
  Module,
  ModuleGroup,
  LayoutElement,
  ThemifyIcon,
  Menu,
  MegaMenu,
  Dropdown,
  MainContainer,
  PageTitle,
  MenuTitle,
  ImageTile,
};

export default LayoutElement;
