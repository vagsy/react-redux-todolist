// import React, { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

// UI 组件，无状态组件，提升性能
const TodoList = (props) => {
  const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;

  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={() => {handleDelete(index)}}>{ item }</li>
          })
        }
      </ul>
    </div>
  )
}


// class TodoList extends Component {
  
//   render() {

//     const { inputValue, list, changeInputValue, handleClick, handleDelete } = this.props

//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={changeInputValue} />
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return <li key={index} onClick={() => {handleDelete(index)}}>{ item }</li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },
    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action);
    }
  }
}

// connect 返回的是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
