import { StyleSheet } from 'react-native';
import color from '@@constants/color';
import { fontSize } from '@@constants/typography';

const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.WHITE,
		justifyContent: 'center',
		padding: 30
	},
	text: {
		color: color.WHITE,
		fontSize: fontSize.md
	}
});

export default globalStyles;
