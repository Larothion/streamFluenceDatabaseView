import React from 'react';



//start of component
var Results = React.createClass ({
   //objects of apps in the dashboard main panel
    getInitialState : function() {
     return {
         displayList: [
            {
                displayName: "Hotform", 
                email: "email@hotform.com",
                followers: "80,000",
                totalViews: "10,000,000",
                game: "Hearthstone",
                language: "en"
            },
            {
              displayName: "Squillakilla", 
              email: "email@squilla.com",
              followers: "10,000",
              totalViews: "20,000,000",
              game: "Dark Souls",
              language: "en"
            }
          ]
      }
    },

      //stateless function for app container
  var Info = (props) => {
        return (

        <div className="panel panel-default">
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
          <div className="panel-body">
          <div> 
                    <div className="row applicant-section">
                        <div className="col-md-3 applicant-data">
                          <h3 className="panel-title text-center">{props.displayName}</h3>
                        </div>
                        <div className="col-md-2 applicant-data">
                          <h3 className="panel-title text-center">{props.email}</h3>
                        </div>
                        <div className="col-md-1 applicant-data">
                          <h3 className="panel-title text-center">{props.followers}</h3>
                        </div>
                        <div className="col-md-2 applicant-data">
                          <h3 className="panel-title text-center">{props.totalViews}</h3>
                        </div>
                        <div className="col-md-2 applicant-data">
                          <h3 className="panel-title text-center">{props.game}</h3>
                        </div>
                        <div className="col-md-2">
                          <h3 className="panel-title text-center">{props.language}</h3>
                        </div> 
                    </div> 
                  <div>
                    <button className="btn-lg btn-success app-buttons" > Accepted </button>
                    <button className="btn-lg btn-danger app-buttons"> Declined </button>
                  </div>
            </div>
        </div>
        </div>

      );
},

 //start of render function
  render() {
    var createRow = (element) => {
      return <Info displayName={element.displayName}
        email={element.email} followers={element.followers}
        totalViews={element.totalViews} game={element.game} language={element.language}/>;
    };

   return (
        <div>
              {this.state.getInitialState.
                displayList.map(createRow)}

       </div>
    )
  },

});



//exporting Software component
module.exports = Results;






/*// Include React
var React = require("react");
var AddInfluencer = require("./AddInfluencer");

// Creating the Results component
var Results = React.createClass({
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

  newApplicant: function() {
      this.setState ({
        applicantInfo: [
          {
            displayName: ['Hotform',"PyroElementalist"]
          }, {
            email: ["email@hotform.com","Email@pyro.com"]
          }, {
            followers: ["80,000", "65,000"]
          }, {
           totalViews: ["10,000,000", "11,000,000"]
          }, {
            game: ["Hearthstone", "Dark Souls"]
          }, {
            language: ["en", "finland"]
          }
        ]
      });
  },
 
  appendApplicant: function appendApplicant(data) {
        var applicantData = this.state.data;
        applicantData.push(data);
        this.setState({ 
          displayName: applicantData.displayName,
          email: applicantData.email,
          followers: applicantData.followers,
          totalViews: applicantData.totalViews,
          game: applicantData.game,
          language: applicantData.language 
        });
    },

  renderApplicant: function renderApplicant() {
        //var applicantData = this.state.displayName.map(function (b) {
            return (
                <div> 
                  <div className="row applicant-section">
                      <div className="col-md-3 applicant-data">
                        <h3 className="panel-title text-center">{this.state.applicantInfo.displayName}</h3>
                      </div>
                      <div className="col-md-2 applicant-data">
                        <h3 className="panel-title text-center">{this.state.email}</h3>
                      </div>
                      <div className="col-md-1 applicant-data">
                        <h3 className="panel-title text-center">{this.state.followers}</h3>
                      </div>
                      <div className="col-md-2 applicant-data">
                        <h3 className="panel-title text-center">{this.state.totalViews}</h3>
                      </div>
                      <div className="col-md-2 applicant-data">
                        <h3 className="panel-title text-center">{this.state.game}</h3>
                      </div>
                      <div className="col-md-2">
                        <h3 className="panel-title text-center">{this.state.language}</h3>
                      </div> 
                  </div> 
                  <button className="btn-lg btn-success app-buttons" onClick={this.newApplicant}> Accepted </button>
                  <button className="btn-lg btn-danger app-buttons"> Declined </button>
                </div>
            )
    },

  
});

//Export the component back for use in other files
module.exports = Results;

*/
//on form submit we need the form to send us all the info in the form.
// We then need to do a Twitch API call and store that information in a database
// Then the front-end should display the Twitch_url, Email, followers, views, game, and language of the streamer

//Then need to have two pressable buttons.  
//One that accepts them, updates them to the data base, and sends an "accepted" email
//The other that denies them and sends them a "denial" email.


//https://stackoverflow.com/questions/35905988/react-js-how-to-append-a-component-on-click