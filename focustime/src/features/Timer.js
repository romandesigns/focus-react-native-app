import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { useKeepAwake } from 'expo-keep-awake';

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
    4 * ONE_SECOND_IN_MS,
  ];

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          onProgress={setProgress}
          onEnd={onEnd}
          isPaused={!isStarted}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressbar}>
        <ProgressBar
          progress={progress}
          color={colors.warm['4']}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            size={100}
            style={styles.roundedbutton}
            onPress={() => setIsStarted(true)}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            size={100}
            style={styles.roundedbutton}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton title="-" size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    flex: 0.4,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    color: colors.cool['1'],
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressbar: {
    paddingLeft: spacing.xl,
    paddingRight: spacing.xl,
  },
  task: {
    color: colors.cool['1'],
    textAlign: 'center',
  },
  timingWrapper: {
    flexDirection: 'row',
    flex: 0.1,
    paddingTop: spacing.xxl,
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedbutton: {
    backgroundColor: colors.warm['5'],
  },
});
