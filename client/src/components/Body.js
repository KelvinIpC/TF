import React, {Component} from 'react';
import {fetchRequest} from '../actions';

function addRow(result){
    return [
        <tr>
        <td>{result.data}</td>
        <td>Eclair</td>
        <td>$0.87</td>
        </tr>
    ];
}

class Body extends Component{
    renderContent(){
        let result = [];
        let apiCall = fetchRequest();
        for(let i = 0; i < 10; i++){
            result.push(addRow(i));
        }
        return result;
    }
    render(){
        return (
            <div>
                <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                </thead>

                <tbody>
                    {this.renderContent()}
                </tbody>
            </table>
            </div>
        );
    }
}

export default Body;