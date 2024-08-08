import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const Screen2 = () => {
  return (
   

<View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://servisoftcorp.com/wp-content/uploads/2019/02/aplicaciones-moviles-apps-servisoftcorp.com_.jpg' }}
            style={styles.image}
          />
        

    </View>
  )
}
