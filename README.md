# コーディングガイドライン

###1. 始める前に
###2. 準備
###3. 使用方法
###4. 使用ツール
###5. 対応ブラウザ
###6. ディレクトリ構成
###7. Gulp
###8. HTML
###9. CSS
###10. Git
###11. 画像
###12. 命名規則の共通ルール




# 始める前に

## 対象
- プロジェクトに関わる人全般
- HTML / CSSの知識を持ち合わせていることを前提とする
- 静的なページのみのコーディングを想定とする

## 概要
###1. コードの品質の安定
  慣例・定石の例をまとめることで品質(拡張性, メンテナンス性, 可読性, バグの回避)を担保する

###2. コミュニケーションコストの削減
   ルールに沿った書き方をする事で連絡や質問事項を減らす

###3. 経験値の共有
  HTML/CSSの仕様上起きやすいミスを防ぐ

## ガイドライン運営ガイド
### 例外
極力スタイルガイドに従うが、ガイドがデメリットを生む場合に関してはガイドに従わない事をコメントに記する
### スタイルガイドの変更
スタイルガイドはプロジェクトの進行、メンバーのスキル、時代の流れにより、随時変更を検討する
ただし、変更は全メンバーにその都度通達しなければならない
変更者名、変更を加える理由（現在の問題点)、変更内容を必ず表記する

## 余談
ルールは作ることより、浸透させることのほうが難しい
それでも、項目一つ一つの認識を明文化することが大事であり、そのルールを守って作業を進めることは将来的な選択にも多大な幸福をもたらしてくれるはず
READMEはプロジェクト毎に管理をして、柔軟にルールは変更するべきである


# 使用ツール
- CSS Preprocessor: Sass（scss記法）
- Reset CSS: sanitize.css
- HTML Template Engind: Jade
- TaskRunner: Gulp




# 準備

## 下記は準備してあるものとする
- node.js
- git
- gulp
- Sass
- Jade
- EditorCoding

**【EditorConfigについて】**
EditorConfigパッケージをエディタに導入することで、.editorconfigから共通の設定を呼び出すことができる
参考:http://ginpen.com/2014/12/14/editorconfig/
参考:https://app.codegrid.net/entry/editorconfig




# 使用方法

ファイルを作業フォルダに落とす
`git clone`

パッケージをインストール
`npm i`

実行
`gulp`




# 対応ブラウザ

## PC
- Chrome 最新
- Firefox 最新
- Safari 最新
- Internet Explorer 10 ~

## SP
- ？




# ディレクトリ構成
```
.
├── app
│   ├── img
│   │   ├── common
│   │   └── top
│   ├── jade
│   │   ├── inc
│   │   │   ├── _default.jade
│   │   │   └── _ogp.jade
│   │   └── index.jade
│   ├── js
│   │   ├── lib
│   │   │   ├── jquery.js
│   │   └── common.js
│   └── sass
│       ├── foundation
│       │   ├── _base.scss
│       │   ├── _inc.scss
│       │   ├── _mixin.scss
│       │   ├── _sanitize.scss
│       │   └── _vars.scss
│       ├── layout
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   └── _layout.scss
│       ├── object
│       │   ├── component
│       │   │   ├── _btn.scss
│       │   │   ├── _grid.scss
│       │   │   ├── _media.scss
│       │   │   └── _title.scss
│       │   ├── project
│       │   └── utility
│       └── common.scss
├── .gitignore
├── README.md
├── package.json
├── gulpfile.js
└── .editorconfig

```




# Gulp

## 環境設定
### 【Gulp4.xにする際のコマンド】
**アンインストール**
`npm uninstall -g gulp`
(Macの場合は `sudo npm uninstall -g gulp` )


**再インストール**
`npm install -g gulp-cli`
(Macの場合 `sudo npm install -g gulp-cli` )


**確認**
`gulp -v`
→CLI version 1.x


**【注意】**
`npm install -g gulp` であげてしまうと、CLI version 3.x になってしまう。
https://speakerdeck.com/jmblog/gulp-the-good-parts


##  タスク一覧の表示
`gulp --tasks`

##  デフォルトタスクで起動
`gulp`

##  使用しているプラグイン
### gulp
gulpを使えるようにする(ver 4.x)
https://github.com/gulpjs/gulp/blob/4.0/docs/API.md

### browser-sync
ローカルサーバー起動
https://www.browsersync.io/docs/gulp/

### del
ファイル削除
https://www.npmjs.com/package/del

### gulp-autoprefixer
cssのプレフィックスを自動付与
https://www.npmjs.com/package/gulp-autoprefixer

### gulp-changed
更新されたファイルのみを処理する
http://whiskers.nukos.kitchen/2014/12/13/gulp-changed.html

### gulp-concat
指定されたファイルの結合
https://www.npmjs.com/package/gulp-concat

### gulp-imagemin
画像の圧縮
https://www.npmjs.com/package/gulp-imagemin

### gulp-jade
jadeのコンパイル
https://www.npmjs.com/package/gulp-jade

### gulp-load-plugins
package.jsonに記載されたgulpプラグインを一括で読み込む <
https://www.npmjs.com/package/gulp-load-plugins

### gulp-notify
エラー発生時にデスクトップ通知を起動してくれる
http://whiskers.nukos.kitchen/2014/12/06/gulp-notify.html

### gulp-size
コマンドラインにファイルサイズを表示
https://www.npmjs.com/package/gulp-size

### gulp-pleeease
cssの最適化をいろいろ行ってくれる
http://phiary.me/gulp-pleeease/

### gulp-plumber
処理中にエラーが起き、タスクが強制停止することを防いでくれる
http://whiskers.nukos.kitchen/2014/12/06/gulp-notify.html

### gulp-sass
Sassのコンパイル
https://www.npmjs.com/package/gulp-sass

### gulp-uglify
min化
https://www.npmjs.com/package/gulp-uglify

### psi
ページスピードを出力
https://github.com/addyosmani/psi

### gulp-uncss
指定したHTML内で使用していないCSSを削除する
http://kc-si.info/blog/2014/10-11.html

### gulp-combine-media-queries
メディアクエリの記述を一箇所にまとめる
http://parashuto.com/rriver/development/media-queries-workflow-using-sass-and-gulp




# HTML
## 基本の書式ルール
## プロトコル
２つのプロトコル(http:/ https:)をまたがって使わざるを得ない限り、画像や他のメディアファイル、スタイルシート、スクリプトのURLからプロトコル部分を省く。


```
<!-- NG -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>
<!-- OK -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```

```
/* NG */
div {
  background: url(http://www.google.com/images/example);
}
/* OK */
div {
  background: url(//www.google.com/images/example);
}
```

**理由：ファイル容量を少なくできる**


## スペース
２つのプロトコル(http:/ https:)をまたがって使わざるを得ない限り、画像や他のメディアファイル、スタイルシート、スクリプトのURLからプロトコル部分を省く。
インデントはスペース２つ
(エディタの設定でtabでスペース2つ入力されるように設定しておく)


```
<ul>
  <li>Fantastic
  <li>Great
</ul>
```


## 文字
必ず小文字で記述する


## エンコーディング
`meta charset=”utf-8″`とエンコーディングを明記

**理由：文字エンコーディングを指定しないと、日本語で作成されたウェブページに英語版のブラウザでアクセスした場合などに文字化けが起きることがある**


## コメント
必要に応じてコードを説明する
コードにTODOを入れ、何のためのものか誰が入れたのかをコメントとして記述する
(コメントが多くなったら命名やコードを見直すこと検討)

```
<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```


## HTML5を使う
XHTMLを使わない


## 正しいHTMLを使う
悩んだらW3Cに目を通してみる
http://momdo.github.io/html5/dom.html#dom

**理由：W3Cの規定に沿えば間違いない。SEOの考慮と対立した場合は、W3Cの規定を優先する**


## セマンティック
要素の目的に沿ったHTMLを使う
header要素はheaderに、p要素は段落に、a要素はアンカーリンクに、本来の目的に沿ってHTMLを使う
あくまでもHTMLの要素で文書構造をつくるようにする(div=sectionなどを避ける)

**理由：HTMLはあくまでも"論文"と捉え、文書構造を要素で表現する**


## 構造の分離
プレゼンテーション（スタイル）と振る舞い（スクリプト）は、ストラクチャ（マークアップ）から厳密に分ける
３者間の相互作用は、絶対的に少なく保つように努める

```
<!-- NG -->
<h1 style="font-size: 1em;">HTML sucks</h1>
<!-- OK -->
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
```

**理由：メンテナンス性の向上。ファイルが分割し依存しないことで安易に修正が行える**


## 文字参照
「<」や「&」のようにHTMLで特別な意味を持つものや、特殊スペースのような「見えないもの」以外で文字参照を使うことを避ける

```
<!-- NG -->
The currency symbol for the Euro is “&eur;”.
<!-- OK -->
The currency symbol for the Euro is “€”.
```

**理由：** http://www.marguerite.jp/Nihongo/WWW/Introduction/HTML5/Entity.html


## マルチメディアの設定
alt属性でアクシビリティー向上のために画像が何を意味しているのか記載する

```
<!-- NG -->
<img src="spreadsheet.png">

<!-- OK -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

**理由：画像に対して代替として動作するテキストをユーザーに提供できる**
参考：
http://momdo.github.io/html5/embedded-content-0.html#alt


## type属性
CSSとJavaScriptのtype属性は省略

```
<!-- NG -->
<link rel="stylesheet" href="//www.google.com/css/maia.css"
  type="text/css">
<!--OK -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">
```

**理由：HTML5からtype属性は省略可能になったので、ファイル容量の削減**


## aタグ
リンクはルート相対パスを基本とする
(注意：案件によって最適ではない場合があるので適宜変更する)

```
<!-- NG -->
<a href="../index.html"></a>

<!--OK -->
<a href="/index.html"></a>
```


## 一般的な書式
それぞれのブロック/リスト/テーブル要素ごとに新しい行にし、子要素にはインデントをつける
(a、span、time、small、imgなどの最小と思われる位置に要素がくる場合は、段落をつけなくても良い)

```
<ul>
  <li><a href="/">Moe</a></li>
  <li>Larry
  <li>Curly
</ul>
```

**理由：可読性の向上**


## HTMLクォーテーション
属性値に使うクォーテーションは、シングル（”）よりもダブル（””）が好ましい

```
<!-- NG -->
<a class='maia-button maia-button-secondary'>Sign in</a>
<!-- OK -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

**理由：JavaScriptはHTMLの中で使用するのが想定されるため、HTMLはダブルクオーテーション("")でJavaScriptはシングルクオーテーション('')を使用するのを推奨している**
参考:
http://qiita.com/niusounds/items/f21a28e862a68a098ea7




# CSS

## CSS設計

下記の書籍を理解していることを前提とする
### CSSの教科書
http://goo.gl/MspHyM

### CSS設計手法
CSS設計はFLOCSSを使用する
https://github.com/hiloki/flocss


## CSSファイル
1つのコンポーネントごとにファイルを分割する
ファイル名はコンポーネントに使用しているクラス名を用いる
**理由：保守性が向上するため**


## IDとclassの命名
IDとクラス名にはちゃんと意味の分かる名前を使うこと。
見た目を反映したものやそれが何を表しているか不可解な名前ではなく、要素の目的や役割を反映した名前を付ける。

```
/* NG: クラス名だけだと把握できない */
.table01 {}

/* NG: 見た目を表してる */
.btn-green {}

/* OK */
.btn-primary {}

/* OK: 役割を表してる */
.gallery {}
.login {}
.video {}
```

**理由：制作した当事者以外が把握できるようにするため、修正に耐えやすいため**
（例えば緑のボタンを.btn-greenと命名した場合、後にデザインの変更があり緑から赤になると命名が適切ではないので.btn-greenを.btn-redに書き換える処理が発生する。それを最初から.btn-primaryや.btn-keyColorにすることで無駄な作業を減らすことができる）


## IDとクラスの命名スタイル
意味の分かる範囲でできるだけ短いIDとクラス名を使う。
短くしすぎて意味がわからなくなるようなのはNG。

```
/* NG */
#navigation {}
.atr {}

/* OK */
#nav {}
.author {}
```

**理由：ファイルサイズ節約のため**
意味が分からないほどに省略してしまっては、制作した本人しか認識できないため


## ID
IDは原則使用せずクラスで対応する
ページ内リンクで使用する場合は例外とする

**理由：再利用性が低下するため**
詳細度が高くなり管理しづらいため


## タイプセレクタの記述
IDとクラス名にタイプセレクタは記述しない。

```
/* NG */
ul.example {}
div.error {}

/* OK */
.example {}
.error {}
```

**理由：限定された要素以外に適用できなくなり、再利用性が低下するため**
また、マークアップが変更になった場合、CSSに影響が出ることを避けるため


## ショートハンドプロパティ
ショートハンドを適宜使用する

```
/* NG */
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* OK */
padding: 0 1em 2em;
```


## 「0」と単位
値が「0」なら単位を省略する。

```
margin: 0;
padding: 0;

```

**理由：ファイルサイズ節約のため。**


## 小数点の頭の「0」
小数点の頭の「0」は省略する。

```
font-size: .8em;
```

**理由：ファイルサイズ節約のため。**


## URI値の引用符
url()での指定において、""（ダブルコーテーション）や''（シングルコーテーション）などのURI値の引用符を省略すること。

```
@import url(//www.google.com/css/.css);
```


## カラーコード
カラーコードで3文字で表記できるものは3文字にする。

```
/* NG */
color: #ffffff;

/* OK */
color: #fff;
```

**理由：ファイルサイズ節約のため。**


## CSSハック
ユーザーエージェント別の対応のためにCSSハックを使う前に別の方法を試してみること。
CSSハックは、ユーザーエージェントごとの違いを吸収するためには簡単で魅力的な方法だけど、プロジェクト全体のコードの品質を落とすことにもなるので「最後の手段」として考えること。


## CSS書式ルール
ブロック単位のインデント
その階層がわかるようにブロック単位でコードをインデントする。


```
@media screen {
  html {
    background: #fff;
    color: #444;
  }
}
```

**理由：可読性向上のため**


## プロパティの終端
すべてのプロパティの終端はセミコロンを書くこと。

```
/* NG */
.test {
    display: block;
    height: 100px
}

/* OK */
.test {
    display: block;
    height: 100px;
}
```

**理由：可読性向上のため**


## プロパティ名の終端
すべてのプロパティ名の終端にはコロンの後にスペースを入れること。

```
/* NG */
h3 {
    font-weight:bold;
}

/* OK */
h3 {
    font-weight: bold;
}
```

**理由：可読性向上のため**


## セレクタの終端

"{"の位置は、セレクタと同じ行に記述する
セレクタとの間にはスペースをいれること


```
/* NG */
.sample
{
　color: #399;
}

/* NG */
.sample{
　color: #399;
}

/* OK */
.sample {
　color: #399;
}
```

**理由：可読性向上のため**


## セレクタとプロパティの分離
別々のセレクタとプロパティは改行して書くこと。

```
/* NG */
a:focus, a:active {
    position: relative; top: 1px;
}

/* OK */
h1,
h2,
h3 {
    font-weight: normal;
    line-height: 1.2;
}

```

**理由：可読性向上のため**


## CSSルールの分離
別々のCSSルールは改行して一行間を空けて書く。

```
html {
    background: #fff;
}

body {
    margin: auto;
    width: 50%;
}
```

**理由：可読性向上のため**


## コメント
必要に応じてコードを説明する
コードにTODOを入れ、何のためのものか誰が入れたのかをコメントとして記述する

```
/* TODO: remove optional tags */
```

**理由：当事者以外が把握しやすくするため**


## BEMのセパレーター

MindBEMdingを採用する
block__element--modifier

**理由：こちらの方が普及してるため
本来のBEMよりもセパレータが識別しやすいため**



## BEMの粒度

block__element__element は使用しない
blockとの関係性を明示していれば問題ない

```
/* NG */
<ul class="navList">
  <li class="navList__item">
    <a class="navList__item__link" href=""></a>
  </li>
</ul>

/* OK */
<ul class="navList">
  <li class="navList__item">
    <a class="navList__link" href=""></a>
  </li>
</ul>
```

**理由：冗長なクラス名をさけるため**
少し細かいBEMい話
http://qiita.com/hiloki@github/items/4fa99b8755a22878449e


## クラスの命名

クラス名にはキャメルケースを使用し、プレフィックスとモディファイア以外でハイフンは使用しない

```
/* NG */
.c-ghost-btn--primary

/* OK */
.c-ghostBtn--primay
```

**理由：プレフィックスとモディファイアを認識しやすくするため、BEMを採用するとクラス名が冗長になるので少しでも短くするため**


## マルチクラス
コンポーネント設計のアプローチはマルチクラスを採用する
（@extendを使用したシングルクラス設計の場合は可）

**理由：CSSでで重複する記述が減らせるため、ファイル容量が減るため、ルールセットの再利用性があがるため、保守性が向上するため**


## スタイルの打ち消し
スタイルを打ち消さずにコンポーネントを定義する
打ち消しが発生する場合、1つのルールに過剰なスタイルを追加しているので設計を見直す

```
<h1 class="headline"></h1>
```

```
/* NG */
.headline {
  color: #333;
  line-height: 1.5;
  font-size: 2rem;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
}

.no-border {
  padding:
  border: none;
}

/* OK */
.headline {
  color: #333;
  line-height: 1.5;
  font-size: 2rem;
  margin-bottom: 10px;
}

.headline--border {
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
}

```
**理由：不要なCSSを減らせるため**



## 絶対値
柔軟に対応できるようにするため絶対値は原則使用しない

```
<h1 class="siteTitle"></h1>
```

```
/* NG */
h1 {
  font-size: 2.4rem;
  line-height: 32px;
}

.siteTitle {
  font-size: 3.6rem;
  line-height: 48px;
}

/* OK */
h1 {
  font-size: 2.4rem;
  line-height: 1.333;
}

.siteTitle {
  font-size: 2.4rem;
}

```
**理由：不要なCSSを減らせるため**


## HTMLへの依存
可能な限りHTMLに依存させないように定義する

```
/* NG */
<div class="contents">
  <div class="wrap">
    <h2>Contents Title</h2>
    <p>Contents の本文が入ります。</p>
  </div>
</div>

.contents .wrap h2 {
  font-size: 2.4rem;
}

```

```
/* OK */
<div class="contents">
  <div class="wrap">
    <h2 class="headline">Contents Title</h2>
    <p>Contents の本文が入ります。</p>
  </div>
</div>

.headline {
  font-size: 2.4rem;
}

```

**理由：HTML内のタグが変更された際にCSSに影響がでないようにするため、保守性が向上するため**




# Git(コミットメッセージの規約)
## 原則
- 1行目にコミットの全体的説明(タイトル)を 50 字以内で記述
- 2行目は空白行
- 3行目以降に変更内容の詳細(何をなぜ)を記述する


## 1行目の記述フォーマット
- Fix：バグ修正
- Add：新規機能（ファイル）追加
- Change：仕様変更
- Remove：削除（ファイル）


## 日本語の例
- 日本語は複雑な表現が多いので、文頭に英語の表記を含める
- 【Fix】Aboutページのフッターリンクを修正
- 【Add】ユーザー数を取得する関数を追加


## マークアップの例
- 【動詞】ページ名 / 説明の形にする
- 【Fix】about / フッターリンクを修正
- 【Add】contact / 住所の欄を追加


## .gitignore
基本的にgulpで処理した後のファイルはgitで管理しない
下記のファイルはアップしないようにする

```
/.DS_Store
/node_modules
/build
/npm-debug.log
```




# 画像

## ディレクトリ
共通で使い回す画像 → imgディレクトリ直下
ページ固有の画像 → imgディレクトリに使用するページ名で新しくディレクトリをきる


## 画像における命名規則は、「種類」と「詳細」をアンダーバーでつなげます　これを基本形とします
**種類_詳細.拡張子**


## デバイスごとに画像を別にする場合、デバイスを追加します
**種類_詳細_番号_デバイス.拡張子**


## 種類を6つに分類
**bg: 背景**
**btn: ボタン**
**icon: アイコン**
**txt: テキスト**
**ttl: タイトル**
**img: 画像**


## 詳細
種類に対して詳細な説明をします
**icon_arrow.png**

また、複数単語を使用したい場合はキャメルケースでつなげます
**icon_arrowPrev.png**


## 番号
同じ用途の画像が複数あった場合に、番号を付けてわけます
**icon_arrow_01.png**

※svgにすることで1つの画像でまかなえる場合はそちらを使用する


## デバイス
デバイスによって画像を切り替える場合、デバイスをつけてわけます
**icon_arrow_01_pc.png**


## 画像のパス表記
ルート相対パスを基本とする

```
// NG
<img src="../img/test.png">
<img src="http://test.com/img/test.png">

// OK
<img src="/img/test.png">
```

**理由：どの階層にあっても同じパスで指定できるため**
（インクルードしたファイルでもルート相対パスであれば問題なく表示される）




# 命名規則の共通ルール
HTMLファイル、CSSファイル（idセレクタ/classセレクタを含む）、画像ファイル、ディレクトリ名 共通のルール

## 英数字のみを使用する
理由：開く環境によっては、文字化けする可能性があるため


## 機種依存文字の使用禁止
理由：記号と同様、エラーを引き起こす原因と成り得るため


## 必ずアルファベットからはじめ、数字からはじめてはいけない
理由：数字から開始しているid・class名は、認識されないため


## 全角スペース、半角スペース（Space）の使用禁止
理由：ファイル名にスペースを含んだ場合、ファイルを正常に処理出来なくなる可能性があるため
（id・class名の場合、スペースを含んでしまうと別なid・classとして認識されてしまいます。）


## 「\」,「/」,「:」,「?」,「<」,「>」,「|」,「＄」これらの文字の使用禁止
理由：Windowsでファイル名に使用することが出来ないため
また、上記に含まれないその他の記号についても、プログラム上で誤った処理をしてしまい、エラーを引き起こす原因と成り得る


## 意味が分からなくなるほどの省略は避ける
理由：作成した本人しかわからない状況をさけるため




# 参考文献
メンテナブルCSS
https://www.cyberagent.co.jp/techinfo/techreport/report/id=7926


Harry Roberts氏によるCSSガイドライン
https://github.com/kiwanami/CSS-Guidelines


「Google HTML/CSS Style Guide」を適当に和訳してみた
http://re-dzine.net/2012/05/google-htmlcss-style-guide/


HTML5日本語訳
http://momdo.github.io/html5/Overview.html


foundation-start-kit
https://github.com/funteractive/foundation-start-kit


web-starter-kit
https://github.com/google/web-starter-kit


新人コーダーに知っておいて欲しい命名規則の考え方[画像・ID・class名]
http://html-coding.co.jp/knowhow/tips/naming-rule/


Jade
https://gist.github.com/japboy/5402844


Jade変換ツール
http://jade-lang.com/


こんなHTMLとCSSのコーディング規約で書きたい
http://qiita.com/pugiemonn/items/964203782e1fcb3d02c3


CSS Architecture
http://article.enja.io/articles/css-architecture.html  

Code smells in CSS
 http://article.enja.io/articles/code-smells-in-css.html


使いやすいWordPressのためのCSSのつくりかた 
http://www.slideshare.net/Toro_Unit/wordpresscss  


CSS設計の基礎を見直す
 http://gihyo.jp/dev/serial/01/js-foundation/0009


100年後も崩れないCSS勉強会  第1回「詳細度」
http://pepabo.github.io/css/specificity/


100年後も崩れないCSS勉強会  第2回「コンポーネント」
http://pepabo.github.io/css/component/


 [CSS] Object Oriented CSSを学んで綺麗なコードを書く
http://www.yoheim.net/blog.php?q=20141201  


SMACSS 読んだ
 http://chroma.hatenablog.com/entry/2013/07/22/120818


  BEMとは何か？
 https://github.com/juno/bem-methodology-ja/blob/master/definitions.md
