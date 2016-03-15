#コーディングガイドライン

##リンク
###1. [始める前に](#start)
###2. [準備](#preparation)
###3. [使用方法](#use)
###4. [使用ツール](#tool)
###5. [対応ブラウザ](#device)
###6. [ディレクトリ構成](#directory)
###7. [Gulp](#gulp)
###8 .[HTML](#html)
###9 .[CSS](#css)
###10 .[Git](#git)

##<a name="start">始める前に</a>
###対象
プロジェクトに関わる人全般 <br>
HTML / CSSの知識を持ち合わせていることを前提とする <br>
静的なページのみのコーディングを想定とする <br>

###概要
1. **コードの品質の安定** <br>
  慣例・定石の例をまとめることで品質(拡張性, メンテナンス性, 可読性, バグの回避)を担保する
2. **コミュニケーションコストの削減** <br>
   ルールに沿った書き方をする事で連絡や質問事項を減らす
3. **経験値の共有** <br>
  HTML/CSSの仕様上起きやすいミスを防ぐ


###ガイドライン運営ガイド
####例外
極力スタイルガイドに従うが、ガイドがデメリットを生む場合に関してはガイドに従わない事をコメントに記する
####スタイルガイドの変更
スタイルガイドはプロジェクトの進行、メンバーのスキル、時代の流れにより、随時変更を検討する <br>
ただし、変更は全メンバーにその都度通達しなければならない <br>
変更者名、変更を加える理由（現在の問題点)、変更内容を必ず表記する

###余談
ルールは作ることより、浸透させることのほうが難しい <br><br>
それでも、項目一つ一つの認識を明文化することが大事であり、そのルールを守って作業を進めることは将来的な選択にも多大な幸福をもたらしてくれるはず <br><br>
READMEはプロジェクト毎に管理をして、柔軟にルールは変更するべきである <br><br>


##<a name="preparation">準備</a>
###下記は準備してあるものとする
<ul>
  <li>node.js</li>
  <li>git</li>
  <li>gulp</li>
  <li>Sass</li>
  <li>Jade</li>
  <li>EditorCoding</li>
</ul>

**EditorConfig** <br>
EditorConfigパッケージをエディタに導入することで、.editorconfigから共通の設定を呼び出すことができる。 <br>
参考:http://ginpen.com/2014/12/14/editorconfig/ <br>
参考:https://app.codegrid.net/entry/editorconfig <br>



##<a name="use">使用方法</a>
ファイルを作業フォルダに落とす <br>
`git clone`

パッケージをインストール <br>
`npm i`

実行 <br>
`gulp`



##<a name="tool">使用ツール</a>
<ul>
<li>CSS Preprocessor: Sass（scss記法）</li>
<li>Reset CSS: sanitize.css</li>
<li>HTML Template Engind: Jade</li>
<li>TaskRunner: Gulp</li>
</ul>


##<a name="device">対応ブラウザ</a>
###PC
<ul>
  <li>Chrome 最新</li>
  <li>Firefox 最新</li>
  <li>Safari 最新</li>
  <li>Internet Explorer 10 ~</li>
</ul>
###SP



##<a name="directory">ディレクトリ構成</a>
```
/ <br>
├── app  <br>
│   ├── img <br>
│   │   ├── common <br>
│   │   └── top <br>
│   ├── jade <br>
│   │   ├── foundation <br>
│   │   │   ├── _base.jade <br>
│   │   │   └── _mixin.jade <br>
│   │   ├── layout <br>
│   │   │   ├── _footer.jade <br>
│   │   │   └── _header.jade <br>
│   │   ├── object <br>
│   │   └── index.jade <br>
│   │   └── meta.json <br>
│   ├── js <br>
│   │   ├── lib <br>
│   │   │   ├── jquery.js <br>
│   │   └── common.js <br>
│   └── sass <br>
│       ├── foundation <br>
│       │   ├── _base.scss <br>
│       │   ├── _inc.scss <br>
│       │   ├── _mixin.scss <br>
│       │   ├── _sanitize.scss <br>
│       │   └── _vars.scss <br>
│       ├── layout <br>
│       │   ├── _footer.scss <br>
│       │   ├── _header.scss <br>
│       │   └── _layout.scss <br>
│       ├── object <br>
│       │   ├── component <br>
│       │   │   ├── _btn.scss <br>
│       │   │   ├── _grid.scss <br>
│       │   │   ├── _media.scss <br>
│       │   │   └── _title.scss <br>
│       │   ├── project <br>
│       │   └── utility <br>
│       └── common.scss <br>
├── .gitignore <br>
├── README.md <br>
├── package.json <br>
├── gulpfile.js <br>
└── .editorconfig <br>

```

##<a name="gulp">Gulp</a>
<ul>
  <li>プラグインや説明を記載</li>
  <li>プラグインや説明を記載</li>
  <li>プラグインや説明を記載</li>
  <li>プラグインや説明を記載</li>
</ul>



##<a name="html">HTML</a>
###1. 基本の書式ルール
####1-1. プロトコル
２つのプロトコル(http:/ https:)をまたがって使わざるを得ない限り、画像や他のメディアファイル、スタイルシート、スクリプトのURLからプロトコル部分を省く。<br>
<br>

```html
<!-- NG -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>
<!-- OK -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```

<br><br><br>

```css
/* NG */
div {
  background: url(http://www.google.com/images/example);
}
/* OK */
div {
  background: url(//www.google.com/images/example);
}
```

<br>
理由：ファイル容量を少なくできる<br>


####1-2. スペース
２つのプロトコル(http:/ https:)をまたがって使わざるを得ない限り、画像や他のメディアファイル、スタイルシート、スクリプトのURLからプロトコル部分を省く。 <br>
インデントはスペース２つ <br>
(エディタの設定でtabでスペース2つ入力されるように設定しておく) <br>
<br>

```html
<ul>
  <li>Fantastic
  <li>Great
</ul>
```

####1-3. 文字
小文字で記述する<br>


###2. 基本のメタルール
####2-1. エンコーディング
`meta charset=”utf-8″``とエンコーディングを明記<br>
<br><br>
理由：文字エンコーディングを指定しないと、日本語で作成されたウェブページに英語版のブラウザでアクセスした場合などに文字化けが起きることがある<br>

####2-2. コメント

必要に応じてコードを説明する <br>
コードにTODOを入れ、何のためのものか誰が入れたのかをコメントとして記述する <br>
(コメントが多くなったら命名やコードを見直すこと検討) <br>
<br>

```html
<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```

###3. ドキュメントタイプ
####3-1. HTML5を使う
XHTMLを使わない<br>

####3-2. 正しいHTMLを使う

悩んだらW3Cに目を通してみる <br>
http://momdo.github.io/html5/dom.html#dom
<br><br>
理由：W3Cの規定に沿えば間違いない。SEOの考慮と対立した場合は、W3Cの規定を優先する

####3-3. セマンティック

要素の目的に沿ったHTMLを使う <br>
header要素はheaderに、p要素は段落に、a要素はアンカーリンクに、本来の目的に沿ってHTMLを使う <br>
あくまでもHTMLの要素で文書構造をつくるようにする(div=sectionなどを避ける) <br>
<br><br>

理由：HTMLはあくまでも"論文"と捉え、文書構造を要素で表現する<br>

####3-4. 構造の分離

プレゼンテーション（スタイル）と振る舞い（スクリプト）は、ストラクチャ（マークアップ）から厳密に分ける <br>
３者間の相互作用は、絶対的に少なく保つように努める<br>


```html
<!-- NG -->
<h1 style="font-size: 1em;">HTML sucks</h1>
<!-- OK -->
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
```

<br><br>
理由：メンテナンス性の向上。ファイルが分割し依存しないことで安易に修正が行える<br>


####3-5. 文字参照

「<」や「&」のようにHTMLで特別な意味を持つものや、特殊スペースのような「見えないもの」以外で文字参照を使うことを避ける<br>

```html
<!-- NG -->
The currency symbol for the Euro is “&eur;”.
<!-- OK -->
The currency symbol for the Euro is “€”.
```

<br><br>
理由：
http://www.marguerite.jp/Nihongo/WWW/Introduction/HTML5/Entity.html


####3-6. マルチメディアの設定

alt属性でアクシビリティー向上のために画像が何を意味しているのか記載する<br>

```html
<!-- NG -->
<img src="spreadsheet.png">

<!-- OK -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

<br><br>
理由：画像に対して代替として動作するテキストをユーザーに提供できる <br>
参考：
http://momdo.github.io/html5/embedded-content-0.html#alt <br>


####3-7. type属性

CSSとJavaScriptのtype属性は省略
<br>

```html
<!-- NG -->
<link rel="stylesheet" href="//www.google.com/css/maia.css"
  type="text/css">
<!--OK -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">
```

<br><br>
理由：HTML5からtype属性は省略可能になったので、ファイル容量の削減<br>


####3-8. aタグ

リンクはルート相対パスを基本とする <br>
(注意：案件によって最適ではない場合があるので適宜変更する)<br>

```html
<!-- NG -->
<a href="../index.html"></a>

<!--OK -->
<a href="/index.html"></a>
```

###4. HTMLの書式ルール

####4-1. 一般的な書式

それぞれのブロック/リスト/テーブル要素ごとに新しい行にし、子要素にはインデントをつける <br>
(a、span、time、small、imgなどの最小と思われる位置に要素がくる場合は、段落をつけなくても良い)<br>

```html
<ul>
  <li><a href="/">Moe</a></li>
  <li>Larry
  <li>Curly
</ul>
```

<br><br>
理由：可読性の向上<br>

####4-2. HTMLクオテーションマーク

属性値に使うクオテーションは、シングル（”）よりもダブル（””）が好ましい<br>

```html
<!-- NG -->
<a class='maia-button maia-button-secondary'>Sign in</a>
<!-- OK -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

<br><br>
理由：JavaScriptはHTMLの中で使用するのが想定されるため、HTMLはダブルクオーテーション("")でJavaScriptはシングルクオーテーション('')を使用するのを推奨している <br>
参考:
http://qiita.com/niusounds/items/f21a28e862a68a098ea7


##<a name="css">CSS</a>
###CSSスタイルルール
####IDとclassの命名
IDとクラス名にはちゃんと意味の分かる名前を使うこと。<br>
見た目を反映したものやそれが何を表しているか不可解な名前ではなく、要素の目的や役割を反映した名前を付ける。<br>

```css
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

<br>
理由：制作した当事者以外が把握できるようにするため、修正に耐えやすいため<br>
（例えば緑のボタンを.btn-greenと命名した場合、後にデザインの変更があり緑から赤になると命名が適切ではないので.btn-greenを.btn-redに書き換える処理が発生する。それを最初から.btn-primaryや.btn-keyColorにすることで無駄な作業を減らすことができる）

####IDとクラスの命名スタイル
意味の分かる範囲でできるだけ短いIDとクラス名を使う。<br>
短くしすぎて意味がわからなくなるようなのはNG。<br>
<br>

```css
/* NG */
#navigation {}
.atr {}

/* OK */
#nav {}
.author {}
```

<br>
理由：ファイルサイズ節約のため<br>
意味が分からないほどに省略してしまっては、制作した本人しか認識できないため<br>

####ID
IDは原則使用せずクラスで対応する<br>
ページ内リンクで使用する場合は例外とする<br>
<br>
理由：再利用性が低下するため<br>
詳細度が高くなり管理しづらいため<br>

####タイプセレクタの記述
IDとクラス名にタイプセレクタは記述しない。<br>
<br>

```html
/* NG */
ul.example {}
div.error {}

/* OK */
.example {}
.error {}
```

<br>
理由：限定された要素以外に適用できなくなり、再利用性が低下するため<br>
また、マークアップが変更になった場合、CSSに影響が出ることを避けるため<br>

####ショートハンドプロパティ
ショートハンドを適宜使用する<br>
<br>

```css
/* NG */
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* OK */
padding: 0 1em 2em;
```

####「0」と単位
値が「0」なら単位を省略する。<br>
<br>

```css
margin: 0;
padding: 0;

```

<br>
理由：ファイルサイズ節約のため。<br>

####小数点の頭の「0」
小数点の頭の「0」は省略する。<br>
<br>

```css
font-size: .8em;
```

<br>
理由：ファイルサイズ節約のため。<br>

####URI値の引用符
url()での指定において、""（ダブルコーテーション）や''（シングルコーテーション）などのURI値の引用符を省略すること。<br>
<br>

```css
@import url(//www.google.com/css/go.css);
```

####カラーコード
カラーコードで3文字で表記できるものは3文字にする。<br>
<br>

```css
/* NG */
color: #ffffff;

/* OK */
color: #fff;
```

<br>
理由：ファイルサイズ節約のため。<br>


####CSSハック
ユーザーエージェント別の対応のためにCSSハックを使う前に別の方法を試してみること。<br>
CSSハックは、ユーザーエージェントごとの違いを吸収するためには簡単で魅力的な方法だけど、プロジェクト全体のコードの品質を落とすことにもなるので「最後の手段」として考えること。<br>


####CSS書式ルール
ブロック単位のインデント<br>
その階層がわかるようにブロック単位でコードをインデントする。<br>
<br>

```css
@media screen {
  html {
    background: #fff;
    color: #444;
  }
}
```

<br>
理由：可読性向上のため<br>


####プロパティの終端
すべてのプロパティの終端はセミコロンを書くこと。<br>
<br>

```css
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

<br>
理由：可読性向上のため<br>


####プロパティ名の終端
すべてのプロパティ名の終端にはコロンの後にスペースを入れること。<br>
<br>

```css
/* NG */
h3 {
    font-weight:bold;
}

/* OK */
h3 {
    font-weight: bold;
}
```

<br>
理由：可読性向上のため<br>

####セレクタの終端

"{"の位置は、セレクタと同じ行に記述する<br>
セレクタとの間にはスペースをいれること<br>
<br>

```css
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

<br>
理由：可読性向上のため<br>

####セレクタとプロパティの分離

別々のセレクタとプロパティは改行して書くこと。<br>
<br>

```css
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

<br>
理由：可読性向上のため<br>


####CSSルールの分離
別々のCSSルールは改行して一行間を空けて書く。<br>
<br>

```css
html {
    background: #fff;
}

body {
    margin: auto;
    width: 50%;
}
```

<br>
理由：可読性向上のため<br>

####コメント

必要に応じてコードを説明する<br>
コードにTODOを入れ、何のためのものか誰が入れたのかをコメントとして記述する<br>
<br>

```css
/* TODO: remove optional tags */
```

<br>
理由：当事者以外が把握しやすくするため<br>


###CSS設計
####下記の書籍を理解していることを前提とする
**CSSの教科書**<br>
http://goo.gl/MspHyM
<br>
**CSS設計手法**<br>
CSS設計はFLOCSSを使用する<br>
https://github.com/hiloki/flocss
<br>


##<a name="git">Git</a>
###コミットメッセージの規約
####原則
<ul>
    <li>1行目にコミットの全体的説明(タイトル)を 50 字以内で記述</li>
    <li>2行目は空白行</li>
    <li>3行目以降に変更内容の詳細(何をなぜ)を記述する</li>
</ul>

####1行目の記述フォーマット
<ul>
    <li>Fix：バグ修正</li>
    <li>Add：新規機能（ファイル）追加</li>
    <li>Change：仕様変更</li>
    <li>Remove：削除（ファイル）</li>
</ul>

#####日本語の例
<ul>
    <li>日本語は複雑な表現が多いので、文頭に英語の表記を含める</li>
    <li>【Fix】Aboutページのフッターリンクを修正</li>
    <li>【Add】ユーザー数を取得する関数を追加</li>
</ul>

#####マークアップの例
<ul>
    <li>【**】ページ名 / 説明 の形にする</li>
    <li>【Fix】about / フッターリンクを修正</li>
    <li>【Add】contact / 住所の欄を追加</li>
</ul>

###.gitignore
基本的にgulpで処理した後のファイルはgitで管理しない<br>
下記のファイルはアップしないようにする<br>
<br>

```
.gitignore
/.DS_Store
/node_modules
/build
/npm-debug.log
```

##画像

###画像における命名規則は、「種類」と「詳細」をアンダーバーでつなげます　これを基本形とします
**種類_詳細.拡張子**<br>
<br>

###デバイスごとに画像を別にする場合、デバイスを追加します
**種類_詳細_番号_デバイス.拡張子**<br>
<br>

###種類を6つに分類
**bg: 背景**<br>
**btn: ボタン**<br>
**icon: アイコン**<br>
**txt: テキスト**<br>
**ttl: タイトル**<br>
**img: 画像**<br>

###詳細
種類に対して詳細な説明をします<br>
**icon_arrow.png**<br>
<br>
また、複数単語を使用したい場合はキャメルケースでつなげます<br>
**icon_arrowPrev.png**<br>

###番号
同じ用途の画像が複数あった場合に、番号を付けてわけます<br>
**icon_arrow_01.png**<br>

###デバイス
デバイスによって画像を切り替える場合、デバイスをつけてわけます<br>
**icon_arrow_01_pc.png**<br>

###画像のパス表記
ルート相対パスを基本とする<br>
<br>

```html
// NG
<img src="../img/test.png">
<img src="http://test.com/img/test.png">

// OK
<img src="/img/test.png">
```

<br>
理由：どの階層にあっても同じパスで指定できるため<br>
（インクルードしたファイルでもルート相対パスであれば問題なく表示される）


##命名規則の共通ルール
HTMLファイル、CSSファイル（idセレクタ/classセレクタを含む）、画像ファイル、ディレクトリ名 共通のルール<br>

###英数字のみを使用する
理由：開く環境によっては、文字化けする可能性があるため

###機種依存文字の使用禁止
理由：記号と同様、エラーを引き起こす原因と成り得るため

###必ずアルファベットからはじめ、数字からはじめてはいけない
理由：数字から開始しているid・class名は、認識されないため

###全角スペース、半角スペース（Space）の使用禁止
理由：ファイル名にスペースを含んだ場合、ファイルを正常に処理出来なくなる可能性があるため<br>
（id・class名の場合、スペースを含んでしまうと別なid・classとして認識されてしまいます。）

###「\」,「/」,「:」,「?」,「<」,「>」,「|」,「＄」これらの文字の使用禁止
理由：Windowsでファイル名に使用することが出来ないため<br>
また、上記に含まれないその他の記号についても、プログラム上で誤った処理をしてしまい、エラーを引き起こす原因と成り得る

###意味が分からなくなるほどの省略は避ける
理由：作成した本人しかわからない状況をさけるため


##参考文献
メンテナブルCSS<br>
https://www.cyberagent.co.jp/techinfo/techreport/report/id=7926
<br>

Harry Roberts氏によるCSSガイドライン<br>
https://github.com/kiwanami/CSS-Guidelines
<br>

「Google HTML/CSS Style Guide」を適当に和訳してみた
http://re-dzine.net/2012/05/google-htmlcss-style-guide/
<br>

HTML5日本語訳<br>
http://momdo.github.io/html5/Overview.html
<br>

foundation-start-kit<br>
https://github.com/funteractive/foundation-start-kit
<br>

web-starter-kit<br>
https://github.com/google/web-starter-kit
<br>

新人コーダーに知っておいて欲しい命名規則の考え方[画像・ID・class名]<br>
http://html-coding.co.jp/knowhow/tips/naming-rule/
<br>

Jade<br>
https://gist.github.com/japboy/5402844
<br>

Jade変換ツール<br>
http://jade-lang.com/
<br>



