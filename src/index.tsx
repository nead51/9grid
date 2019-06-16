import * as React from "react";	
 import { render } from "react-dom";	
import "./styles.css";	/*  the following is added by me: */


 import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';	
import { connect } from 'react-redux';	
import { Link } from 'react-router-dom'
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
   return( 
   /*
/*Nav bar   See https://reactstrap.github.io/components/navbar/ */

<div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ReactStrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
		      <NavLink href="https://photos.google.com/album/AF1QipOQcEF-gI2hl9e9a72WBl-TBA5wGrINS_CQG2hc">ShortCuts (Tab)
			</NavLink>
	      
	      </NavItem>
              <NavItem>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
<owl />

<Container>
	<script>*/ 
First Row
		/*</script>
	
		<svg xmlns="http://www.w3.org/2000/svg" 
		height="12" 
		width="1000"
		id="svg1759">
		<g id="RenderLayer_LineSet" >
		<rect
			opacity="1" 
			fill="grey"
			fillOpacity="1"
			stroke=""
			strokeWidth="0"
			strokeMiterlimit="4"
			strokeDasharray="none"
			strokeDashoffset="0"
			strokeOpacity="1"
			id="rect1984"
			width="2000"
			height="12"
			x="0"
		        y="0" />
			
			
			</g>
		  </svg>
	                                                         	
		
		
		
		
		
		<Row>
<Col>
	<h3><Badge color="primary" pill>FusionBox</Badge></h3>
      	<FusionBox/>
</Col>
<Col>
	<h3><Badge href="http://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/" color="warning" pill>UsingJs+SVG</Badge></h3>
</Col>
<Col>
	<h3><Badge color="primary" pill>CylinoidSVG</Badge></h3>    
	<CylinoidSvg/>
</Col>
</Row>
<script>*/ 
	Second Row
		/*</script>
	<svg xmlns="http://www.w3.org/2000/svg" 
	height="12" 
	width="1000"
	id="svg1759">
	<g id="RenderLayer_LineSet" >
	<rect
		opacity="1" 
		fill="grey"
		fillOpacity="1"
		stroke=""
		strokeWidth="0"
		strokeMiterlimit="4"
		strokeDasharray="none"
		strokeDashoffset="3"
		strokeOpacity="1"
		id="rect1984"
		width="2000"
		height="12"
		x="-80"
	        y="0" />
		
		
		</g>
	  </svg>
                                                         
<Row>
<Col>
	 <h3><Badge href="https://redq.io/blog/react-grid-layout/" color="warning" pill>React-Grid-Layout</Badge></h3>  
</Col>
<Col>
	 <h3><Badge href="https://reactjsexample.com/svg-animation-in-react-using-gsap/" color="warning" pill >React+GSAP</Badge></h3> 
</Col>
<Col>    
	<h3><Badge href="https://keep.google.com/" color="warning" pill >https://keep.google.com/</Badge></h3> 
</Col>
</Row>
<script>*/
	Third Row
	*/
</script>

	<svg xmlns="http://www.w3.org/2000/svg" 
	height="12" 
	width="1000"
	id="svg1759">
	<g id="RenderLayer_LineSet" >
	<rect
		opacity="1" 
		fill="grey"
		fillOpacity="1"
		stroke=""
		strokeWidth="0"
		strokeMiterlimit="4"
		strokeDasharray="none"
		strokeDashoffset="0"
		strokeOpacity="1"
		id="rect3"
		width="2000"
		height="12"
		x="0"
	        y="0" />
		
		
		</g>
	  </svg>
                                                         











<Row>
<Col>
	<h3><Badge  href="https://svg2jsx.herokuapp.com/" color="warning"> https://svg2jsx.herokuapp.com/ </Badge></h3> 
</Col>
<Col>
	<h3><Badge href="https://css-tricks.com/creating-svg-icon-system-react/" color="warning" pill >Svg-icon-system-react</Badge></h3>    
</Col>
<Col>
	<h3><Badge href="https://blog.rapid7.com/2016/05/25/building-svg-maps-with-react/" color="warning" pill >SVG MAP  </Badge></h3> 
</Col>

	
		<svg xmlns="http://www.w3.org/2000/svg" 
		height="12" 
		width="1000"
		id="svg1759">
		<g id="RenderLayer_LineSet" >
		<rect
			opacity="1" 
			fill="grey"
			fillOpacity="1"
			stroke=""
			strokeWidth="0"
			strokeMiterlimit="4"
			strokeDasharray="none"
			strokeDashoffset="0"
			strokeOpacity="1"
			id="rect1984"
			width="2000"
			height="12"
			x="0"
		        y="0" />
			
			
			</g>
		  </svg>








</Row>

</Container>
</div>
    );
  }
}

Table.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
size: PropTypes.string,
bordered: PropTypes.bool,
borderless: PropTypes.bool,
striped: PropTypes.bool,
dark: PropTypes.bool,
hover: PropTypes.bool,
responsive: PropTypes.bool,
// Custom ref handler that will be assigned to the "ref" of the inner <table> element
innerRef: PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.object
])
};
