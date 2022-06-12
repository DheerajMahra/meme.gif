import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import color from '@@constants/color';
import { fontSize, fontWeight, radius } from '@@constants/typography';

const ButtonProps = {
	title: PropTypes.string.isRequired,
	bg: PropTypes.string,
	color: PropTypes.string,
	outline: PropTypes.bool,
	fontSize: PropTypes.number,
	fontWeight: PropTypes.string,
	textAlign: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const Button = props => {
	let style = getStyles(props);

	return (
		<TouchableOpacity style={style.btn}>
			<Text style={style.btnTitle}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const getStyles = props =>
	StyleSheet.create({
		btn: {
			backgroundColor: props.bg || color.WHITE,
			width: props.width || '100%',
			padding: 20,
			borderRadius: props.radius || radius.sm,

			...(props.outline
				? {
						backgroundColor: color.TRANSPARENT,
						borderWidth: 2,
						borderColor: props.bg || color.WHITE
				  }
				: {})
		},
		btnTitle: {
			fontSize: props.fontSize || fontSize.sm,
			color: props.color || color.BLACK,
			fontWeight: props.fontWeight || fontWeight[700],
			textAlign: props.textAlign || 'center',

			...(props.outline
				? {
						color: props.bg || color.WHITE
				  }
				: {})
		}
	});

Button.propTypes = ButtonProps;
export default Button;
