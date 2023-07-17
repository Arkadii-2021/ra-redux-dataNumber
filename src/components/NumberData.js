import React from "react";
import { dataNumber } from "../redux/actions";
import { useDispatch } from "react-redux";
import listDataText from "./listDataText";
import ListData from "./ListData";


export default function NumberData() {
	const dispatch = useDispatch();

	const onChange = (evt) => {
		const val = +evt.target.value;
		if (val >= 0 && val <= listDataText.length) {
			dispatch(dataNumber(val));
		}
	};	

	return (
		<>
			<b>Количество фактов о Star Wars: </b><input type="number" defaultValue="0" onChange={onChange} min="0" max={listDataText.length} />
			<ListData />
		</>
	)
};
