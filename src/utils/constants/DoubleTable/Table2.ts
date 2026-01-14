import type { TableProps } from "../../interfaces/Table"

export const TABLE_2_HEADER = () => {
    const TABLE_2_HEADER: TableProps[] = [
        {
            name: "ID",
            state: "ID",
        },
        {
            name: "Name",
            state: "Name",
        },
        {
            name: "Age",
            state: "Age",
        },
        {
            name: "Address",
            state: "Address",
        },
    ]
    return TABLE_2_HEADER;
}

