import React, { Component } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { 
    LIST_ALL_CATEGORY
 } from "../../constants/actionTypes";
import CategoryRow from "./CategoryRow";


 const mapStateToProps = state => 
{
    console.log("mapStateToProps state",state)
    return  ({
        ...state.categoryList,
    });
}

const mapDispatchToProps = dispatch => ({
    onLoad: CategoryList => dispatch({ type: LIST_ALL_CATEGORY, CategoryList }),

});

class CategoryList extends Component {
    
    componentWillMount() {
        this.props.onLoad(agent.Category.all(0));
    }
    componentWillUpdate() {
        console.log('UPDATE MAP')
    }
    render() {
   
        var categoryLists = this.props.CategoryList;
        console.log("props",categoryLists)
         var elmcategory='';
        if(categoryLists !== undefined){
             elmcategory = categoryLists.map((category, index) => {
                return (
                <CategoryRow row= {category} />
                );
            })
        }
      
        return (

            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="fa fa-filter" />
                            Filter
          </div>
                        <div className="panel-body">
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="page-header">
                        <h1>Category <small>category list </small></h1>
                    </div>
                    {/* start: DYNAMIC TABLE PANEL */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="clip-list" />
                            Dynamic Table
          </div>
                        <div className="panel-body">
                            <table className="table table-striped table-bordered table-hover table-full-width" id="sample_1">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th className="hidden-xs">Creator</th>
                                        <th>Cost (                    USD)</th>
                                        <th className="hidden-xs"> Software license</th>
                                        <th>Current                    layout engine</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {elmcategory}
                                    <tr>
                                        <td>Amaya</td>
                                        <td className="hidden-xs">W3C,                    INRIA</td>
                                        <td>Free</td>
                                        <td className="hidden-xs">W3C</td>
                                        <td>Amaya</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* end: DYNAMIC TABLE PANEL */}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);