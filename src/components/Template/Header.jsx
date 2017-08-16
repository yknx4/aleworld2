import React, { Component } from "react";
import {
  Nav,
  Module,
  ModuleGroup,
  ThemifyIcon,
  Menu,
  Dropdown,
  MegaMenu
} from "../layout";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Nav>
        <Module className="left">
          <Link to="/">
            <h5 className="main-title">aleworld</h5>
          </Link>
        </Module>
        <Module className="widget-handle mobile-toggle right visible-sm visible-xs">
          <ThemifyIcon icon="menu" />
        </Module>
        <ModuleGroup className="right">
          <Module className="left">
            <Menu>
              <li>
                <Link to="/">Home</Link>
              </li>
              <Dropdown>
                <a href="//yknx4.github.io/blog">Blog</a>
                <MegaMenu>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </MegaMenu>
              </Dropdown>
            </Menu>
          </Module>
        </ModuleGroup>
      </Nav>
    );
  }
}
