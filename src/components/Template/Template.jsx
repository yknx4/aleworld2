import React, { Component } from "react";
import PropTypes from 'react-proptypes';

import {
  MainContainer,
} from '../layout';

import Header from './Header';
import Footer from './Footer';

export default class Template extends Component {
    render() {
      const {children} = this.props;
        return (
          <div>
            <Header />
            <MainContainer>
              {children}
              <Footer />
            </MainContainer>
          </div>
        );
    }
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
