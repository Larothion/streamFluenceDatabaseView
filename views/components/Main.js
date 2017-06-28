// Include React
var React = require("react");

// Here we include all of the sub-components
var AddInfluencer = require("./children/AddInfluencer");
var Results = require("./children/Results");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  
  getInitialState: function() {
        return {
          currentState: <Results />
        }
      },

   renderAddInfluencer: function() {
    this.setState({ currentState: <AddInfluencer /> }) 
  },

  renderResults: function() {
    this.setState({ currentState: <Results />}) 
  },
  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
 
  // Here we render the function
  render: function() {
    return (
      <div className="container-fluid"> 
        <div className="row">
          <div className="col-lg-12 top-title">
            <h2 className="text-center"> <img className="logo" src="http://www.streamfluence.io/uploads/9/5/3/4/95348280/published/icon-landscaped_7.png?1491843667"/></h2>
            <p className="text-center">
              <em>Accept/Deny applicants or search through the StreamFluence database</em>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 nav-side"> 
               <div className="side-nav-outline">
                <div className="side-nav-buttons" onClick={this.renderResults}> <p> Applications</p> </div>
                <div className="side-nav-buttons"> <p> Database Search</p> </div>
                <div className="side-nav-buttons" onClick={this.renderAddInfluencer}> <p> Add Influencer</p> </div>
              </div>
          </div>
          <div className="col-lg-10 main-content">
             <div className="panelHeading">
                <div className="row">
                  <div className="col-md-3">
                    <h3 className="panel-title text-center">Username </h3>
                  </div>
                  <div className="col-md-2">
                    <h3 className="panel-title text-center">Email</h3>
                  </div>
                  <div className="col-md-1">
                    <h3 className="panel-title text-center">Followers</h3>
                  </div>
                  <div className="col-md-2">
                    <h3 className="panel-title text-center">Total Views</h3>
                  </div>
                  <div className="col-md-2">
                    <h3 className="panel-title text-center">Game</h3>
                  </div>
                  <div className="col-md-2">
                    <h3 className="panel-title text-center">Language</h3>
                  </div>
                </div>
          </div>
              {this.state.currentState}
         </div>
        </div>  
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
