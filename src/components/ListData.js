import { useSelector } from "react-redux";
import listDataText from "./listDataText";


export default function ListData() {
	const stateAction = useSelector(state => state.counter.value);

	return (
		<ol>
			{listDataText.map((listData, ids) => {
				if (ids < stateAction) {
					return (
						<li key={ids}>{listData}</li>
					)
				}
			})}
		</ol>
	)
};
