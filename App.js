import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import globalStyles from '@@styles/globalStyles';
import color from '@@constants/color';
import Button from '@@components/shared/Button';
import Landing from '@@components/screens/Landing';

export default function App() {
	return (
		<View style={globalStyles.container}>
			<Landing />
			<Button title="Start Recording" bg={color.BLACK} color={color.WHITE} />
			<StatusBar style="auto" />
		</View>
	);
}
