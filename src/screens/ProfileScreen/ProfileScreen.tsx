import React from 'react';
import { Image, FlatList } from 'react-native';
//components
import ProfileHeader from './ProfileHeader';
import { GridView } from '../../components';
//dummy
import user from "../../assets/data/user.json";


//PROFILE SCREEN
const ProfileScreen = () => {

    return (
        <GridView
            ListHeaderComponent={ProfileHeader}
            data={user.posts}
        />
    )
}


export default ProfileScreen