import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function PoppinsText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins' }]} />;
}

export function PoppinsLightText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppinslight' }]} />;
}
