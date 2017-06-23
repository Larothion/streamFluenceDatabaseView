// Include React
var React = require("react");

// Creating the Results component
var AddInfluencer = React.createClass({
  //Default States

 
  getInitialState: function() {
    return ({
    displayName: "",
    email: "",
    followers: "",
    totalViews: "",
    game: "",
    language: ""
    });
  },


  render: function() {
    return (
      <div id="page-wrapper">
            <div className="row">  
                <div className="col-lg-12">
                    <h1 className="page-header">Add an Influencer to the Database!</h1>
                </div>              
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <form role="form"  action="/api/addinfluencer" method="GET">
                                        <div className="form-group">
                                          <input type="text" name="influencer_name"/>
                                          <input id="addPerson" type="submit"/>                                       
                                        </div>
                                    </form>
                                 </div>
                           </div>
                        </div>
                   </div>
                </div>
            </div>
     </div>
    );
  }
});

//Export the component back for use in other files
module.exports = AddInfluencer;

