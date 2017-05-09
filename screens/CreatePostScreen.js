import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

class CreatePostScreen extends React.Component {    
    render() {
        return (
            <View>
                <Text>Create Post</Text>
            </View>
        )
    }
}

CreatePostScreen.navigationOptions = {
    tabBarLabel: 'Post',
    tabBarIcon: () => {
        return null;
    }
};

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    uploadPhoto
});

export default connect(mapStateToProps)(CreatePostScreen);