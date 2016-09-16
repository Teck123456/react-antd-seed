import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Menu, Breadcrumb, Icon ,Spin,Tooltip} from 'antd';
import { Link } from 'react-router';

import styles from "./AsideMenu.less";
const SubMenu = Menu.SubMenu;

const AsideMenu = ({menus,layout,dispatch})=>{
	const {list,selectedKey,openKeys} = menus;
	const {collapse} = layout;
	const handlerOnSelect = ({ item, key, selectedKeys })=>{
		// debugger;
		console.log("select...",item.props.children.props.to,key,selectedKeys);
		dispatch({
			type:"menus/select/change",
			payload:selectedKeys[0]
		});
	}
	const handlerOnOpen = ({ key, item, keyPath })=>{
		console.log("open...",key,item,keyPath);
		dispatch({
			type:"menus/open/change",
			payload:key
		})
	}
	const handlerOnClose = ({ key, item, keyPath })=>{
		console.log("close...",key,item,keyPath);
	}
	return (
		<aside className={styles.menuAside}>
        	<div className={styles.logo}>
        		LOGO
        	</div>
        	<div className={styles.menus}>
        		<Menu 
        			mode={collapse ?  "vertical" : "inline"} theme="dark"
        			selectedKeys={[selectedKey]}
        			onOpen={handlerOnOpen} 
        			onClose={handlerOnClose}
        			onSelect={handlerOnSelect} 
        			 >
		          <Menu.Item key="home">
		          
		            <Link to='/' >
		                    <Icon type="home"/>
		                <span style={{display:collapse?"none":""}}>首页</span>
		            </Link>
		          </Menu.Item>
		           {list.map((item,index)=>
		              <SubMenu key={"menu-"+index} className={collapse ? "collapse_submenu_title" : ""} title={collapse ? <Icon type={item.icon} /> : <span><Icon type={item.icon} />{item.text}</span>}>
		                    {
		                        item.children.map((child,i)=>
		                          <Menu.Item key={"menu-"+index+"-"+i}>
		                              <Link to={child.link}> {child.text}</Link>
		                          </Menu.Item>
		                          )
		                      
		                    }
		              </SubMenu>
		          )}
		          </Menu>
        	</div>
      	</aside>
	)
}

AsideMenu.propTypes = {

};

function mapStateToProps({ menus,layout }) {
  return {
    menus: menus,
    layout:layout
  };
}
export default connect(mapStateToProps)(AsideMenu);
