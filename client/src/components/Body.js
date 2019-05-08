import React, {Component} from 'react';

function addRow(i){
    return [
        <tr>
        <td>{i}</td>
        <td>Eclair</td>
        <td>$0.87</td>
        </tr>
    ];
}

class Body extends Component{
    renderContent(){
        let result = [];

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