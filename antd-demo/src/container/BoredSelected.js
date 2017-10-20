import React, { Component } from 'react'
import {treeData} from '../data'
import {Layout, Menu, Breadcrumb, Icon, Row, Col, Avatar, Dropdown, TreeSelect } from 'antd'
import {TreeSelectTwo} from '../conponemt/selectTree'
import {EditableTable} from '../conponemt/table'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

const navMenu = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' >one</a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' >two</a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' >three</a>
    </Menu.Item>
  </Menu>
)
class BoredSelected extends Component {
  constructor (props) {
    super(props)
    this.state = {
      treeSelectValue: undefined,
      treeSelectValue2: undefined
    }
    this.selectTree = this.selectTree.bind(this)
    this.selectTree2 = this.selectTree2.bind(this)
  }
  selectTree (value) {
    this.setState({
      treeSelectValue: value
    })
  }
  selectTree2 (value) {
    console.log(value)
    this.setState({
      treeSelectValue2: value
    })
  }
  render () {
    return (
      <Layout>
        <Row className='user-header' type='flex' align='middle'>
          <Col span={4}>
            <Avatar size='large' style={{width: '100%'}} shape='square' src='http://teamtruss.com/wp-content/uploads/2016/08/Olympic-logo.png' />
          </Col>
          <Col span={1} offset={16}>
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
          </Col>
          <Col span={2}>hai!welcom</Col>
        </Row>
        <Header className='header'>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
      >
            <Menu.Item key='1'>nav 1</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
            <Dropdown overlay={navMenu}>
              <a className='ant-dropdown-link'>
                    hover here<Icon type='down' />
              </a>
            </Dropdown>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
        >
              <SubMenu key='sub1' title={<span><Icon type='user' />subnav 1</span>}>
                <Menu.Item key='1'>option1</Menu.Item>
                <Menu.Item key='2'>option2</Menu.Item>
                <Menu.Item key='3'>option3</Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' title={<span><Icon type='laptop' />subnav 2</span>}>
                <Menu.Item key='5'>option5</Menu.Item>
                <Menu.Item key='6'>option6</Menu.Item>
                <Menu.Item key='7'>option7</Menu.Item>
              </SubMenu>
              <SubMenu key='sub3' title={<span><Icon type='notification' />subnav 3</span>}>
                <Menu.Item key='9'>option9</Menu.Item>
                <Menu.Item key='10'>option10</Menu.Item>
                <Menu.Item key='12'>option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item> <Icon type='home' /></Breadcrumb.Item>
              <Breadcrumb.Item><Icon type='user' /> <span>用户</span></Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Row>
                <Col span={6}>
                  <TreeSelect
                    value={this.state.treeSelectValue}
                    treeData={treeData}
                    placeholder='选择一个你最爱吃的'
                    treeDefaultExpandAll
                    onChange={this.selectTree}
                    style={{width: 300}}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                />
                </Col>
                <Col span={6} offset={3}>
                  <TreeSelectTwo />
                </Col>
              </Row>
              <Row >
                <EditableTable />
              </Row>
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          try ©2016 Created by BigBigWen
        </Footer>
      </Layout>
    )
  }
}

export default BoredSelected
