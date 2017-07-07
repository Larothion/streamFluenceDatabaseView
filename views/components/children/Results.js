import React from 'react';
import Streamer from "./Streamer";



//start of component
class Results extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      displayList: [
            {
                displayName: "Botform", 
                email: "email@hotform.com",
                followers: "80,000",
                totalViews: "10,000,000",
                game: "Hearthstone",
                language: "Klingon"
            },
            {
              displayName: "Squillakilla", 
              email: "email@squilla.com",
              followers: "10,000",
              totalViews: "20,000,000",
              game: "Dark Souls",
              language: "en"
            },
            {
              displayName: "Deyusha", 
              email: "Deyusha@squilla.com",
              followers: "15,000",
              totalViews: "3,000,000",
              game: "League of Legends",
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
    this.handleRemove = this.handleRemove.bind(this);
  }




  handleRemove(event, i) {
    console.log('section deleted');
    var newDisplayList = this.state.displayList;
    newDisplayList.splice(i, 1);
    this.setState({displayList: newDisplayList});
  }



 //start of render function
  render() {
   return (
        <div>    
          {this.state.displayList.map((element, index) => {
                return (
          <Streamer key={index} displayName={element.displayName} email={element.email}
           followers={element.followers} totalViews={element.totalViews} game={element.game}
           language={element.language} onClick={this.handleRemove} />      
                 );
          })}; 
        </div>
    );
  }

}



//exporting Software component
module.exports = Results;

