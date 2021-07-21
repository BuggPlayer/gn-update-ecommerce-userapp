import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const OtpPhoneNo = props => {
  const [one, setOne] = useState('1');
  const [two, setTwo] = useState('2');
  const [three, setThree] = useState('3');
  const [four, setFour] = useState('4');
  const [oneFocus, setOneFocus] = useState(false);
  const [twoFocus, setTwoFocus] = useState(false);
  const [threeFocus, setThreeFocus] = useState(false);
  const [fourFocus, setFourFocus] = useState(false);
  // const refs = useRef(null);
  // console.log('refs', refs);

  useEffect(() => {
    // refs.one.focus();
  }, []);
  /////.
  const backspace = id => {
    if (id === 'two') {
      if (two) {
        setTwo('');
      } else if (one) {
        setOne('');
        refs.one.focus();
      }
    } else if (id === 'three') {
      if (three) {
        setThree('');
      } else if (two) {
        setTwo('');
        refs.two.focus();
      }
    } else if (id === 'four') {
      if (four) {
        setFour(' ');
      } else if (three) {
        setThree('');
        refs.three.focus();
      }
    }
  };

  // const nextspace = (id, text) => {
  //   if (id === 'one') {
  //     // this.setState({one: text}, () => {
  //     //   if (this.state.one) this.refs.two.focus();
  //     // });
  //     setOne(text => {
  //       if (one) refs.two.focus();
  //     });
  //   } else if (id === 'two') {
  //     this.setState({two: text}, () => {
  //       if (this.state.two) this.refs.three.focus();
  //     });
  //   } else if (id === 'three') {
  //     this.setState({three: text}, () => {
  //       if (this.state.three) this.refs.four.focus();
  //     });
  //   } else if (id === 'four') {
  //     this.setState({four: text});
  //   }
  // };

  let textInput0 = {
    placeholder: '',
    refValue: 'one',
  };
  let textInput1 = {
    placeholder: '',
    refValue: 'two',
  };
  let textInput2 = {
    placeholder: '',
    refValue: 'three',
  };
  let textInput3 = {
    placeholder: '',
    refValue: 'four',
  };

  let allInputs = [textInput0, textInput1, textInput2, textInput3];

  return (
    <View style={{flex: 1}}>
      {/* <View style={{flex: 0.1}}>
        <BackIcon onPress={() => this.props.navigation.navigate('SignUp')} />
      </View> */}

      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <Text style={styles.otpText}>Enter OTP !</Text>
        <Text style={styles.childText}>
          OTP has been sent to your Mobile No.
        </Text>
      </View>
      <View style={styles.container}>
        {allInputs.map(e => {
          let placeholder = e.placeholder;
          return (
            <View style={styles.shadowGetOtpStyle} key={e.refValue}>
              <TouchableOpacity>
                <View style={styles.LinearGradientBtn}>
                  <TextInput
                    maxLength={1}
                    // ref={e.refValue}
                    placeholder={placeholder}
                    returnKeyType={'next'}
                    keyboardType="number-pad"
                    // onKeyPress={({nativeEvent}) =>
                    //   nativeEvent.key === 'Backspace'
                    //     ? backspace(`${e.refValue}`)
                    //     : null
                    // }
                    // onChangeText={text => {
                    //   nextspace(`${e.refValue}`, text);
                    // }}
                    style={{
                      color: '#989DA2',
                      fontSize: 20,
                      fontWeight: 'bold',
                      paddingLeft: widthPercentageToDP(6),
                      paddingTop: heightPercentageToDP(3),
                      top: heightPercentageToDP(-0.8),
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={{marginTop: 20}}>
        {/* <If show={errors.otpverify}>
          <Text style={styles.errorText}>{errors.otpverify}</Text>
        </If> */}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Verify" onPress={{}} />
        <TouchableOpacity
        // onPress={() => this.props.resendOtp(this.props.phone)}
        >
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpPhoneNo;

const styles = StyleSheet.create({
  otpText: {
    color: 'black',
    top: heightPercentageToDP(4),
    left: widthPercentageToDP(8),
    fontSize: widthPercentageToDP(4),
    fontWeight: 'bold',
  },
  childText: {
    color: 'black',
    fontSize: widthPercentageToDP(3.3),
    top: heightPercentageToDP(4),
    left: widthPercentageToDP(8),
  },
  container: {
    flexDirection: 'row',
    flex: 0.15,
    justifyContent: 'space-evenly',
  },
  shadowGetOtpStyle: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    top: heightPercentageToDP(3.5),
    width: widthPercentageToDP(15),
    height: heightPercentageToDP(8.5),
  },

  mainContainer: {
    flex: 1,
  },

  buttonContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    top: heightPercentageToDP(30),
  },
  resendText: {
    color: 'black',
    fontSize: widthPercentageToDP(3.3),
    top: heightPercentageToDP(1),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
});
