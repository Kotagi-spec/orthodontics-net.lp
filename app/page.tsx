const concerns = [
  "地域検索で競合医院に埋もれている",
  "ポータル掲載だけでは違いが伝わらない",
  "自院HPのSEO順位が安定しない",
  "広告費を止めると反響も止まってしまう",
  "矯正治療の強みが患者に届いていない",
  "比較サイトで価格競争になりやすい",
];

const strengths = [
  {
    label: "AI検索引用",
    title: "ChatGPT/Gemini時代の回答候補へ",
    body: "患者がAIに地域や治療法を相談する前提で、記事が回答根拠として拾われやすい情報構造を設計します。",
  },
  {
    label: "エリアSEO",
    title: "市区町村・駅単位で認知を獲得",
    body: "医院名で検索される前の「地域名 × 矯正」の入口を増やし、比較前の接点を作ります。",
  },
  {
    label: "第三者記事",
    title: "広告ではなく情報として読まれる",
    body: "医院の強みを取材し、患者が知りたい文脈へ翻訳。売り込み感を抑えて信頼を高めます。",
  },
  {
    label: "スマホ特化",
    title: "縦型ストーリーで離脱を防ぐ",
    body: "通勤中や診療後の短時間でも読める構成で、認知から問い合わせまでの温度を落としません。",
  },
];

const stats = [
  ["85万人", "月間ユーザー数"],
  ["No.1", "矯正歯科の検索・紹介サイト利用者数"],
  ["市区町村/駅", "地域記事単位で展開"],
  ["AI引用", "回答根拠としての引用実績"],
];

const comparisons = [
  ["SEO", "中長期", "検索上位依存", "順位変動が大きい", "△"],
  ["SNS", "認知", "投稿接触", "運用負担が重い", "△"],
  ["広告", "即効性", "クリック接触", "停止すると反響も停止", "△"],
  ["ポータル", "比較検討", "条件比較", "価格競争になりやすい", "○"],
  ["PLUS", "認知から比較前", "第三者記事接触", "記事が蓄積資産化", "◎"],
];

const faqs = [
  ["費用はどのくらいですか？", "エリアや記事本数、運用範囲により最適な設計が変わります。まずは貴院の商圏と現在の集患状況を確認した上でご提案します。"],
  ["契約期間はありますか？", "短期の広告施策ではなく、記事を蓄積していく中長期の集患資産として設計します。詳細条件は資料でご確認いただけます。"],
  ["効果はいつ頃から見込めますか？", "公開直後の露出確認に加え、検索流入や記事閲覧データを見ながら改善します。地域性や競合状況により立ち上がりは異なります。"],
  ["競合医院も掲載されますか？", "地域メディアとして複数医院が掲載される場合があります。だからこそ、比較前に貴院の強みを認知させる記事設計が重要です。"],
  ["公開後の記事修正はできますか？", "取材内容の確認、修正、公開後の分析・改善相談に対応できます。診療方針や訴求変更に合わせた調整も可能です。"],
];

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${compact ? "sm:justify-center" : ""}`}>
      <a
        href="#contact"
        className="cta-shadow inline-flex min-h-14 items-center justify-center rounded-md bg-[#f9df38] px-6 py-4 text-center text-base font-bold text-[#2b2b2b] transition hover:-translate-y-0.5 hover:bg-[#ffe955]"
      >
        無料相談してみる
      </a>
      <a
        href="#contact"
        className="inline-flex min-h-14 items-center justify-center rounded-md border border-[#d97b8d]/35 bg-white px-6 py-4 text-center text-base font-bold text-[#c85770] transition hover:-translate-y-0.5 hover:border-[#d97b8d]"
      >
        資料をダウンロードする
      </a>
      <a
        href="#case"
        className="inline-flex min-h-14 items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-4 text-center text-base font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
      >
        掲載事例を見る
      </a>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold text-[#d97b8d]">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-[#26272b] md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-[#6b7280] md:text-lg">{body}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden pb-24 md:pb-0">
      <header className="relative bg-[#f7f3f4]">
        <div className="container grid min-h-[760px] items-center gap-10 py-8 md:grid-cols-[1.02fr_0.98fr] md:py-12">
          <div className="fade-up relative z-10">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <img src="/hero-reference.png" alt="" className="h-12 w-12 rounded-md object-cover object-left" />
              <div>
                <p className="text-xl font-bold tracking-normal text-[#26272b] md:text-2xl">矯正歯科ネット<span className="text-[#d97b8d]">PLUS</span></p>
                <p className="text-sm font-semibold text-[#6b7280]">歯科医師のための集患支援サービス</p>
              </div>
            </div>
            <p className="mb-5 inline-flex rounded-sm bg-[#d97b8d] px-5 py-3 text-base font-bold text-white md:text-xl">
              検索でも、AIでも、選ばれる医院へ。
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.22] text-[#26272b] md:text-7xl">
              比較される前に、<br />
              <span className="text-[#d97b8d]">“選ばれる医院”</span>になる。
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-9 text-[#334155]">
              患者が医院を比較する前の「知る・気になる」段階で接点を作る、矯正歯科医院向けの記事型集患メディア。
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["第三者視点の記事", "エリアSEO", "AI検索時代に対応"].map((item) => (
                <div key={item} className="rounded-md border border-white bg-white/86 px-4 py-4 text-center font-bold text-[#c85770] soft-shadow">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-9">
              <CtaButtons />
              <p className="mt-4 text-sm font-semibold text-[#6b7280]">医院負担を抑えて、取材から記事制作・公開後分析まで支援します。</p>
            </div>
          </div>
          <div className="fade-up delay-2 relative min-h-[420px] md:min-h-[640px]">
            <div className="absolute inset-x-2 bottom-0 top-6 rounded-md bg-white soft-shadow md:inset-y-8 md:left-0 md:right-0" />
            <img
              src="/hero-reference.png"
              alt="矯正歯科ネットPLUSのヒーローイメージ"
              className="absolute inset-0 h-full w-full rounded-md object-cover object-right md:object-center"
            />
            <div className="absolute bottom-6 right-4 rounded-full border border-white/70 bg-[#d97b8d]/92 px-7 py-8 text-center text-white soft-shadow md:right-8">
              <p className="text-sm font-bold">掲載ではなく</p>
              <p className="mt-1 text-2xl font-bold">選ばれる戦略</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white py-10">
        <div className="container">
          <div className="rounded-md border border-[#eadde1] bg-white p-5 soft-shadow md:p-8">
            <p className="mb-5 text-center text-xl font-bold md:text-2xl">こんなお悩みありませんか？</p>
            <div className="grid gap-3 md:grid-cols-3">
              {concerns.map((item) => (
                <div key={item} className="rounded-md bg-[#f7f3f4] px-4 py-4 text-sm font-bold leading-7 text-[#334155]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f7f3f4]">
        <div className="container">
          <SectionTitle
            eyebrow="EMPATHY"
            title="先生方が感じている集患の違和感は、患者行動の変化が原因です。"
            body="SEO順位、広告、ポータル掲載。どれも必要ですが、患者が医院名を知る前の接点が不足すると、比較テーブルの中で価格や距離だけで判断されやすくなります。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["SEOだけでは限界", "検索上位を取れても、地域や症例の入口が狭いと新規患者との接点が増えません。"],
              ["比較サイトで埋もれる", "同じ条件で並ぶと、医院の思想や診療体制より価格・場所が先に見られます。"],
              ["魅力が伝わらない", "自院HPでは語れていても、第三者視点で患者に届く形へ変換できていない医院が多いです。"],
            ].map(([title, body], index) => (
              <article key={title} className={`fade-up delay-${index + 1} rounded-md bg-white p-7 soft-shadow`}>
                <p className="mb-4 text-4xl font-bold text-[#d97b8d]">0{index + 1}</p>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 leading-8 text-[#6b7280]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            eyebrow="PATIENT JOURNEY"
            title="患者は「どこが良いか」の前に「どんな医院があるか」から探しています。"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-md border border-slate-200 bg-white p-6">
              <p className="mb-5 text-lg font-bold text-slate-500">従来の導線</p>
              <div className="grid gap-3">
                {["検索", "比較", "予約"].map((step) => (
                  <div key={step} className="rounded-md bg-slate-50 px-5 py-4 text-center font-bold text-slate-700">{step}</div>
                ))}
              </div>
            </div>
            <div className="rounded-md border-2 border-[#d97b8d] bg-[#fff8fa] p-6 soft-shadow">
              <p className="mb-5 text-lg font-bold text-[#c85770]">現在の導線</p>
              <div className="grid gap-3">
                {["検索", "AI検索", "地域記事", "認知", "興味", "比較", "問い合わせ"].map((step, index) => (
                  <div key={step} className={`rounded-md px-5 py-3 text-center font-bold ${index >= 2 ? "bg-white text-[#c85770]" : "bg-[#f7f3f4] text-[#334155]"}`}>
                    {step}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-sm font-bold text-[#6b7280]">PLUSは「地域記事」から「興味」までを作る施策です。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f7f3f4]">
        <div className="container">
          <SectionTitle
            eyebrow="WHAT IS PLUS"
            title="PLUSは比較サイトではなく、認知・興味喚起メディアです。"
            body="矯正歯科ネットが比較・検討段階を支えるなら、PLUSはその前に医院を知ってもらうための情報接点を作ります。"
          />
          <div className="grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-md bg-white p-8 soft-shadow">
              <p className="text-sm font-bold text-[#d97b8d]">矯正歯科ネットPLUS</p>
              <h3 className="mt-3 text-2xl font-bold">認知・興味段階</h3>
              <p className="mt-4 leading-8 text-[#6b7280]">地域記事、第三者視点、AI検索対応で「この医院、良さそう」という最初の接点を作る。</p>
            </div>
            <div className="flex items-center justify-center text-3xl font-bold text-[#d97b8d]">→</div>
            <div className="rounded-md bg-white p-8 soft-shadow">
              <p className="text-sm font-bold text-[#334155]">矯正歯科ネット</p>
              <h3 className="mt-3 text-2xl font-bold">比較・検討段階</h3>
              <p className="mt-4 leading-8 text-[#6b7280]">医院情報、条件、エリアを比較し、問い合わせ・予約へ進む患者の背中を押す。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionTitle eyebrow="STRENGTH" title="問い合わせにつながる、PLUSの4つの強み。" />
          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((item) => (
              <article key={item.label} className="rounded-md border border-[#eadde1] bg-white p-7 soft-shadow">
                <p className="mb-4 inline-flex rounded-sm bg-[#f7f3f4] px-3 py-2 text-sm font-bold text-[#c85770]">{item.label}</p>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-8 text-[#6b7280]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#fff8fa]">
        <div className="container">
          <SectionTitle
            eyebrow="ASSET"
            title="広告は止めたら消える。記事は医院の集患資産として蓄積される。"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-md bg-white p-7">
              <h3 className="text-2xl font-bold text-slate-600">広告</h3>
              <div className="mt-8 h-36 rounded-md bg-slate-100 p-5">
                <div className="h-20 w-full rounded-md bg-slate-300" />
                <p className="mt-4 text-center font-bold text-slate-500">停止すると露出も反響も止まる</p>
              </div>
            </div>
            <div className="rounded-md border-2 border-[#d97b8d] bg-white p-7 soft-shadow">
              <h3 className="text-2xl font-bold text-[#c85770]">PLUSの記事</h3>
              <div className="mt-8 grid h-36 grid-cols-4 items-end gap-3 rounded-md bg-[#f7f3f4] p-5">
                {[36, 58, 82, 112].map((height) => (
                  <div key={height} className="rounded-t-md bg-[#d97b8d]" style={{ height }} />
                ))}
              </div>
              <p className="mt-4 text-center font-bold text-[#c85770]">記事が増えるほど検索・AI・地域接点が蓄積</p>
            </div>
          </div>
          <div className="mt-8 rounded-md border border-[#eadde1] bg-white p-6 text-center soft-shadow">
            <p className="mb-5 text-lg font-bold text-[#334155]">貴院の商圏では、どの地域記事から接点を作れるか確認できます。</p>
            <CtaButtons compact />
          </div>
        </div>
      </section>

      <section id="case" className="section bg-white">
        <div className="container">
          <SectionTitle eyebrow="RESULT" title="信頼の土台になる実績を、ファーストタッチで伝える。" />
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-md bg-[#f7f3f4] p-6 text-center">
                <p className="text-4xl font-bold text-[#d97b8d] md:text-5xl">{value}</p>
                <p className="mt-3 text-sm font-bold text-[#334155]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-[#6b7280]">数値は掲載資料・運用レポート内で確認できる形式にし、LP上では信頼感を損なわない表現に留めます。</p>
        </div>
      </section>

      <section className="section bg-[#f7f3f4]">
        <div className="container">
          <SectionTitle eyebrow="SUPPORT" title="取材から公開後分析まで、医院負担を最小化。" />
          <div className="grid gap-4 md:grid-cols-4">
            {["プロライター取材", "確認・修正可能", "公開後分析", "運用改善支援"].map((item) => (
              <div key={item} className="rounded-md bg-white p-6 text-center font-bold soft-shadow">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionTitle eyebrow="COMPARISON" title="認知から比較導線まで持てる施策は限られています。" />
          <div className="overflow-x-auto rounded-md border border-[#eadde1]">
            <table className="w-full min-w-[760px] border-collapse bg-white text-left">
              <thead className="bg-[#f7f3f4]">
                <tr>
                  {["施策", "強い領域", "患者接点", "弱点", "認知〜比較導線"].map((head) => (
                    <th key={head} className="px-5 py-4 text-sm font-bold text-[#334155]">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row[0]} className={row[0] === "PLUS" ? "bg-[#fff8fa]" : "border-t border-slate-100"}>
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className={`px-5 py-4 text-sm ${row[0] === "PLUS" ? "font-bold text-[#c85770]" : "text-[#334155]"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-[#f7f3f4]">
        <div className="container">
          <SectionTitle eyebrow="FLOW" title="掲載までの流れはシンプルです。" body="診療の合間でも進めやすいよう、取材・制作・確認をこちらでリードします。" />
          <div className="grid gap-4 md:grid-cols-5">
            {["問い合わせ", "取材", "記事制作", "確認", "公開"].map((step, index) => (
              <div key={step} className="rounded-md bg-white p-6 text-center soft-shadow">
                <p className="text-3xl font-bold text-[#d97b8d]">{index + 1}</p>
                <p className="mt-3 font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="よくあるご質問" />
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-md border border-[#eadde1] bg-white p-5">
                <summary className="cursor-pointer text-lg font-bold">{question}</summary>
                <p className="mt-4 leading-8 text-[#6b7280]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-[#d97b8d] text-white">
        <div className="container text-center">
          <p className="mb-4 text-sm font-bold">FINAL CTA</p>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            「比較される医院」から、<br />
            “選ばれる医院”へ。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-9">
            今後の矯正集患を見据えるなら、まずは一度、貴院に合ったPLUSの活用方法をご相談ください。
          </p>
          <div className="mt-9">
            <CtaButtons compact />
          </div>
          <p className="mt-5 text-sm font-bold text-white/82">初回相談では、商圏・検索状況・競合表示をもとに活用余地を整理します。</p>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#eadde1] bg-white/96 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href="#contact" className="rounded-md bg-[#f9df38] px-3 py-3 text-center text-sm font-bold text-[#26272b]">無料相談</a>
          <a href="#contact" className="rounded-md bg-[#d97b8d] px-3 py-3 text-center text-sm font-bold text-white">資料請求</a>
        </div>
      </div>
    </main>
  );
}
