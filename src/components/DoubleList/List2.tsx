// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import QuizListTable from "./QuizList/QuizListTable";
// import { VideoViewQuizProps } from "../../../../utils/props/E-Learning/Report/VideoViewQuiz";
// import { IQuizList } from "../../../../utils/interfaces/E-Learning/Report/VideoViewQuiz/QuizList";
// import {
//   QUIZ_LIST_FILTER,
//   QUIZ_LIST_TABLE,
// } from "../../../../utils/constants/E-Learning/Report/VideoViewQuiz/QuizList";

// import Typography from "../../../common/Typography";
// import QuizListSearch from "./QuizList/QuizListSearch";

// const VideoViewQuizQuizList = ({ filter }: VideoViewQuizProps) => {
//   const [t] = useTranslation("global");
//   const [quizList, setQuizList] = useState<IQuizList[] | any>([]);
//   const [getOneQuizList, setGetOneQuizList] = useState<IQuizList | any>({});
//   const [page, setPage] = useState({ pages: 1, pageSize: 5, total: 0 });
//   const [activeSort, setActiveSort] = useState(QUIZ_LIST_FILTER);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [refeshKey, setRefreshKey] = useState<number>(1);
//   return (
//     <div>
//       <Typography
//         name={t("report.quiz_list")}
//         className={"text-xl font-bold subpixel-antialiased mb-5"}
//       />
//       <QuizListSearch
//         filter={filter}
//         page={page}
//         setPage={setPage}
//         quizList={quizList}
//         setQuizList={setQuizList}
//         currentPage={currentPage}
//         activeSort={activeSort}
//         getChoose={getOneQuizList}
//         refeshKey={refeshKey}
//         setRefreshKey={setRefreshKey}
//       />
//       <QuizListTable
//         header={QUIZ_LIST_TABLE(t)}
//         activeSort={activeSort}
//         setActiveSort={setActiveSort}
//         setGetChooseRow={setGetOneQuizList}
//         data={quizList}
//         page={page}
//         setPage={setPage}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         refeshKey={refeshKey}
//       />
//     </div>
//   );
// };

// export default VideoViewQuizQuizList;
