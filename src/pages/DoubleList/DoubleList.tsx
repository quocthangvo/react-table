// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { IVideoViewQuiz } from "../../../utils/interfaces/E-Learning/Report/VideoViewQuiz";
// import { COURSE_COMPLETION_BREADCURMB_DATA } from "../../../utils/constants/E-Learning/Report/CourseCompletionReport";

// import Breadcrumb from "../../../components/common/Breadcrumb";
// import Card from "../../../components/common/Card";
// import Typography from "../../../components/common/Typography";
// import VideoViewQuizSearch from "../../../components/E-Learning/Report/VideoViewQuiz/VideoViewQuizSearch";

// import VideoViewQuizTimeUsage from "../../../components/E-Learning/Report/VideoViewQuiz/VideoViewQuizTimeUsage";
// import VideoViewQuizQuizList from "../../../components/E-Learning/Report/VideoViewQuiz/VideoViewQuizQuizList";

// const VideoViewQuiz = () => {
//   const [t] = useTranslation("global");

//   const [filter, setFilter] = useState<IVideoViewQuiz>({
//     date: new Date().toISOString().slice(0, 10),
//     date_to: new Date().toISOString().slice(0, 10),
//     department: "",
//     employee: "",
//     refresh_key: 0,
//   });

//   return (
//     <React.Fragment>
//       <Breadcrumb items={COURSE_COMPLETION_BREADCURMB_DATA(t)} />
//       <Card>
//         <Typography
//           name={t("sidebar.video_view_and_quizz")}
//           className={"text-2xl font-bold subpixel-antialiased mb-5"}
//         />

//         <VideoViewQuizSearch setFilter={setFilter} />

//         <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 mt-10">
//           <div>
//             <VideoViewQuizTimeUsage filter={filter} />
//           </div>
//           <div>
//             <VideoViewQuizQuizList filter={filter} />
//           </div>
//         </div>
//       </Card>
//     </React.Fragment>
//   );
// };

// export default VideoViewQuiz;
// //
