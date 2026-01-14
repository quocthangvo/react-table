import { TABLE_1_HEADER } from "../../utils/constants/DoubleTable/Table1";
import type { SearchParams } from "../../utils/interfaces/DoubleTable/SearchParam";

type Table1Props = {
  id: number;
  name: string;
  age: number;
  address: string;
};
const tableData1: Table1Props[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 22,
    address: "Hà Nội",
  },
  {
    id: 2,
    name: "Trần Thị B",
    age: 25,
    address: "TP. Hồ Chí Minh",
  },
  {
    id: 3,
    name: "Lê Văn C",
    age: 30,
    address: "Đà Nẵng",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    age: 28,
    address: "Cần Thơ",
  },
];

type Props = { searchItem: SearchParams };

const Table1 = ({ searchItem }: Props) => {
  const filteredData = tableData1.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchItem.name.toLowerCase()) &&
      item.address.toLowerCase().includes(searchItem.address.toLowerCase()) &&
      (searchItem.age === "" || item.age === Number(searchItem.age))
    );
  });
  return (
    <table>
      <thead>
        <tr>
          {TABLE_1_HEADER().map((header) => (
            <th key={header.state} className="border p-2">
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table1;
