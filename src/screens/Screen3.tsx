import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const Screen3 = () => {
  return (
    <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://naps.com.mx/blog/wp-content/uploads/2021/02/tipos-de-aplicaciones-m%C3%B3viles.jpg' }}
            style={styles.image}
          />
        

    </View>
  )
}
