import React from "react";

const Streamer = function(props) { 

return (
  <div className="panel panel-default">
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
}

export default Streamer;