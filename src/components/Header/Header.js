import React from 'react'
import { Row, Col, Icon, Menu, Dropdown } from 'antd'
import styles from './Header.less'
import { Link } from 'react-router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends React.Component {
  constructor () {
    super()
  }

  handleClick () {

  }
  onCollapseChange (){

  }
  render () {
    //const {user} = this.props
    return (
      <header>
        <div className={styles.headerLeft} onClick={this.onCollapseChange}>
            <span><Icon type="bars" /></span>
        </div>
        <div className={styles.headerRight}>
          <Menu onClick={this.handleClick}
          mode="horizontal">
            <SubMenu title={<span><Icon type="user" />admin</span>}>
              <Menu.Item key="setting">个人设置</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="logout">注销</Menu.Item>
            </SubMenu>
            <Menu.Item key="mail">
              <Icon type="question-circle-o" />帮助
            </Menu.Item>
          </Menu>
        </div>
      </header>
    )
  }
}
