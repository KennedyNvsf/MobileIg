import React, {useRef, useState} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
//components
import { FeedPost } from '../../components';
//dummy data
import posts from "../../assets/data/posts.json";



const HomeScreen = () => {

  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  }

  const onViewableItemsChange = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) => {
    if(viewableItems.length > 0) {
      setActivePostId(viewableItems[0].item.id);
    }
  }
  )

  return (  
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} isVisible={activePostId === item.id}/>}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChange.current}
    />
  )
};


export default HomeScreen