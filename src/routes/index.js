import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

import AboutComponent from '../components/About';
import RemixIcon from 'react-native-remix-icon';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.appName}
          icon={() => <RemixIcon name="home-line" {...DefaultProps.icons}/>}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={AboutComponent} />
        </Stack>

        <Stack
          key="articlesList"
          title="Articles List"
          icon={() => <RemixIcon name="list-check" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={ArticlesList} />
          <Scene key="articlesSingle" component={ArticlesSingle} back />
        </Stack>

        <Stack
          key="form"
          title="Articles Form"
          icon={() => <RemixIcon name="add-circle-line" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="form" component={ArticlesForm} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
