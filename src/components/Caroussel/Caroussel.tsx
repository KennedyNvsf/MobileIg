import React, {useState, useRef} from 'react';
import { View, Image, FlatList, useWindowDimensions, ViewabilityConfig, ViewToken } from 'react-native';

import colors from '../../themes/colors';
//components
import DoubleTap from '../DoubleTap/DoubleTap';


interface ICarousel {
    images: string[];
    doubleTap?: () => void;
}

const Caroussel = ({images, doubleTap = () => {}}: ICarousel) => {

    const {width} = useWindowDimensions();
    const [activeImgIdx, setActiveImgIdx] = useState(0);

    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51,
    }

    const onViewableItemsChange = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) => {
        if(viewableItems.length > 0) {
            setActiveImgIdx(viewableItems[0].index || 0);
        }
    }
    )

  return (
    <View>
        <FlatList
            horizontal
            pagingEnabled
            onViewableItemsChanged={onViewableItemsChange.current}
            viewabilityConfig={viewabilityConfig}
            data={images}
            renderItem={({item}) => 
                <DoubleTap onDoubleTap={doubleTap}>
                    <Image 
                        source={{uri: item}}
                        style={{
                            width,
                            aspectRatio: 1,
                        }}
                    />
                </DoubleTap>
            }
        />

        <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }}
        >
            {images.map((_, index) => (
                <View 
                    key={index}
                    style={{
                        width: 10, 
                        aspectRatio: 1, 
                        backgroundColor: activeImgIdx === index ? colors.primary : colors.white, 
                        borderRadius: 5, 
                        margin: 10, 
                        marginHorizontal: 5
                    }}
                />
            ))}
        </View>
    </View>
  )
}

export default Caroussel