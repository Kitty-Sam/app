import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated as An, Text } from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

export const EmptyScreen = () => {
  const progress = useRef(new An.Value(0.5)).current;
  const scale = useRef(new An.Value(1)).current;

  useEffect(() => {
    An.loop(
      An.parallel([
        An.sequence([
          An.spring(progress, { toValue: 0.8, useNativeDriver: true }),
          An.spring(progress, { toValue: 0.5, useNativeDriver: true }),
        ]),
        An.sequence([
          An.spring(scale, { toValue: 2, useNativeDriver: true }),
          An.spring(scale, { toValue: 1, useNativeDriver: true }),
        ]),
      ]),
    ).start();
  });

  /*const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: translateX.value,
          },
          {
            translateY: translateY.value,
          },
        ],
      };
    });

    type ContextAnimationType = {
      translateX: number;
      translateY: number;
    };

    const panGestureEvent = useAnimatedGestureHandler<
      PanGestureHandlerGestureEvent,
      ContextAnimationType
    >({
      onStart: (event, context) => {
        context.translateX = translateX.value;
        context.translateY = translateY.value;
      },
      onActive: (event, context) => {
        translateX.value = event.translationX + context.translateX;
        translateY.value = event.translationY + context.translateY;
      },
      onEnd: () => {
        const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
        if (distance < (100 * 3.5) / 2 + 100 / 2) {
          translateX.value = withSpring(0);
          translateY.value = withSpring(0);
        }
      },
    });*/

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.circle}>
        {/*<PanGestureHandler onGestureEvent={panGestureEvent}>*/}
        <An.View
          style={[
            styles.figure,
            {
              opacity: progress,
              transform: [
                { scale },
                {
                  rotate: /*'20 deg' */ progress.interpolate({
                    inputRange: [0.5, 0.8],
                    outputRange: [
                      (1.5 * 2 * Math.PI).toString() + 'rad',
                      (1.5 * Math.PI).toString() + 'rad',
                    ],
                  }),
                },
              ],
              borderRadius: progress.interpolate({
                inputRange: [0.5, 0.8],
                outputRange: [25, 50],
              }),
            },
          ]}>
          <Text>Hello</Text>
        </An.View>
        {/*</PanGestureHandler>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  figure: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
  circle: {
    width: 100 * 3.5,
    height: 100 * 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100 * 2,
    borderWidth: 3,
    borderColor: 'orange',
  },
});
