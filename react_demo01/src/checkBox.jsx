import React, { Component } from 'react';


// function BoxList (props){
//     return (
//         <ul>
//             {props.list.map((item,index) => (
//                 <li key={index}>
//                     <input type="checkbox" value={item.age}/>
//                 </li>
//             ))}
//         </ul>
//     )
// }

class CheckBox extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                { name: 'aaa', age: 22 },
                { name: 'bbb', age: 23 },
                { name: 'ccc', age: 52 },
                { name: 'ddd', age: 62 }
            ],
            checkedList: [],
            checked: false,
            say: 'hello world!'
        }
        this.checkOne = this.checkOne.bind(this)
    }
    checkOne(index, e) {
        let checked = e.target.checked
        if (checked) {
            let item = this.state.list[index]
            this.setState(prevState => {
                return {
                    checkedList: prevState.checkedList.concat(item)
                }
            })
        } else {
            if (this.state.checkedList.length > 0) {
                this.setState(prevState => {
                    prevState.checkedList.pop()
                    return {
                        checkedList: prevState.checkedList
                    }
                })
            }
        }
    }
    checkAll(e) {
        let checked = e.target.checked
        this.setState({ checked: checked })
        if (checked) {
            this.setState({
                checkedList: this.state.list.map(item => item)
            })
        }else{
            this.setState({
                checkedList: []
            })
        }
    }
    render() {
        return (
            <div>
                <div><input type="text" value={this.state.say} readOnly /></div>
                <span>全选：<input type="checkbox" checked={this.state.checked} onChange={this.checkAll.bind(this)} /></span>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>
                            <input type="checkbox" value={item.age} onChange={this.checkOne.bind(this, index)} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default CheckBox