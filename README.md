# Webライティングの教科書

Web上で読まれる文章を設計・執筆・改善するための実践教科書プロジェクトです。

## プロジェクト構成

```
web-writing-textbook/
├── README.md                 # プロジェクト概要（このファイル）
├── TABLE_OF_CONTENTS.md      # 目次・全体構成
├── .gitignore
│
├── docs/                     # 教科書本文
│   ├── 00-preface/           # まえがき・この本の使い方
│   ├── 01-introduction/      # 第1章：Webライティングの基礎
│   ├── 02-reader-media/      # 第2章：読者とメディアを理解する
│   ├── 03-structure/         # 第3章：情報設計と構成
│   ├── 04-headlines-leads/   # 第4章：見出しとリード文
│   ├── 05-seo-basics/        # 第5章：検索エンジンに最適化したライティングの基礎
│   ├── 06-data-analytics/    # 第6章：データの読み解きと精密化
│   ├── 07-trust-eeat/        # 第7章：信頼とE-E-A-T。情報の正当性を証明する
│   ├── 08-tone-voice/        # 第8章：トーン＆マナー
│   ├── 09-mobile-first/      # 第9章：モバイルファーストの文章
│   ├── 10-accessibility/     # 第10章：アクセシビリティ
│   ├── 11-rewrite-update/    # 第11章：リライトと更新
│   ├── 12-content-strategy/  # 第12章：あなたの物語戦略
│   ├── 13-workflow/          # 第13章：実践ワークフロー
│   └── 14-measurement/       # 第14章：測定と改善
│
├── appendix/                 # 付録
│   ├── checklists/           # チェックリスト
│   ├── tools/                # ツール一覧・使い方
│   └── samples/              # サンプル記事・ビフォーアフター
│
├── assets/                   # 画像・図表などのメディア
│   ├── images/
│   └── diagrams/
│
├── exercises/                # 演習・ワークシート
│   ├── chapter-exercises/    # 各章の演習問題
│   └── answer-keys/          # 模範解答・解説
│
├── templates/                # 執筆用テンプレート
│   ├── chapter-template.md   # 章のひな形
│   ├── article-outline.md    # 記事構成シート
│   └── style-guide.md        # 文体・表記ルール
│
├── glossary/                 # 用語集
│   └── terms.md
│
└── references/               # 参考文献・外部資料
    └── bibliography.md
```

## 各ディレクトリの役割

| ディレクトリ | 役割 |
|---|---|
| `docs/` | 教科書の本文。章ごとにディレクトリを分け、節はファイル単位で管理 |
| `appendix/` | 付録・実務で使えるチェックリストやサンプル |
| `assets/` | 図版・スクリーンショットなど本文から参照するメディア |
| `exercises/` | 読者向け演習と解答。章番号と対応させる |
| `templates/` | 執筆の統一と効率化のためのひな形 |
| `glossary/` | 専門用語の定義と索引 |
| `references/` | 引用文献・推奨リソースの管理 |

## ファイル命名規則

- 章ディレクトリ：`NN-slug/`（例：`05-seo-basics/`）
- 節ファイル：`NN-slug.md`（例：`01-what-is-web-writing.md`）
- 画像：`assets/images/chNN-description.png`

## はじめ方

1. [TABLE_OF_CONTENTS.md](./TABLE_OF_CONTENTS.md) で全体構成を確認する
2. 「本編」（第1〜7章）を順に読む。第7章末に「本編のあとがき」がある
3. 「応用編」（第8〜14章）で、トーン・モバイル・アクセシビリティ・リライト・戦略・ワークフロー・測定を学ぶ。第14章末に本書全体の「おわりに」がある
4. `templates/chapter-template.md` をベースに各章を執筆・改訂する
5. 演習は `exercises/chapter-exercises/` に章番号で追加する

## 執筆方針（案）

- 「実践重視」：理論とセットで、すぐ使えるチェックリスト・テンプレートを各章に含める
- 「読者前提」：Webライティング初心者〜中級者を想定
- 「更新前提」：検索エンジンへの最適化やプラットフォームの変化を踏まえ、章単位で改訂しやすい構成にする
