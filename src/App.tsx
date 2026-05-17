export interface AppProps {
	message: string;
}

export const App = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

export default App;
