'use strict';

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { QIITA_COLOR } from './appearance';
import { store } from './store';
import registerScreens from './screens';
registerScreens(store, Provider);

// this will start our app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'すべての投稿',
            icon: require('../images/stream.png'),
            selectedIcon: require('../images/stream_selected.png'),
            screen: 'qiita.AllPosts',
            title: 'すべての投稿'
        },
        {
            label: 'プロフィール',
            icon: require('../images/person.png'),
            selectedIcon: require('../images/person_selected.png'),
            screen: 'qiita.Profile',
            title: 'プロフィール'
        },
    ],
    tabsStyle: {
        tabBarSelectedButtonColor: QIITA_COLOR,
    },
    appStyle: {
        orientation: 'portrait',
        forceTitlesDisplay: true
    },
});
