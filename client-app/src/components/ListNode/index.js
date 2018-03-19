import React, { Component } from "react"
import photoNODE from "../../images/imageNODE.png"

export default class ListNode extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="p-3">
                    <a href="#"><img src={photoNODE} className="img-fluid" alt="Responsive image"/></a>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Ratio (%)</th>
                        <th scope="col">Price ($)</th>
                        <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>90</td>
                        <td>15</td>
                        <td><a href="#">+ Info</a></td>
                        </tr>
                        <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>67</td>
                        <td>15</td>
                        <td><a href="#">+ Info</a></td>
                        </tr>
                        <tr>
                        <td>Larry</td>
                        <td>Bird</td>
                        <td>99</td>
                        <td>22</td>
                        <td><a href="#">+ Info</a></td>
                        </tr>
                    </tbody>
                    </table>
              </div>
              <div className="col-sm-2"></div>
            </div>
        </div>
      </div>
    )
  }
}
