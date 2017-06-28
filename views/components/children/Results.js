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
            }
          ]
    };
  } 

 //start of render function
  render() {
    /*var createRow = (element) => {
      return <Info displayName={element.displayName}
        email={element.email} followers={element.followers}
        totalViews={element.totalViews} game={element.game} language={element.language}/>;
    };*/
         //stateless function for app container
  const Info = this.state.displayList.map((element, index) => {
        return (
  <Streamer key={index} displayName={element.displayName} email={element.email}
   followers={element.followers} totalViews={element.totalViews} game={element.game}
   language={element.language} />      
        

      );
  });

   return (
        <div>
              {Info}

       </div>
    );
  }

}



//exporting Software component
module.exports = Results;

