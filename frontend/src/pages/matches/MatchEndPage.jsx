// MatchEndPage.jsx
import "../../assets/styles/css/MatchEndPage.css";


export const MatchEndPage = () => {
  return(
    <div className="match-end-screen">

      <header className="match-end-header">
        交信状況
      </header>


      <main className="match-end-main">
        <div className="match-end-content-wrap">
          <div className="match-end-content-text">
            遭遇、お疲れ様でした。
            <br />
            今回の遭遇を評価しましょう。
          </div>
          <div className="match-end-content-btn">
            エイリアンレポートを書く
          </div>
        </div>
      </main>
    </div>
  );
};
