import { TABLE_2_HEADER } from "../../utils/constants/DoubleTable/Table2";
import type { SearchParams } from "../../utils/interfaces/DoubleTable/SearchParam";

type Table2Props = {
  id: number;
  name: string;
  age: number;
  address: string;
};
const tableData2: Table2Props[] = [
  {
    id: 1,
    name: "Hoàng Văn E",
    age: 35,
    address: "Hải Phòng",
  },
  {
    id: 2,
    name: "Vũ Thị F",
    age: 24,
    address: "Bình Dương",
  },
  {
    id: 3,
    name: "Nguyễn Văn G",
    age: 40,
    address: "Nghệ An",
  },
  {
    id: 4,
    name: "Bùi Thị H",
    age: 27,
    address: "Quảng Ninh",
  },
];

type Props = {
  searchItem: SearchParams;
};
const Table2 = ({ searchItem }: Props) => {
  const filteredData2 = tableData2.filter((item) => {
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
          {TABLE_2_HEADER().map((header) => {
            return (
              <th key={header.state} className="border p-2">
                {header.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {filteredData2.map((item) => (
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

export default Table2;
