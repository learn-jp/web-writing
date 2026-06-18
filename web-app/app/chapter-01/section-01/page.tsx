/**
 * 第1章 第1節 — 編集長が直接編集するページ
 *
 * 執筆パターン（各 h2 セクション）:
 *   1. 要点  … <p className="rise-fade-in key-point font-bold">この節の要点：〜</p>
 *   2. 図解  … <img src="/images/ファイル名.png" className="rise-fade-in diagram-img my-8" />
 *   3. 本文  … <p className="rise-fade-in">〜</p>
 *
 * 画像は web-app/public/images/ に配置
 */
export default function Chapter01Section01Page() {
  return (
    <>
      <header className="reading-header">第1章 · 1節</header>

      <article className="reading-page article">
        <p className="article__label rise-fade-in">第1章 · 第1節</p>
        <h1 className="article__title rise-fade-in rise-fade-in--2">
          Webライティングとは何か
        </h1>

        <img
          src="/images/hero-typing-hands.png"
          alt="タイピングする手の写真"
          className="rise-fade-in rise-fade-in--3 diagram-img my-8"
          width={1040}
          height={624}
        />

        <p className="rise-fade-in">
          Webライティングと聞くと、まず「うまい文章を書くこと」を思い浮かべる人が多いでしょう。けれども、検索やSNSから記事を開いたのに、自分が一瞬でタブを閉じてしまった経験はありませんか。整備士が丁寧に説明しても、お客様が店の前で足を止めないのと同じで、本文が丁寧でも届かないのは、言葉ではなく「届け方」、つまり<strong>構造</strong>の問題かもしれません。構造を整えれば、検索・SNS・AIのどの入口から来ても、読者の手元に届きやすくなります。この節では、Web文章を手紙に例えて、なぜ構造が読者への敬意なのかを、ゼロから整理します。
        </p>

        <h2 className="rise-fade-in">手紙を書くということ</h2>

        <p className="rise-fade-in key-point font-bold">
          この節の要点：Webライティングは言葉を綴ることと、誰にどう届けるかを設計することの両方である。宛名・段落・章立ては、きれいに書くためではなく、受け取る人が迷わないための配慮である。
        </p>

        <p className="rise-fade-in">
          手紙を書いたことはありますか。言葉を綴るだけでなく、誰に届けるか、どう区切るかまで考えていた、そんな記憶があるかもしれません。Webライティングも、まったく同じ発想から始まります。
        </p>

        <h2 className="rise-fade-in">Webの手紙には、受け取り手が複数いる</h2>

        <p className="rise-fade-in key-point font-bold">
          この節の要点：Webの文章には「人間の読者」と「構造を解釈するコンピューター（検索エンジン・AI・読み上げ）」という複数の受け取り手がいる。人間のために書きながら、コンピューターに正しく構造化して渡すことがWebライティングの核心である。
        </p>

        <img
          src="/images/letter-flow.png"
          alt="Webの手紙が届くまでの流れ（執筆→構造の印→配達→読者）"
          className="rise-fade-in diagram-img my-8"
          width={1040}
          height={360}
        />

        <p className="rise-fade-in">
          Webの手紙には「受け取り手が複数」います。画面の向こうにいる読者と、その手紙を開封し、解釈し、再配達するコンピューターです。人間のために書きながら、コンピューターに正しく構造化して渡す。それがWebライティングの核心です。
        </p>

        <p className="rise-fade-in article__note">
          ※ 以降のセクションも、同じパターン（要点 → 図解 → 本文）でこのファイルに追記してください。
        </p>
      </article>
    </>
  );
}
