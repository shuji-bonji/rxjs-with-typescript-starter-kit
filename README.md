# RxJS with TypeScript 学習環境構築

このセクションでは、[RxJS with TypeScript](https://github.com/shuji-bonji/RxJS-with-TypeScript)での学習用の開発環境構築方法について説明します。

## 必要なソフトウェア

開発を始める前に、以下のソフトウェアをインストールしてください。

- **Node.js**: バージョン 18.0.0 以上
- **npm** または **yarn**: パッケージ管理ツール
- **Git**: バージョン管理システム
- **エディタ**: Visual Studio Code（推奨）、または他のお好みのエディタ

## 開発環境のセットアップ

### Node.js と npm のインストール

1. [Node.js 公式サイト](https://nodejs.org/)から最新の LTS バージョンをダウンロードしてインストール
2. インストールが完了したら、以下のコマンドでバージョンを確認
   ```bash
   node -v
   ```

### Git のインストール

1. [Git 公式サイト](https://git-scm.com/)からお使いの OS に対応したバージョンをダウンロードしてインストール
2. インストールが完了したら、以下のコマンドでバージョンを確認
   ```bash
   git --version
   ```

### Visual Studio Code のセットアップ

1. [Visual Studio Code 公式サイト](https://code.visualstudio.com/)からインストーラをダウンロードしてインストール
2. 以下の推奨拡張機能をインストール
   - ESLint
   - Prettier

## プロジェクトのセットアップ

### リポジトリのクローン

```bash
# リポジトリをクローン
git clone git@github.com:shuji-bonji/rxjs-with-typescript-starter-kit.git

# プロジェクトディレクトリに移動
cd rxjs-with-typescript-starter-kit

# (オプション) リモートリポジトリの変更 ※ 自身のリモートリポジトリに変更する場合行います。
git remote remove origin
git remote add origin https://github.com/your-username/your-project.git

```

### Githubの 「Use this template」 を利用する

テンプレートとして、自身のリポジトリにコピーして利用することも可能です。

- [ここ](https://github.com/shuji-bonji/rxjs-with-typescript-starter-kit)にアクセスする
- `rxjs-with-typescript-starter-kit`リポジトリページの左上に「Use this template」を押し、`Create new repository`を選らぶ。


### 依存関係のインストール

```bash
# npm を使用する場合
npm install
```

## 開発サーバーの起動

```bash
# npm を使用する場合
npm run dev
```

開発サーバーが起動すると、以下のように表示されるため、`local:`のURLを参照してください。
```sh
% npm run dev

> rxjs-with-typescript-starter-kit@0.0.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v6.3.1  ready in 99 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## 便利なコマンド

以下のコマンドを使用して開発を効率化できます。

```bash
# ビルド
npm run build

# テスト（1度のみ）
npm run test

# テスト（更新都度実行する）
npm run test:watch

# 本番環境でのプレビュー
npm run preview
```

## プロジェクト構造

### プロジェクトの主要なディレクトリとファイルの概要

```
rxjs-with-typescript-starter-kit/
├── docs/          # ドキュメントディレクトリ
├── public/        # 静的ファイル
├── src/           # ソースコード
│   ├── assets/    # 画像、フォントなどのアセット
│   ├── components/# コンポーネント
│   ├── layouts/   # レイアウト
│   ├── styles/    # グローバルスタイル
│   ├── types/     # カスタムTypeの格納先（index.d.tsに定義したタイプを`export * from './hoge-types'`など記述登録しておきます。
│   └── main.ts    # エントリーポイント
├── tests/         # テストコード格納先
├── .gitignore     # Git 除外ファイル設定
├── package.json   # プロジェクト設定
└── README.md      # プロジェクト概要
```


## トラブルシューティング

開発環境構築中に問題が発生した場合は、以下を確認してください。

1. **依存関係の問題**: `node_modules` ディレクトリを削除して再インストール
   ```bash
   rm -rf node_modules
   npm install
   ```

2. **キャッシュの問題**: npm キャッシュをクリア
   ```bash
   npm cache clean --force
   ```

3. **Node.js バージョン**: nvm を使用している場合、正しいバージョンを使用していることを確認
   ```bash
   nvm use 18
   ```
