# MyProfile

企業向けのプロフィールサイト。Next.js + TypeScript + Tailwind CSS。

## ローカルで起動

```bash
npm install
npm run dev
```

http://localhost:3000 を開く。

## 内容の編集

表示する情報はすべて `src/data/profile.ts` にまとめている。
空文字・空配列の項目は画面上で「未入力」と表示される。

## 構成

- `src/data/profile.ts` — プロフィール情報（ここだけ書き換えればよい）
- `src/components/Sections.tsx` — 各セクション（自己紹介・スキル・経歴・制作物・連絡先）
- `src/components/Header.tsx` — ヘッダーとページ内ナビ
- `src/components/ui.tsx` — カード・タグ・見出しなどの共通部品
- `src/app/globals.css` — 色やフォントのテーマ（ライト／ダーク）

## 公開（予定）

GitHub に push し、Vercel でリポジトリをインポートする。
