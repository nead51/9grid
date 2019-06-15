import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import reactLogo from '../../images/react-logo.svg';
import rekitLogo from '../../images/rekit-logo.svg';
import * as actions from './redux/actions';
/*  the following is added by me: as I Need ReactStrap Components*/
import {
  Collapse,
  Badge,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Container,
  Row,
  Col } from 'reactstrap';
import { 
  Tween,
  Timeline } from 'react-gsap';
import FusionBox from './FusionBox';
import CylinoidSVG from "./CylinoidSVG.js";
/*this may be default or part of the reactstrap
*/
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {


function App() {
  return (
    <div className="App">
      <h1>9Grid</h1>
      <h2>Start editing to see some magic happen!</h2>
     <CylinoidSVG /> 




    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
