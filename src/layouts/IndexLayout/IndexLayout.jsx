import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import { Router, Route, IndexRoute, Link } from 'react-router';
import classnames from 'classnames';
import styles from './IndexLayout.less';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const IndexLayout = ({collapse,onCollapseChange,children})=>{
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">
            {collapse ? "R" : "REFORDOM"}
          </div>
          <Menu mode={collapse ?  "vertical" : "inline"} theme="dark" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Icon type="home"/><span style={{display:collapse?"none":""}}>首页</span>
          </Menu.Item>
           <SubMenu key="sub3" className={collapse ? "collapse_submenu_title" : ""} title={collapse ? <Icon type="appstore" /> : <span><Icon type="appstore" />内容管理</span>}>
              <MenuItemGroup title={collapse ? "内容管理" : ""}>
                <Menu.Item key="1">菜单管理</Menu.Item>
                <Menu.Item key="2">选项10</Menu.Item>
                <Menu.Item key="3">选项11</Menu.Item>
                <Menu.Item key="4">选项12</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
           
          </Menu>
          
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
                {children}
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
  collapse: PropTypes.bool.isRequired,
  onCollapseChange:PropTypes.func.isRequired,
  children:PropTypes.element.isRequired
};


export default IndexLayout;

