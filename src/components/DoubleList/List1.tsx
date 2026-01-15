// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { ITimeUsage } from "../../../../utils/interfaces/E-Learning/Report/VideoViewQuiz/TimeUsage";
// import { VideoViewQuizProps } from "../../../../utils/props/E-Learning/Report/VideoViewQuiz";
// import {
//   TIME_USAGE_FILTER,
//   TIME_USAGE_TABLE,
// } from "../../../../utils/constants/E-Learning/Report/VideoViewQuiz/TimeUsage";

// import Typography from "../../../common/Typography";
// import TimeUsageSearch from "./TimeUsage/TimeUsageSearch";
// import TimeUsageTable from "./TimeUsage/TimeUsageTable";

// const VideoViewQuizTimeUsage = ({ filter }: VideoViewQuizProps) => {
//   const [t] = useTranslation("global");
//   const [timeUsageList, setTimeUsageList] = useState<ITimeUsage[] | any>([]);
//   const [getOneTimeUsage, setGetOneTimeUsage] = useState<ITimeUsage | any>({});
//   const [page, setPage] = useState({ pages: 1, pageSize: 5, total: 0 });
//   const [activeSort, setActiveSort] = useState(TIME_USAGE_FILTER);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [refeshKey, setRefreshKey] = useState<number>(1);

//   return (
//     <div>
//       <Typography
//         name={t("report.video_watch_duration_list")}
//         className={"text-xl font-bold subpixel-antialiased mb-5"}
//       />
//       <TimeUsageSearch
//         filter={filter}
//         page={page}
//         setPage={setPage}
//         timeUsageList={timeUsageList}
//         setTimeUsageList={setTimeUsageList}
//         currentPage={currentPage}
//         activeSort={activeSort}
//         getChoose={getOneTimeUsage}
//         refeshKey={refeshKey}
//         setRefreshKey={setRefreshKey}
//       />
//       <TimeUsageTable
//         header={TIME_USAGE_TABLE(t)}
//         activeSort={activeSort}
//         setActiveSort={setActiveSort}
//         setGetChooseRow={setGetOneTimeUsage}
//         data={timeUsageList}
//         page={page}
//         setPage={setPage}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         refeshKey={refeshKey}
//       />
//     </div>
//   );
// };

// export default VideoViewQuizTimeUsage;
