import React, { Component } from 'react'
export default class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='resultListContainer'>
                <ResultList
                    resultList={this.state.results}
                />
            </div>
        )
    }
}

const ResultList = ({ resultList }) =>
    <div className="resultList">
        {resultList.map(result => <div className="row" key={result.id}>
            <table>
                <tr>
                    <td>{table.name}</td>
                    <td></td>
                </tr>
            </table>
        </div>)}
        }
    </div>