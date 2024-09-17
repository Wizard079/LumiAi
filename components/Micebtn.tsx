import React from 'react'
import { TouchableOpacity ,StyleSheet, Image , Text} from 'react-native'
type mypress = {
    giveOnPress : () => void
}
const Micebtn: React.FC<mypress> = ({ giveOnPress }) =>{
  return (
      <TouchableOpacity style={styles.button} onPress={giveOnPress}>
          <Image
              source={require('../assets/images/voice-recorder.png')
              }
               style={{ height: 40 , width:40}}
          ></Image>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        width: 80,
        height:80,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'yellow',
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 30,     
  }
});
export default Micebtn