# Webライティングの教科書 — プレビュー（最小構成）

編集長が `page.tsx` を直接編集して執筆する、シンプルな Next.js アプリです。

## 起動

```bash
cd web-app
npm install
npm run dev
```

→ http://localhost:3000/chapter-01/section-01

## 執筆パターン（各 h2 セクション）

```tsx
{/* 1. 要点 */}
<p className="rise-fade-in key-point font-bold">この節の要点：〜〜〜</p>

{/* 2. 図解（要点の直後） */}
<img
  src="/images/ファイル名.png"
  alt="図解の説明"
  className="rise-fade-in diagram-img my-8"
/>

{/* 3. 本文 */}
<p className="rise-fade-in">本文の続きをここに……</p>
```

## 画像

`public/images/` に配置し、`src="/images/ファイル名.png"` で参照。

## デザイン

- コンテナ幅: 65rem（`globals.css` の `--content-width`）
- アニメーション: `.rise-fade-in`（0.8秒の浮き上がるフェードイン）
