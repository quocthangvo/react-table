import { useTranslation } from "react-i18next";
import type { TableProps } from "../../../utils/interfaces/Table";
// import CourseApi from "../../api/Course/Course";

import imgWord from "../../../assets/images/word.png";
import imgPDF from "../../../assets/images/pdf.png";
import imgPPT from "../../../assets/images/ppt.png";
// import UserManual from "./components/UserManual";
import { useEffect, useState } from "react";

type Props = {
  header: TableProps[];
  data: Array<Record<string, any>>;
  activeRow: null | number | undefined;
  onActiveRow: (key: number, data: any) => void;
  setClicked?: any;
  setPoints?: any;
};

const TableBody = ({
  header,
  data,
  activeRow,
  onActiveRow,
  setClicked,
  setPoints,
}: Props) => {
  const [t] = useTranslation("global");
  const [getFilePDF, setGetFilePDF] = useState("");
  const [openModalFilePDF, setOpenModalFilePDF] = useState(false);

  const getFileName = async (value: string) => {
    // const response = await CourseApi.getFile(value);
    // const fileURL = URL.createObjectURL(response.data);
    // window.open(fileURL, "_blank");
    setOpenModalFilePDF(!openModalFilePDF);
    setGetFilePDF(value);
  };

  useEffect(() => {
    if (!openModalFilePDF) {
      setGetFilePDF("");
    }
  }, [openModalFilePDF]);

  return (
    <>
      <tbody>
        {data?.length === 0 ? (
          <tr>
            <td colSpan={header?.length} className="text-center px-6 py-4">
              {t("table.no_data")}
            </td>
          </tr>
        ) : (
          <>
            {data?.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? activeRow === index
                      ? "bg-cyan-600/90 text-white"
                      : "bg-white dark:bg-[#202940] dark:text-white"
                    : activeRow === index
                    ? "bg-cyan-600/90 text-white"
                    : "bg-slate-50 dark:bg-[#202940] dark:text-white"
                }
              transition-all ease-linear duration-100 border-b dark:border-none cursor-pointer`}
                onClick={() => onActiveRow(index, item)}
                onContextMenu={(e: any) => {
                  // console.log(e);
                  onActiveRow(index, item);
                  e.preventDefault();
                  setClicked((prevClicked: any) =>
                    index !== activeRow ? true : !prevClicked
                  );
                  setPoints({
                    x: e.pageX,
                    y: e.pageY,
                  });
                  // console.log("Right Click", e.pageX, e.pageY);
                }}
              >
                {header?.map((value, indexx) => (
                  <td className="px-6 py-4" key={indexx}>
                    {value.type === "file" ? (
                      <>
                        {/* {item[value.state]} */}
                        {item[value.state] && (
                          <button
                            className="flex flex-row gap-2 items-center"
                            onClick={() => getFileName(item[value.state])}
                          >
                            {["ppt", "pptx"].includes(
                              item[value.state].split(".")[1]
                            ) ? (
                              <>
                                <img
                                  src={imgPPT}
                                  alt="PPT"
                                  className="w-10 h-10"
                                />
                              </>
                            ) : ["docx"].includes(
                                item[value.state].split(".")[1]
                              ) ? (
                              <>
                                <img
                                  src={imgWord}
                                  alt="Word"
                                  className="w-10 h-10"
                                />
                              </>
                            ) : ["pdf"].includes(
                                item[value.state].split(".")[1]
                              ) ? (
                              <>
                                <img
                                  src={imgPDF}
                                  alt="PPT"
                                  className="w-10 h-10"
                                />
                              </>
                            ) : (
                              <div></div>
                            )}{" "}
                            Download
                          </button>
                        )}
                      </>
                    ) : value.type === "image" ? (
                      <img
                        src={item[value.state]}
                        alt={"image"}
                        className="w-32 h-20 object-fill"
                      />
                    ) : (
                      item[value.state]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </>
        )}
      </tbody>
    </>
  );
};

export default TableBody;
