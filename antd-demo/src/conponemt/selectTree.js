import React from 'react'
import {treeData} from '../data'
import { TreeSelect } from 'antd';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

 export class TreeSelectTwo extends React.Component {
  state = {
    value: ['0-0-0'],
  }
  onChange = (value) => {
    console.log('onChange ', value, arguments);
    this.setState({ value });
  }
  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: '选择多个你做爱吃的',
      style: {
        width: 300,
      },
    };
    return <TreeSelect {...tProps} />;
  }
}