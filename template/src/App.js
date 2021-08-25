import React, { useState } from 'react';
import { Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  AppstoreAddOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import './App.less';

import PagesHome from './pages/home/Home';
import PagesDashboard from './pages/dashboard/Dashboard';
import PagesHelp from './pages/help/Help';
import PagesNotFound from './pages/not-found/NotFound';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedPageName, setSelectedPageName] = useState(null);
  const [selectedMenuKey, setSelectedMenuKey] = useState(['1']);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onMenuItemClick = (e) => {
    console.debug(`${e.key}_${e.domEvent.target.innerText} clicked`);
    setSelectedMenuKey([`${e.key}`]);
    setSelectedPageName(e.domEvent.target.innerText);
  };

  let location = useLocation();
  // console.log(location);

  return (
    // change the $basename as needed
    // <Router basename="/app">
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" data-testid="logo" />

        <Menu theme="dark" defaultSelectedKeys={selectedMenuKey} mode="inline">
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            id="option1"
            onClick={onMenuItemClick}
          >
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<AppstoreAddOutlined />}
            id="option2"
            onClick={onMenuItemClick}
          >
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item
            key="9"
            icon={<QuestionCircleOutlined />}
            onClick={onMenuItemClick}
          >
            <Link to="/help">Help</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to="/home">Home</Link>
            </Breadcrumb.Item>
            {location.pathname !== '/home' && (
              <Breadcrumb.Item>{selectedPageName}</Breadcrumb.Item>
            )}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              <Route exact path="/">
                <Redirect to="/home"></Redirect>
              </Route>
              <Route path="/home">
                <PagesHome />
              </Route>
              <Route path="/dashboard">
                <PagesDashboard />
              </Route>
              <Route path="/help">
                <PagesHelp />
              </Route>
              <Route path="*">
                <PagesNotFound />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    // </Router>
  );
  // }
};

export default App;
