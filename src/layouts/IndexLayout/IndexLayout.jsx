import React, { Component, PropTypes } from 'react';
import { Menu, Breadcrumb, Icon ,Spin,Tooltip} from 'antd';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, Link } from 'react-router';
import classnames from 'classnames';
import styles from './IndexLayout.less';
import Header from '../../components/Header/Header';
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
      if (loading) {
        return <Spin />;
      }
      return(
        <Menu mode={collapse ?  "vertical" : "inline"} theme="dark" defaultSelectedKeys={['home']}>
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
                          <Menu.Item key={"child-menu-"+i}>
                              <Link to={child.link}> {child.text}</Link>
                          </Menu.Item>
                          )
                      
                    }
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
          <Header />
          
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              {children}
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
  
};

function mapStateToProps({ menus,layout }) {
  return {
    menus: menus,
    layout:layout
  };
}
export default connect(mapStateToProps)(IndexLayout);

