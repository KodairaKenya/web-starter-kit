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

