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
            <span class="text-3xl font-bold">マニュアルビルダー</span>
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

        <div class="mb-5 p-5 bottom-shadow">
          <div class="mb-3">
            <div class="text-2xl font-bold" id="about">概要</div>
            <div class="py-3">
              <p>
                Googleスライドから必要な情報を抽出し、それらをGoogleシートに出力して作業マニュアルを自動作成します。これにより、ワークフローの効率が向上します。
              </p>
              <blockquote
                class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
              >
                このツールは、マニュアル文書をGoogleドライブに一元化することを検討している会社や組織にとって有効なツールになると考えます。マニュアルを一つのプラットフォームに集約することで、関係者が必要な情報に簡単にアクセスできるようになります。さらに、各作業マニュアル内の記載方法を一律化することで、関係者間での情報共有や引継などの効率化も期待できます。
              </blockquote>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="prerequisites">前提条件</div>
            <div class="py-3">
              <ul class="list-disc list-inside space-y-2">
                <li class="text-gray-700">
                  GoogleシートとスライドにアクセスできるGoogleアカウント。
                </li>
                <li class="text-gray-700">
                  Googleシート、Googleスライド、Google Apps
                  Scriptの基本的な理解。
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="setup">セットアップ</div>
            <div class="py-3">
              <ol class="list-decimal list-inside space-y-2">
                <li class="text-gray-700">
                  <strong>Googleシートにアクセスする</strong>: まず、<a
                    href="https://docs.google.com/spreadsheets/d/1PMzgfemPZhTKBubqUDWp5gbM-veuWCbT0IKKOw3fsL8/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >サンプルのGoogleシート</a
                  >を開きます。また、<a
                    href="https://docs.google.com/presentation/d/1pUxDKtwHA4GMXfmGXmwzXnjuAbW9g6DE9lFTj55wAn8/edit#slide=id.g2aa00057ea4_0_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-lightblue underline hover:text-darkblue"
                    >サンプルのGoogleスライド</a
                  >も見つけることができます。
                  <p class="mt-2">
                    *注:
                    サンプルシート・スライドの内容は教育機関のマニュアルを想定した一例です。
                  </p>
                </li>
                <li class="text-gray-700">
                  <strong>Googleシートをコピーする</strong>:
                  Googleシートのコピーを作成して、自分専用のバージョンを作成します。
                </li>
                <li class="text-gray-700">
                  <GASWarningJp />
                </li>
                <li class="text-gray-700">
                  <strong>元のフォーマットに戻す</strong>:
                  Googleシートを元のフォーマットにリセットするためのオプションです（インデックスシートを除くすべてのサンプルシートを削除/
                  すべての事前設定情報をリセット/
                  インデックスシートの内容をクリア）。<code
                    class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu > Settings</code
                  >をクリックし、<code
                    class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Delete All Sheets and Pre-Set Info</code
                  >をクリックします。
                  <div class="mt-3">
                    <figure>
                      <img
                        src="assets/images/gas-tools/manual-builder/setting_menu.png"
                        alt="Setting Menu"
                        class="w-80 h-40"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: 設定メニュー
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li class="text-gray-700">
                  <strong
                    >スライドのURLとインデックスシートの名前を設定する</strong
                  >:
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu > Settings</code
                  >に移動し、<code
                    class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Set Necessary Info</code
                  >をクリックして、GoogleスライドのURLとGoogleシートのインデックスシートの名前を指定します。
                </li>
              </ol>
            </div>
          </div>

          <div id="usage" class="mb-3">
            <div class="text-2xl font-bold">使用方法</div>

            <ol class="list-decimal list-inside">
              <li class="my-2">
                <span class="font-bold"
                  >指定されたパターンでスライドを作成</span
                >
                <p>
                  ユーザーは、設定画面で指定したGoogleスライド上で、特定のパターンに従ってスライドを作成する必要があります。各セクションの最初のスライドは、次の構造で作成してください。
                </p>
                <blockquote
                  class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400"
                >
                  Category:【Category Name】Subcategory Name<br />
                  Task: Task Name<br />
                  Summary: Summary Descriptions
                </blockquote>
                <div class="resize-image my-3 container-img">
                  <img
                    src="assets/images/gas-tools/manual-builder/slide-pattern.png"
                    alt="Customize Constants"
                    class="w-80 h-35"
                  />
                  <figcaption class="p-2 text-gray-400">
                    図: スライドの構造
                  </figcaption>
                </div>
                <p>
                  スクリプトは、URLやカテゴリー名などを最初のスライドから取得・保存し、後ほどGoogleシートに出力します。
                </p>
              </li>
              <li class="my-2">
                <span class="font-bold">インデックスとタスクシートの更新</span>
                <p>
                  <code class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Custom Menu</code
                  >に移動し、<code
                    class="text-sm p-1 bg-gray-200 rounded text-gray-800"
                    >Update Index & Task Sheets</code
                  >をクリックします。この操作により、最新のスライドデータに基づいてインデックスとタスクシートが自動的に更新されます。
                </p>

                <div class="row">
                  <div class="col-md-4">
                    <figure class="resize-image my-3">
                      <img
                        src="assets/images/gas-tools/manual-builder/update-button.png"
                        alt="Customize Constants"
                        class="w-80 h-35"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: 更新ボタン
                      </figcaption>
                    </figure>
                  </div>
                  <div class="col-md-4">
                    <figure class="resize-image my-3">
                      <img
                        src="assets/images/gas-tools/manual-builder/index-sheet.png"
                        alt="Customize Constants"
                        class="w-80 h-35"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: インデックスシートの更新
                      </figcaption>
                    </figure>
                  </div>
                  <div class="col-md-4">
                    <figure class="resize-image my-3">
                      <img
                        src="assets/images/gas-tools/manual-builder/task-sheet.png"
                        alt="Customize Constants"
                        class="w-100 h-50"
                      />
                      <figcaption class="p-2 text-gray-400">
                        図: タスクシートの更新
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="others">その他</div>
            <div class="py-3">
              <p class="text-lg mt-4">
                Googleスライドから詳細がどのように抽出され、それらがGoogleシートに出力されるロジックに興味がある場合は、<a
                  href="https://docs.google.com/presentation/d/1xSyIpb7w24os4EEhpNBP5CCTxS70q5PeTGKm2Vndumw/edit#slide=id.g6f52a3fb7eed7995_31"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                  >こちら</a
                >をクリックして、詳細な説明をご覧ください。
              </p>
            </div>
          </div>

          <div class="mb-3">
            <TermsAndConditionsJp />
          </div>

          <div class="mb-3">
            <div class="text-2xl font-bold" id="source-code">ソースコード</div>
            <div class="py-3">
              <p class="text-lg mt-4">
                Github上でソースコードを参照できます。
                <a
                  href="https://github.com/tsato21/manual-builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-lightblue underline hover:text-darkblue"
                  >こちら</a
                >
                をクリックしてください.
              </p>
            </div>
          </div>
        </div>
        <p>
          <Icon name="material-symbols:calendar-month-sharp" /> 最終更新日:
          {{ date }}
        </p>
      </div>
    </div>

    <!-- Part C: Displayed at right on large screen and at second on other sized screen) -->
    <div
      class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2"
    >
      <div class="text-3xl mt-2 font-bold lg:hidden block">
        <div class="my-2 flex items-center">
          <span class="text-3xl font-bold">マニュアルビルダー</span>
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
</template>

<script setup lang="ts">
// An array of objects representing the breadcrumb navigation links.
const breadCrumbs = [
  { label: 'ホーム', to: '/' },
  { label: 'GASツール', to: '/gas-tools/gas-tools' },
  { label: 'マニュアルビルダー' },
];

// Sets the title of the page for SEO purposes.
useHead({
  title: 'Manual Builder',
});

// An array of objects representing the page items or sections.
const pageItems = [
  { label: '概要', id: 'about' },
  { label: '前提条件', id: 'prerequisites' },
  { label: 'セットアップ', id: 'setup' },
  { label: '使用方法', id: 'usage' },
  { label: 'その他', id: 'others' },
  { label: '利用規約', id: 'terms-conditions' },
  { label: 'ソースコード', id: 'source-code' },
];

// An array of objects representing the badges to be displayed.
const badges = [
  {
    src: 'https://img.shields.io/badge/Google%20Apps-slide%20%26%20sheet-brightgreen?style=flat-square&color=brightgreen',
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
    filePath: '/gas-tools/each-tool/manual-builder.en',
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
  }).format(new Date('2024-04-17'))
);
</script>
