import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table ,Button} from 'antd';
import columns from './listColumns/MenuColumns';
import styles from './Menus.less';

const Menus = ({ menus, dispatch}) => {
	const {list} = menus;
	
	// 通过 rowSelection 对象表明需要行选择
	const rowSelection = {
	  onChange(selectedRowKeys, selectedRows) {
	  	debugger;
	    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	  },
	  onSelect(record, selected, selectedRows) {
	    console.log(record, selected, selectedRows);
	  },
	  onSelectAll(selected, selectedRows, changeRows) {
	    console.log(selected, selectedRows, changeRows);
	  },
	}
	const addBtnClick = ()=>{
		
	}

	return (
		<div>
			<div className={styles.tool_bar}>
				<Button type="primary" icon="plus" onClick={addBtnClick.bind(this)}>新增</Button>
				<Button icon="edit">编辑</Button>
				<Button type="ghost" icon="minus">删除</Button>
			</div>
			<Table size="middle" indentSize={10} dataSource={list} columns={columns} rowSelection={rowSelection}/>
		</div>
	)
}

Menus.propTypes = {};

function mapStateToProps({ menus }) {
  return {
    menus: menus,
  };
}

export default connect(mapStateToProps)(Menus);