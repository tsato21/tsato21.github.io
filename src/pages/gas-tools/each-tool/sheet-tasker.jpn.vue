<template>
  <div>
    <UBreadcrumbs :breadCrumbs="breadCrumbs" />
    <div class="mb-5 p-4 grid grid-cols-12 gap-3 md:gap-6">
      <!-- Part A: Displayed at left on large screen and at first on other sized screen) -->
      <div
        class="col-span-12 order-1 lg:col-span-2 lg:order-1 md:col-span-12 md:order-1 sm:col-span-12 sm:order-1"
      >
        <div class="mb-5 pt-5">
          <!-- contents -->
        </div>
      </div>

      <!-- Part B: Displayed at middle on large screen and at third on other sized screen) -->
      <div
        class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3"
      >
        <div class="lg:block hidden">
          <div class="my-2 flex items-center">
            <span class="text-3xl font-bold">シートタスカー</span>
            <!-- Language Section Option -->
            <LanguageSelections
              :languages="languages"
              :currentLanguage="currentLanguage"
              class="ml-4"
            />
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>

        <div class="my-3 mx-2">
          <Banner :imgSrc="imgSrc" />
        </div>

        <div class="mb-5 p-5">
          <div class="mb-3">
            <div class="text-2xl font-bold" id="about">概要</div>
            <div class="py-3">
              <p>
                Google Sheetsでのタスク管理し、Google
                Docsで対象タスクの出力し、Gmailでリマインダーを送信することで、Google
                WorkSpace上で効率的にタスクを管理できます。
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                このツールは、タスクを管理するために設計されたデータベース型のタスク管理ツールです。外部アプリを使用せず、Google
                Workspace内での効率的なタスク管理を実現することができます。Google
                KeepやTasksなどのGoogleの組み込みアプリとは異なり、SheetTaskerは特定の単語にURLを埋め込んだり、Gmailでタスクリマインダーを通知したりなど、さまざまな機能を搭載しています。また、個々レベルでのタスク管理だけではなく、チームレベルでのタスク管理も可能です。
              </blockquote>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="prerequisites">前提条件</div>
            <div class="py-3">
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  Google Sheet、Docs、GmailにアクセスできるGoogleアカウント。
                </li>
                <li class="text-gray-700">
                  Google Sheet、Docs、Gmail, Google Apps Scriptの基本的な理解。
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="setup">セットアップ</div>
            <div class="py-3">
              <ol class="list-decimal list-inside space-y-2">
                <li class="text-gray-700">
                  <strong>Googleシートにアクセスする</strong>:
                  <a
                    href="https://docs.google.com/spreadsheets/d/1POCm-y8m7gonF4plOzVxxAk_1y8vjSP1xLR-4-mcMTU/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >サンプルのGoogle Sheet</a
                  >を開きます。
                  <ul class="list-disc ms-5">
                    【備考】
                    <li class="ms-6">
                      タスクを出力するGoogle Documentのサンプルは
                      <a
                        href="https://drive.google.com/drive/folders/1lAcVzQ62BFrIlk0XRJJugsWFGrQZj_xb"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-lightblue underline hover:text-darkblue"
                        >こちら</a
                      >から参照できます。
                    </li>
                    <li class="ms-6">
                      サンプルシート・スライドの内容は教育機関のタスク管理を想定した一例です。
                    </li>
                  </ul>
                </li>
                <li class="text-gray-700">
                  <strong>Googleシートをコピーする</strong>:
                  Googleシートのコピーを作成して、自分専用のバージョンを作成します。
                </li>
                <li class="text-gray-700">
                  <GASWarningJpn />
                </li>
                <li class="text-gray-700">
                  <strong>元のフォーマットに戻す</strong>:
                  Googleシートを元のフォーマットにリセットするためのオプションです
                  (サンプルタスクシートの削除、目次シートの内容クリア、事前設定情報やトリガーを削除)。
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu</code
                  >
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Setting</code
                  >
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Reset All Pre-Defined Info & Triggers</code
                  >をクリック。
                </li>
                <li class="text-gray-700">
                  <strong>事前設定情報の入力</strong>:
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu</code
                  >
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">
                    SETTINGS</code
                  >
                  >
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Set Pre-Defined Info</code
                  >
                  をクリックし、事前設定情報のうち、必要なものを入力。
                  <ul class="list-disc">
                    <li class="ms-6">
                      <strong>General Setting</strong>:
                      目次シートやスタッフ名などの本ツール使用において必要な設定です。
                    </li>
                    <li class="ms-6">
                      <strong>Setting for Each Type of Reminder</strong>:
                      一般リマインダー
                      (全未完了タスクを指定したスタッフに通知)、スタッフベースのリマインダーなどの各種リマインダーの設定。各タイプごとに、リマインダーを受け取るスタッフ、対象タスクを表示するGoogle
                      DocのURL、リマインダーメールの送信を実行するトリガーなどを設定する必要があります。
                    </li>
                    <li class="ms-6">
                      <strong>Google Sheet and Doc Integration</strong>: Google
                      Docでタスクの完了ステータスを確認し、Googleシートの完了欄を更新するトリガーを設定します。
                    </li>
                  </ul>
                  <div class="flex flex-wrap mt-2">
                    <div class="w-full md:w-1/2">
                      <figure>
                        <img
                          src="assets/images/gas-tools/sheet-tasker/setup-image-1.png"
                          alt="SETTINGSボタンにアクセス"
                          class="w-72 h-36"
                        />
                        <figcaption class="p-2 text-gray-400">
                          図: SETTINGSボタンにアクセス
                        </figcaption>
                      </figure>
                    </div>
                    <div class="w-full md:w-1/2">
                      <figure>
                        <img
                          src="assets/images/gas-tools/sheet-tasker/setup-image-2.png"
                          alt="SETTINGS画面の各種機能"
                          class="w-96 h-72"
                        />
                        <figcaption class="p-2 text-gray-400">
                          図: SETTINGS画面の各種機能
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div id="usage" class="mb-3">
            <div class="text-2xl font-bold">使用方法</div>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <strong>タスクシート作成</strong>:
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >Custom Menu</code
                >
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >TASK SHEETS</code
                >
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >Create a New Task Sheet</code
                >をクリックし、タスクシートを新規作成します。(作成されるシートはタスク管理のための機能やフォーマットを搭載しています。)
                <ul class="list-disc">
                  <li class="ms-6">
                    タスクシート内の組み込みドロップダウン機能を使用して、チームメンバーにタスクをアサインします。
                  </li>
                  <li class="ms-6">
                    タスクシートのアクセス権を変更する場合は、
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Custom Menu</code
                    >
                    >
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >TASK SHEETS</code
                    >
                    >
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Modify Editors of the Current Sheet</code
                    >から変更可能です。
                  </li>
                </ul>
                <div class="my-3 container-img">
                  <img
                    src="assets/images/gas-tools/sheet-tasker/task-sheet-creation.png"
                    alt="Task Sheetのインターフェイス"
                    class="w-96 h-48"
                  />
                  <figcaption class="p-2 text-gray-400">
                    図: Task Sheetのインターフェイス
                  </figcaption>
                </div>
              </li>

              <li class="my-2">
                <strong>リマインダー機能のテスト</strong>:
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >Custom Menu</code
                >
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >TEST</code
                >からリマインドメールがGmailに送信されるか確認してください。
                <ul class="list-disc">
                  <li class="ms-6">
                    この機能の使用前に、各リマインダーごとのGoogle
                    Docsが設定されていることを確認してください。
                  </li>
                </ul>

                <div class="flex flex-wrap mt-2">
                  <div class="w-full md:w-1/2">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/reminder-email.png"
                        alt="リマインダー通知"
                        class="w-72 h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: リマインダー通知
                      </figcaption>
                    </figure>
                  </div>
                  <div class="w-full md:w-1/2">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/reminder-general-doc-today.png"
                        alt="全体リマインダー (本日用)"
                        class="w-72 h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: 全体リマインダー (本日用)
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div class="w-full md:w-1/2">
                  <figure class="my-3">
                    <img
                      src="assets/images/gas-tools/sheet-tasker/reminder-general-doc-week.png"
                      alt="全体リマインダー (1週間用)"
                      class="w-72 h-48"
                    />
                    <figcaption class="p-2 text-gray-400">
                      図: 全体リマインダー (1週間用)
                    </figcaption>
                  </figure>
                </div>
              </li>

              <li class="my-2">
                <strong>タスク管理状態の連携</strong>:
                タスクが完了したら、Google
                Docsに「C」と入力してください。これにより、Google
                Sheetの完了欄(チェックボックス)にチェックが自動で入ります。
                <ul class="list-disc">
                  <li class="ms-6">
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Custom Menu</code
                    >
                    >
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >TEST</code
                    >
                    ><code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >Update Completion Status</code
                    >から当該機能をテストできます。
                  </li>
                </ul>
                <div class="row">
                  <div class="col-md-4">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/input-c-doc.png"
                        alt="Google Docに「C」と入力"
                        class="w-96 h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: Google Docに「C」と入力
                      </figcaption>
                    </figure>
                  </div>
                  <div class="col-md-4">
                    <figure class="my-3">
                      <img
                        src="assets/images/gas-tools/sheet-tasker/reflect-status-spr.png"
                        alt="Google Sheetのチェックボックスに完了状態が反映"
                        class="w-full h-48"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: Google Sheetのチェックボックスに完了状態が反映
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>

              <li class="my-2">
                <strong>シート情報の整理</strong>:
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >Custom Menu</code
                >
                >
                <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                  >Update Index Sheets and Sort Task Sheets</code
                >をクリックし、シート情報を整理できます。
                <ul class="list-disc">
                  <li class="ms-6">
                    タスクシートを日付順に並び替え、目次シートを最新情報を元に更新します。
                  </li>
                  <li class="ms-6">
                    シート自体の完了フラグ(SETTINGSで事前設定が必要)をシート名に追加すると、当該シート情報が
                    <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                      >completed-task-index</code
                    >に自動で反映されます。(例:
                    「Fin」をシート完了フラグに設定し、シート名に「Fin」を入れると、当該シート情報がcompleted-task-indexに自動で反映されます。)
                  </li>
                </ul>
                <div class="my-3 container-img">
                  <img
                    src="assets/images/gas-tools/sheet-tasker/update-index-sort-taskSh.png"
                    alt="シート情報の整理"
                    class="w-80 h-35"
                  />
                  <figcaption class="p-2 text-gray-400">
                    Fig: シート情報の整理
                  </figcaption>
                </div>
              </li>
            </ol>
          </div>

          <div class="mb-3">
            <TermsAndConditionsJpn />
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="source-code">ソースコード</div>
            <div class="py-3">
              <p class="text-lg mt-4">
                You can find the source code for this tool on Github. Click
                <a
                  href="https://github.com/tsato21/sheet-tasker"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                  >こちら</a
                >
                をクリックしてください。
              </p>
            </div>
          </div>

          <div class="mb-3">
            <AttributesJpn :attributes="attributes" />
          </div>
        </div>
        <p>
          <Icon name="material-symbols:calendar-month-sharp" /> 最終更新日:
          {{ date }}
        </p>
      </div>

      <!-- Part C: Displayed at right on large screen and at second on other sized screen) -->
      <div
        class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
      >
        <div class="text-3xl mt-2 font-bold lg:hidden block">
          <div class="my-2 flex items-center">
            <span class="text-3xl font-bold">シートタスカー</span>
            <!-- Language Section Option -->
            <LanguageSelections
              :languages="languages"
              :currentLanguage="currentLanguage"
              class="ml-4"
            />
          </div>
          <!-- Badges Component -->
          <Badges :badges="badges" />
        </div>
        <!-- Page Menu Bar: fixed on large screen and relative on other sized screen -->
        <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed lg:mr-2">
          <div class="mb-5 pt-5">
            <p class="text-l font-bold p-1 bg-gray-400 text-white">
              <Icon name="map:book-store"></Icon> このページの内容
            </p>
            <PageItems :pageItems="pageItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// An array of objects representing the breadcrumb navigation links.
const breadCrumbs = [
  { label: 'ホーム', to: '/' },
  { label: 'GASツール', to: '/gas-tools/gas-tools' },
  { label: 'シートタスカー' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'シートタスカー',
});

// An array of objects representing the page items or sections.
const pageItems = [
  { label: '概要', id: 'about' },
  { label: '前提条件', id: 'prerequisites' },
  { label: 'セットアップ', id: 'setup' },
  { label: '使用方法', id: 'usage' },
  { label: '利用規約', id: 'terms-conditions' },
  { label: 'ソースコード', id: 'source-code' },
  { label: '表記', id: 'attributes' },
];

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-sheet%20%26%20doc%20%26%20mail-brightgreen?style=flat-square&color=brightgreen',
    alt: 'Use of Google Apps',
  },
  {
    url: 'https://github.com/google/clasp',
    src: 'https://img.shields.io/badge/built%20with-clasp-FFA500.svg?style=flat-square',
    alt: 'Built with Clasp',
  },
  {
    url: 'https://github.com/prettier/prettier',
    src: 'https://img.shields.io/badge/code_style-prettier-800080.svg?style=flat-square',
    alt: 'Code style: Prettier',
  },
];

// An array of objects representing the available languages for the page.
const languages = [
  {
    name: 'English',
    filePath: '/gas-tools/each-tool/sheet-tasker.en',
  },
];

// The current language of the page.
const currentLanguage = '日本語';

// The date, formatted according to the Japanese locale.
let date = ref(
  new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date('2024-04-19'))
);

/*
imgSrc for Banner component
This should be stored in the public folder since it won't be included in your final build, and it will be resolved relative to the public path of your application at runtime.
*/
const imgSrc = '/banner/sheet-tasker.png';

//values for Attribute component
const attributes = {
  href: 'https://www.flaticon.com/free-icons/list',
  title: 'list icons',
  hyperLinkedDescription: 'List icons created by Freepik - Flaticon',
};
</script>
