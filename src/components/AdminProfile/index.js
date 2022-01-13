import React from "react";

const AdminProfile = props => {

  const { currentUser } = props;
  const { displayName, email } = currentUser;

  return (
    <div className="container">
      <div className="main-body">
        <div className="row" >
          <div className="col-md-7">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Display Name</h5>
                  </div>
                  <div className="col-sm-9 text-secondary">{displayName && displayName}</div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>
                  <div className="col-sm-9 text-secondary">{email && email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;