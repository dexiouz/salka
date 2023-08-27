import React, {useContext, useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import AppWrapper from '../../../components/AppWrapper/AppWrapper';
import KeyboardScrollView from '../../../components/KeyboardScrollView/KeyboardScrollView';
import Box from '../../../components/Box';
import AppText from '../../../components/AppText/AppText';
import AppInput from '../../../components/AppInput/AppInput';
import FormWrapper from '../../../components/AppWrapper/FormWrapper';
import {useTheme} from '@react-navigation/native';
import AppBtn from '../../../components/AppBtn/AppBtn';
import AuthHeader from '../../../components/header/AuthHeader';
import useAuth from '../../../hooks/useAuth/useAuth';
import {setToken} from '../../../utils/storage';
import showMessage, {type} from '../../../utils/showMessage';

const Login = () => {
  const {signIn} = useAuth();
  const {colors} = useTheme();

  const [showPassword, setShowPassword] = useState(true);

  const loginValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required('Password is Required')
      .min(8, `Password must be at least 8 characters`)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
    username: yup.string().required('Username is required'),
  });

  initialValues = {
    password: '',
    username: '',
  };
  const login = async values => {
    if (!values.password || !values.username) {
      showMessage(type.ERROR, 'Please enter username and password correctly');
      return;
    }
    try {
      await setToken(values?.username);
      signIn(values?.username);
    } catch (err) {
      console.log(err);
      showMessage(type.ERROR, 'An error occured!');
    }
  };
  return (
    <KeyboardScrollView>
      <AppWrapper scroll>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialValues}
          onSubmit={values => login(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
            errors,
          }) => (
            <>
              <FormWrapper>
                <Box>
                  <AuthHeader title="Login" />
                  <AppInput
                    placeholder="Username"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                  />
                  {errors.username && (
                    <AppText mt={-10} mb={10} color={colors.redColor}>
                      {errors.username}
                    </AppText>
                  )}
                  <AppInput
                    secureTextEntry={showPassword}
                    showPassword={() => setShowPassword(prev => !prev)}
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  {errors.password && (
                    <AppText mt={-10} mb={10} color={colors.redColor}>
                      {errors.password}
                    </AppText>
                  )}
                  <AppBtn
                    width="100%"
                    center
                    title="Login"
                    disabled={!values.password || !values.username}
                    onPress={handleSubmit}
                  />
                </Box>
              </FormWrapper>
            </>
          )}
        </Formik>
      </AppWrapper>
    </KeyboardScrollView>
  );
};

export default Login;
