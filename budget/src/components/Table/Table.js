// Example of a data array that
// you might receive from an API
const data = [
{ date: "2023-01-04", name: "IGA", price: 81.78 },
{ date: "2023-01-06", name: "Kinton Ramen", price: 54.91 },
{ date: "2023-01-11", name: "Starbucks", price: 13.66 },
{ date: "2023-01-17", name: "Best Buy", price: 119.93 },
{ date: "2023-01-20", name: "Shell", price: 90.83 },
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

