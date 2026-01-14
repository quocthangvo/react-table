import type { TableProps } from "../../interfaces/Table"

export const TABLE_1_HEADER = () => {
    const TABLE_1_HEADER: TableProps[] = [
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
    return TABLE_1_HEADER;
}

