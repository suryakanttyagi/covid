import React from 'react';
import { fetchIndiaData, onChangeInput } from '../actions/IndiaCasesActions';
import { connect } from 'react-redux';

class IndiaCasesScreen extends React.Component {
constructor(){
    super()
    this.state={

    }
}
componentWillMount(){
    this.props.fetchIndiaData()
    // this.interval = setInterval(() => {
    //     this.props.fetchIndiaData();
    //     }, 10000);
}
render(){
    if(this.props.indiaData)
    {
        return (
            <div className="container">
                <div className="row mb-4 justify-content-center">
                <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                        <div className="card-body shadow my-2">
                            <div className="d-flex justify-content-between">
                                <div className="card-text" style={{color: "#3d1aca"}}>{this.props.indiaData['totalconfirmed']}</div>
                                <div><i className="fa fa-globe fa-2x" aria-hidden="true"></i></div>
                            </div>
                            <div className="card-text">
                                Total
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                        <div className="card-body shadow my-2">
                            <div className="d-flex justify-content-between">
                                <div className="card-text" style={{color: "#71a0e6"}}>
                                    {
                                        this.props.indiaData['totalconfirmed'] - (this.props.indiaData['totaldeceased'] + this.props.indiaData['totalrecovered'])
                                    }
                                </div>
                                <div><i className="fa fa-head-side-cough fa-2x fa-flip-horizontal" aria-hidden="true"></i></div>
                            </div>
                            <div className="card-text">
                                Active
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                        <div className="card-body shadow my-2">
                            <div className="d-flex justify-content-between">
                                <div className="card-text" style={{color: "#fb6d6d"}}>{this.props.indiaData['totaldeceased']}</div>
                                <div><i className="fas fa-skull-crossbones fa-2x" aria-hidden="true"></i></div>
                            </div>
                            <div className="card-text">
                                Deaths
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                        <div className="card-body shadow my-2">
                            <div className="d-flex justify-content-between">
                                <div className="card-text" style={{color: "#63ea4b"}}>{this.props.indiaData['totalrecovered']}</div>
                                <div><i className="fas fa-syringe fa-2x" aria-hidden="true"></i></div>
                            </div>
                            <div className="card-text">
                                Cured
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-1 pr-3">
                <div className="d-flex">
                    <div className="pt-2 px-2 m-0">
                        <label htmlFor="filterInputId">Search</label>
                    </div>
                    <div className="">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter State Name"
                            value={this.props.filterInput} 
                            id="filterInputId" 
                            onChange={(e)=>this.props.onChangeInput(e.target.value)}
                        />
                    </div>
                </div>
                </div>
                <div className="text-center shadow table-responsive" style={{height:'470px'}}>
                    <table id="dtBasicExample" className="table table-sm" width="100%">
                        <thead>
                            <tr style={{backgroundColor: "#dcdcdc"}}>
                                <th className="th-sm">State</th>
                                <th className="th-sm">Confirmed</th>
                                <th className="th-sm">Active</th>
                                <th className="th-sm">Cured</th>
                                <th className="th-sm">Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.filteredData.map((item, index)=>{
                                    return (
                                        <tr key={'tr_' + index}>
                                            <td>{item['state']}</td>
                                            <td>{item['confirmed']}</td>
                                            <td>{item['active']}</td>
                                            <td>{item['recovered']}</td>
                                            <td>{item['deaths']}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    else
    {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{height:window.screen.height-120}}>
                Loading...
            </div>
        )
    }
}
}
function mapStateToProps(state) {
    const { indiaData, stateData, filteredData, filterInput } = state.indiacasesreducer;
    return {
        indiaData, stateData, filteredData, filterInput
    };
  }
  
  export default connect(mapStateToProps, {
    fetchIndiaData,
    onChangeInput
  })(IndiaCasesScreen);