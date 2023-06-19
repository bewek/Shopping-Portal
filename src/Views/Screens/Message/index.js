import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import MessageComponent from './MessageComponent';
import {
  alogoImage,
  blogoImage,
  clogoImage,
  dlogoImage,
  elogoImage,
  flogoImage,
} from '../../../Assets/Images';

const message = [
  {company: 'A Company', description: 'abcdefghij', image: alogoImage},
  {company: 'B Company', description: 'abcdefghij', image: blogoImage},
  {company: 'C Company', description: 'abcdefghij', image: clogoImage},
  {company: 'D Company', description: 'abcdefghij', image: dlogoImage},
  {company: 'E Company', description: 'abcdefghij', image: elogoImage},
  {company: 'F Company', description: 'abcdefghij', image: flogoImage},
];

const Message = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'orange',
            textAlign: 'center',
            margin: 20,
          }}>
          Chats
        </Text>

        <View>
          {message.map((item, index) => {
            return (
              <MessageComponent
                key={index}
                image={item?.image}
                title={item?.company}
                description={item?.description}
              />
            );
          })}

          {/* <MessageComponent
            image={alogoImage}
            title={'A Company'}
            description={'abcdefghij'}
          />
          <MessageComponent
            image={blogoImage}
            title={'B Company'}
            description={'abcdefghij'}
          />
          <MessageComponent
            image={clogoImage}
            title={'C Company'}
            description={'abcdefghij'}
          />
          <MessageComponent
            image={dlogoImage}
            title={'D Company'}
            description={'abcdefghij'}
          />
          <MessageComponent
            image={elogoImage}
            title={'E Company'}
            description={'abcdefghij'}
          />
          <MessageComponent
            image={flogoImage}
            title={'F Company'}
            description={'abcdefghij'}
          /> */}
        </View>
      </View>
      <BottomTab focused={'Message'} />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
