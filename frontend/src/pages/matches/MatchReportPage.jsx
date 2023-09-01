// MatchReportPage.jsx
import "../../assets/styles/css/MatchReportPage.css";

import alienGradation  from "../../assets/images/matched_alien_gradation.svg";
import unknownUser     from "../../assets/images/icon_header_UnknownUser.svg";
import matchReportStar from "../../assets/images/match_report_star.svg";

export const MatchReportPage = () => {
  return(
    <div className="match-report-screen">

      <header className="match-report-header">
        交信状況
      </header>

      <main className="match-report-main">
        <div className="match-report-content-wrap">
          <div className="match-report-subtitle-wrap">
            <img src={alienGradation} alt="matched_alien_gradation"></img>
            <div className="match-report-subtitle-text">エイリアンを評価する</div>
          </div>

          <ReportCard name="hoge田 hoge男" info="20歳 男性" />
          <ReportCard name="ゆー" info="24歳 男性" />
          <ReportCard name="かつじ" info="20歳 男性" />
          <ReportCard name="Ryo" info="19歳 ノンバイナリー" />
          <ReportCard name="あいき" info="21歳 女性" />
          <ReportCard name="有賀 けいしゅう" info="22歳 男性" />

          <div className="register-report-btn">
            レポートを登録する
          </div>
        </div>
      </main>

    </div>
  );
};

const ReportCard = ( {name, info} ) => {
  return(
    <div className="report-card-wrap">
      <div className="report-card-upper-wrap">
        <img className="report-card-user" src={unknownUser}></img>
        <div className="report-card-upper-text-wrap">
          <div className="report-card-name">{name}</div>
          <div className="report-card-info">{info}</div>
        </div>
      </div>

      <div className="report-card-lower-wrap">
        <div className="lower-star-wrap">
          <img src={matchReportStar}></img>
          <img src={matchReportStar}></img>
          <img src={matchReportStar}></img>
          <img src={matchReportStar}></img>
          <img src={matchReportStar}></img>
        </div>

        <div className="lower-trouble-text">
          報告する
        </div>
      </div>
    </div>
  );
};
