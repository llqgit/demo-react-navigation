import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
// import {View, Text, Button, Icon} from '@ant-design/react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs({screenConfig}) {
  let screenList = screenConfig.map(item => (
    <Tab.Screen
      name={item.name}
      component={item.component}
      key={item.name}
      options={{
        tabBarLabel: item.label,
        // tabBarIcon: ({color, size}) => (
        // <Icon name={item.icon} color={color} size={size} />
        // ),
      }}
    />
  ));
  return <Tab.Navigator>{screenList}</Tab.Navigator>;
}

function Navs({screenConfig}) {
  let screenList = screenConfig.map(item => (
    <Stack.Screen
      name={item.name}
      component={item.component}
      key={item.name}
      options={{
        title: item.label,
      }}
    />
  ));
  return <Stack.Navigator>{screenList}</Stack.Navigator>;
}

export class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('page info');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('page info props');
    //组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后;
    //每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
    return state;
  }
  render() {
    const Info = ({navigation}) => {
      return (
        <View>
          <Text>info page</Text>
          <Button
            onPress={() => navigation.navigate('detail')}
            title="go to detail page"
          />
        </View>
      );
    };
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="info"
          component={Info}
          options={{title: '信息页'}}
        />
      </Stack.Navigator>
    );
  }
}

export class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('page detail');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('page detail props');
    //组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后;
    //每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
    return state;
  }
  render() {
    const Detail = ({navigation}) => {
      return (
        <View>
          <Text>detail page</Text>
          <Button onPress={() => navigation.goBack()} title="back" />
        </View>
      );
    };
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{title: '详情页'}}
        />
      </Stack.Navigator>
    );
  }
}

export class MinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('page mine');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('page mine props');
    //组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后;
    //每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
    return state;
  }
  render() {
    const Mine = ({navigation}) => {
      return (
        <View>
          <Text>mine page</Text>
        </View>
      );
    };
    return (
      <Stack.Navigator>
        <Stack.Screen name="mine" component={Mine} options={{title: '我的'}} />
      </Stack.Navigator>
    );
  }
}

function MainNavs() {
  let screenConfig = [
    {name: 'home', label: '首页', icon: 'home', component: InfoPage},
    {name: 'detail', label: '详情', icon: 'home', component: DetailPage},
  ];
  return <Navs screenConfig={screenConfig} />;
}

function TabNavs() {
  let screenConfig = [
    {name: 'main', label: '主页', icon: 'home', component: MainNavs},
    {name: 'mine', label: '我的', icon: 'user', component: MinePage},
  ];
  return <Tabs screenConfig={screenConfig} />;
}

// 测试页面
export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <TabNavs />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
