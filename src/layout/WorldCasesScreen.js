import React from 'react';
import { fetchGlobalData, onChangeInput } from '../actions/WorldCasesActions';
import { connect } from 'react-redux';

class Content extends React.Component {
constructor(){
    super()
    this.state={

    }
}
componentWillMount(){
    this.props.fetchGlobalData()
    this.interval = setInterval(() => {
        this.props.fetchGlobalData();
      }, 50000);
}
render(){
    if(this.props.globalData)
    {
        return (
            <div className="container mt-4">
                {/* <div className="row my-2 mx-0 justify-content-center">
                    
                </div> */}
                <div className="row my-2 justify-content-center">
                <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                        <div className="card-body shadow my-2">
                            <div className="d-flex justify-content-between">
                                <div className="card-text" style={{color: "#3d1aca"}}>{this.props.globalData['TotalConfirmed']}</div>
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
                                        this.props.globalData['TotalConfirmed'] - (this.props.globalData['TotalDeaths'] + this.props.globalData['TotalRecovered'])
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
                                <div className="card-text" style={{color: "#fb6d6d"}}>{this.props.globalData['TotalDeaths']}</div>
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
                                <div className="card-text" style={{color: "#63ea4b"}}>{this.props.globalData['TotalRecovered']}</div>
                                <div><i className="fas fa-syringe fa-2x" aria-hidden="true"></i></div>
                            </div>
                            <div className="card-text">
                                Cured
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-4 mb-1 px-3">
                    <div className="pt-2 px-2 m-0">
                        <label htmlFor="filterInputId">Search</label>
                    </div>
                    <div className="w-25">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter Country Name"
                            value={this.props.filterInput} 
                            id="filterInputId" 
                            onChange={(e)=>this.props.onChangeInput(e.target.value)}
                        />
                    </div>
                </div>
                <div className="text-center shadow table-responsive" style={{height:'370px'}}>
                    <table id="dtBasicExample" className="table table-sm" width="100%">
                        <thead>
                            <tr style={{backgroundColor: "#dcdcdc"}}>
                                <th className="th-sm">Country</th>
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
                                            <td>{item['Country']}</td>
                                            <td>{item['TotalConfirmed']}</td>
                                            <td>{item['TotalConfirmed']- (item['TotalRecovered'] + item['TotalDeaths'])}</td>
                                            <td>{item['TotalRecovered']}</td>
                                            <td>{item['TotalDeaths']}</td>
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
            <div className="d-flex align-items-center justify-content-center" style={{height:window.screen.height/2}}>
                Loading...
            </div>
        )
    }
}
}
function mapStateToProps(state) {
    const { globalData, countriesData, filteredData, filterInput } = state.worldcasesreducer;
    return {
        globalData,
        countriesData,
        filteredData,
        filterInput
    };
  }
  
  export default connect(mapStateToProps, {
    fetchGlobalData,
    onChangeInput
  })(Content);