import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { shape, integer, float } from 'prop-types';

export default function Result(props) {
  const { route } = props;
  const { s, a } = route.params;
  const erlang = Es(s, a);
  const sStr = (s === 1) ? `${s.toString()} server` : `${s.toString()} servers`;
  const aStr = (a <= 1.0) ? `${a.toString()} erlang` : `${a.toString()} erlangs`;
  const resultText = erlang.toString();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.result}>{`Traffic: ${aStr}`}</Text>
        <Text style={styles.result}>{`${sStr}`}</Text>
        <Text style={styles.result}>{`E_${s}(${a}) = ${resultText}`}</Text>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

Result.propTypes = {
  route: shape({
    params: shape({
      s: integer,
      a: float,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  content: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  result: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

function Es(s, a) {
  let es = 1.0;
  for (let i = 1; i <= s; i += 1) {
    es = (a * es) / (i + a * es);
  }
  return es;
}
