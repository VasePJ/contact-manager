import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";
import { async } from "q";

class Contact extends Component {
  state = { ShowContactInfo: false };
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { ShowContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() =>
                    this.setState({
                      ShowContactInfo: !this.state.ShowContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              {ShowContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone number: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contact;
