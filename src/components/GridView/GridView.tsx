import React from 'react'
import { FlatList} from 'react-native'
//types
import { IPost } from '../../types/models'
//components
import GridViewItem from './GridViewItem'

interface IGridView {
    data: IPost,
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null | undefined,
}

const GridView = ({data, ListHeaderComponent}: IGridView) => {
  return (
    <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={data}
        renderItem={({item}) => <GridViewItem post={item}/>}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        style={{marginHorizontal: -1}}
    />
  )
}

export default GridView