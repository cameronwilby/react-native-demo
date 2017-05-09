import React from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { getAllPosts } from '../actions/postActions';

class FeedScreen extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const Alert = this.props.posts.length ? null : (<Text>No posts!</Text>);
        const Posts = this.props.posts.map((post, i) => (
            <Text key={i}>{post.title}</Text>
        ));

        return (
            <View>
                {Alert}
                {Posts}                
            </View>
        )
    }
}

FeedScreen.navigationOptions = {
    tabBarLabel: 'Feed',
    tabBarIcon: () => {
        return null;
    }
};

const mapStateToProps = state => ({
    ...state.feed
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(getAllPosts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedScreen);