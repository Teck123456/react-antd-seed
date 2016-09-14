import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon ,Spin} from 'antd';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, Link } from 'react-router';
import classnames from 'classnames';
import styles from './IndexLayout.less';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const IndexLayout = ({dispatch,layout,children,menus})=>{
    const {collapse} = layout;
    const onCollapseChange = ()=>{
         dispatch({
          type: 'layout/change',
          payload: !collapse,
        });
    }

    const renderList = ()=>{
      const {list,loading} = menus;
      console.log(loading)
      console.log(list);
      if (loading) {
      return <Spin />;
    }
      return(
        <Menu mode={collapse ?  "vertical" : "inline"} theme="dark" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Icon type="home"/><span style={{display:collapse?"none":""}}>首页</span>
          </Menu.Item>
           {list.map((item,index)=>
              <SubMenu key={index} className={collapse ? "collapse_submenu_title" : ""} title={collapse ? <Icon type={item.icon} /> : <span><Icon type={item.icon} />{item.text}</span>}>
                  <MenuItemGroup title={collapse ? item.text : ""}>
                    {
                        item.children.map((child,i)=>
                          <Menu.Item key="{index}-1">{child.text}</Menu.Item>
                          )
                      
                    }
                  </MenuItemGroup>
                </SubMenu>
          )}
           
          </Menu>
        
      );
      
    }
    
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">
            {collapse ? "R" : "REFORDOM"}
          </div>
          { renderList() }
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header">
            <div className="ant-aside-action" onClick={onCollapseChange.bind(this)}>
              <Icon type="bars" />
            </div>
            <div className="header-menu">
              <span><Icon type="poweroff" /> 退出系统</span>
              <span><Icon type="question-circle-o" /> 帮助</span>
            </div>
          </div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div>
                
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
}

IndexLayout.propTypes = {
  /*children:PropTypes.element.isRequired*/
};

function mapStateToProps({ menus,layout }) {
  return {
    menus: menus,
    layout:layout
  };
}
export default connect(mapStateToProps)(IndexLayout);

