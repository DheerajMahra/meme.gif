import { Text, StyleSheet, Image } from 'react-native';
import Camera from '@@assets/camera.png';
import color from '@@constants/color';
import { fontSize, fontWeight } from '@@constants/typography';

const Landing = () => {
	return (
		<>
			<Image source={Camera} style={styles.img} />
			<Text style={styles.heading}>
				All we want is fun
				{'\n'}
				and memes
			</Text>
			<Text style={styles.subheading}>
				Create meme gifs and share them with your network
			</Text>
		</>
	);
};

const styles = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
		marginBottom: 20,
		marginLeft: -20
	},
	heading: {
		fontSize: fontSize.lg,
		color: color.BLACK,
		fontWeight: fontWeight[700],
		marginBottom: 20
	},
	subheading: {
		fontSize: fontSize.md,
		color: color.GRAY,
		fontWeight: fontWeight[400],
		marginBottom: 50
	}
});

export default Landing;
