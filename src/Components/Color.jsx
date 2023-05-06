import React, { Component } from "react";
import "../Components/Accordion.css";
export default class Color extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: "Rwact is ficnsmv bbksjsjjsjxnnsmms",
          body: "fnfnnnnnnnnn",
        },
        {
          title: "nnn",
          body: "mnann",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="container" style={{ width: "900", height: "auto" , display: "flex" , justifyContent: "center", alignItems: "center", gap: "20px", }}>
          {this.getCard()}
        </div>
      </>
    );
  }

  getCard = () => {
    return this.state.items.map((n, i) => {
      return (
        <>
          <div className="card" style={{ width: "300", height: "500", boxShadow: "0px 0px 4px rgb(0,0,0,0.4)" }}>
            <div className="row">
            <h1>{n.title}</h1>
            <p>{n.body}</p>
            </div>
          </div>
        </>
      );
    });
  };
}
