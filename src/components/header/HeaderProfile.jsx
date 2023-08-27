import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import Box from '../Box';
import AppText from '../AppText/AppText';
import Subtitle from '../Subtitle/Subtitle';
import {useNavigation, useTheme} from '@react-navigation/native';
import {ROUTES} from '../../constants';
import {useSelector} from 'react-redux';

const HeaderProfile = ({style}) => {
  const {userDetails} = useSelector(state => state?.userSlice);
  const {colors} = useTheme();
  const navigation = useNavigation();
  const fullName = `${userDetails?.firstName} ${userDetails?.lastName}`;

  return (
    <Box row center style={[style]}>
      <UserAvatar
        size={35}
        name={fullName}
        bgColor={colors.primaryLight}
        textColor={colors.black}
      />
      <Box ml={10} top={5}>
        <AppText bold size={16.5} white>
          Hi, {userDetails?.firstName}
        </AppText>
        <TouchableOpacity onPress={() => {}}>
          <Subtitle size={9.9} color={'white'}>
            View profile
          </Subtitle>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default HeaderProfile;
