import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class FusionBox extends Component {
  constructor() {
    super();
    this.state = {rect: {x: 1, y: 1}};
  }
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
render() {
    return (
      <svg viewBox= "0 0 10 10" ref={(svg) => this.svg = svg}>

        <rect
          x={this.state.rect.x}
          y={this.state.rect.y}
          width= "5"
          height= "5" 
          ref={(e) => this.svgRectElem = e}
          onMouseDown={(e) => this.startDrag(e,this.svgRectElem)} 
        />
      </svg>  
    );
  }

startDrag(event, draggedElem){
  event.preventDefault();
  let point = this.svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  point = 
      point.matrixTransform(this.svg.getScreenCTM().inverse());
  this.setState({dragOffest: {
    x: point.x - this.state.rect.x,
    y: point.y - this.state.rect.y,
  }});

  const mousemove = (event) => {
    event.preventDefault();
    point.x = event.clientX;
    point.y = event.clientY;
    let cursor = point.matrixTransform(this.svg.getScreenCTM().inverse());
    this.setState({rect: {
      x: cursor.x - this.state.dragOffest.x,
      y: cursor.y - this.state.dragOffest.y
    }});
  };

  const mouseup = (event) => {
    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
  };

  document.addEventListener("mousemove", mousemove);
  document.addEventListener("mouseup", mouseup);
};

}
/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FusionBox);

