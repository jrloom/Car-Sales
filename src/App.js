import React from "react";

// Connect everything
import { connect } from "react-redux";

// Import actions for onClick functions (dispatches to Reducer), and passing to Connect
import { addItem, removeItem } from "./actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

// Pass props for Connect to work
// This could be destructured for additional clarity on what is being passed, but...
// ...depending on the project, that could get cumbersome
const App = props => {
  const removeFeature = item => {
    props.removeItem(item);
  };

  const buyItem = item => {
    props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// Everything UI element above that has props. attached to it is being mapped to state...
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

// ...and that state is being passed to Connect along with the actions
export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(App);

// Everything in Components is just props being passed down, so didn't comment those
