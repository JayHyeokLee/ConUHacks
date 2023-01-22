// Example of a data array that
// you might receive from an API
const data = [
{ date: "Anom", name: 19, price: "Male" },
]

function Table() {
return (
	<div className="Table">
	<table>
		<tr>
		<th>Date</th>
		<th>Name</th>
		<th>Price</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.date}</td>
			<td>{val.name}</td>
			<td>{val.price}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Table;

