<template>
    <div>
        <UBreadcrumbs :breadCrumbs="breadCrumbs"/>
        <div class="mb-5 p-4 grid grid-cols-12 gap-3 md:gap-6">
            <!-- First part -->
            <div class="col-span-12 order-1 lg:col-span-2 lg:order-1 md:col-span-12 md:order-1 sm:col-span-12 sm:order-1">
                <div class="mb-5 pt-5">
                    <!-- contents -->
                </div>
            </div>

            <!-- Second part -->
            <div class="col-span-12 order-3 lg:col-span-8 lg:order-2 md:col-span-12 md:order-3 sm:col-span-12 sm:order-3">
                <div class="lg:block hidden">
                    <div class="my-2 flex items-center">
                    <span class="text-3xl font-bold">マニュアルビルダー</span>
                    <LanguageSelections :languages="languages" :currentLanguage="currentLanguage" class="ml-4"/>
                    </div>
                    <Badges :badges="badges" />
                </div>

                <div class="mb-5 p-5 bottom-shadow">
                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="about">
                                概要
                            </div>
                            <div class="py-3">
                                <p>
                                    Googleスライドから必要な情報を抽出し、それらをGoogleシートに出力して作業マニュアルを自動作成します。これにより、ワークフローの効率が向上します。
                                </p>
                                <blockquote class="mt-2 pl-4 text-lg italic border-l-4 border-gray-400">
                                    このツールは、マニュアル文書をGoogleドライブに一元化することを検討している会社や組織にとって有効なツールになると考えます。マニュアルを一つのプラットフォームに集約することで、関係者が必要な情報に簡単にアクセスできるようになります。さらに、各作業マニュアル内の記載方法を一律化することで、関係者間での情報共有や引継などの効率化も期待できます。
                                </blockquote>
                            </div>
                    </div>

                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="prerequisites">
                                前提条件
                            </div>
                            <div class="py-3">
                                <ul class="list-disc list-inside space-y-2">
                                    <li class="text-gray-700">GoogleシートとスライドにアクセスできるGoogleアカウント。</li>
                                    <li class="text-gray-700">Googleシート、Googleスライド、Google Apps Scriptの基本的な理解。</li>
                                </ul>
                            </div>
                    </div>

                    <div class="mb-3">
                        <div class="text-2xl font-bold" id="setup">
                            セットアップ
                        </div>
                        <div class="py-3">
                            <ol class="list-decimal list-inside space-y-2">
                                <li class="text-gray-700">
                                    <strong>Googleシートにアクセスする</strong>: まず、<a href="https://docs.google.com/spreadsheets/d/1PMzgfemPZhTKBubqUDWp5gbM-veuWCbT0IKKOw3fsL8/edit#gid=0" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">サンプルのGoogleシート</a>を開きます。また、<a href="https://docs.google.com/presentation/d/1pUxDKtwHA4GMXfmGXmwzXnjuAbW9g6DE9lFTj55wAn8/edit#slide=id.g2aa00057ea4_0_0" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">サンプルのGoogleスライド</a>も見つけることができます。
                                    <p class="mt-2">*注: サンプルシート・スライドの内容は教育機関のマニュアルを想定した一例です。</p>
                                </li>
                                <li class="text-gray-700">
                                    <strong>Googleシートをコピーする</strong>: Googleシートのコピーを作成して、自分専用のバージョンを作成します。
                                </li>
                                <li class="text-gray-700">
                                    <strong>認証</strong>: スクリプトを初めて実行するとき、特定のデータへのアクセス許可を求められます。無料のGmailアカウントを使用している場合、<code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Googleで確認されていません</code>という警告が表示されることがあります。スクリプト実行には、許可が必要ですので、この警告はスキップして許可の手続きを進めてください。スクリプトはあなた専用のもので、Google以外にデータを共有することはありません。(使用者が使用するデータを自ら共有する場合を除く)。Google以外に送信される可能性のあるデータは、監視目的でのウェブサイトのステータスコードだけです。
                                </li>
                                <li class="text-gray-700">
                                    <strong>元のフォーマットに戻す</strong>: Googleシートを元のフォーマットにリセットするためのオプションです（インデックスシートを除くすべてのサンプルシートを削除/ すべての事前設定情報をリセット/ インデックスシートの内容をクリア）。<code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu > Settings</code>をクリックし、<code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Delete All Sheets and Pre-Set Info</code>をクリックします。
                                    <div class="mt-3">
                                        <!-- Placeholder for Setting Menu Image -->
                                        <figure>
                                            <img src="assets/images/gas-tools/manual-builder/setting_menu.png" alt="Setting Menu" class="w-80 h-40">
                                            <figcaption class="p-2 text-gray-400">図: 設定メニュー</figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li class="text-gray-700">
                                    <strong>スライドのURLとインデックスシートの名前を設定する</strong>: <code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Custom Menu > Settings</code>に移動し、<code class="text-sm p-1 bg-gray-200 rounded text-gray-800">Set Necessary Info</code>をクリックして、GoogleスライドのURLとGoogleシートのインデックスシートの名前を指定します。
                                </li>
                            </ol>
                        </div>
                    </div>
                    
                    <div class="mb-3">
                            <div class="text-2xl font-bold" id="terms-conditions">
                                その他
                            </div>
                            <div class="py-3">
                                <p class="text-lg mt-4">
                                Googleスライドから詳細がどのように抽出され、それらがGoogleシートに出力されるロジックに興味がある場合は、<a href="https://docs.google.com/presentation/d/1xSyIpb7w24os4EEhpNBP5CCTxS70q5PeTGKm2Vndumw/edit#slide=id.g6f52a3fb7eed7995_31" target="_blank" rel="noopener noreferrer" class="text-lightblue underline hover:text-darkblue">こちら</a>をクリックして、詳細な説明をご覧ください。
                                </p>
                            </div>
                    </div>

                    <div class="mb-3">
    <div class="text-2xl font-bold" id="terms-conditions">
        利用規約
    </div>
    <div class="py-3">
        <p class="text-lg mt-4">このウェブサイトの利用は、<NuxtLink to="/others/terms-conditions" class="text-lightblue underline hover:text-darkblue">利用規約</NuxtLink>に基づいて行われることにご注意ください。(*注: 英語で記載)</p>
    </div>
</div>
</div>
<p> <Icon name="material-symbols:calendar-month-sharp"/>  最終更新日: {{ date }}</p>
</div>

<!-- Third part -->
<div class="col-span-12 order-2 lg:col-span-2 lg:order-3 md:col-span-12 md:order-2 sm:col-span-12 sm:order-2">
    <div class="text-3xl mt-2 font-bold lg:hidden block">
        <div class="my-2 flex items-center">
        <span class="text-3xl font-bold">マニュアルビルダー</span>
        <LanguageSelections :languages="languages" :currentLanguage="currentLanguage" class="ml-4"/>
        </div>
        <Badges :badges="badges" />
    </div>
    <div class="bg-white shadow-lg rounded-lg md:relative lg:fixed">
        <div class="mb-5 pt-5">
            <p class="text-l font-bold p-1 bg-gray-400 text-white">
                <Icon name="map:book-store"></Icon> このページの内容
            </p>
            <ul class="break-words">
                <PageItems :pageItems="pageItems" />
            </ul>
        </div>
    </div>
</div>
</div>
</div>
</template>

<script setup lang="ts">
import {ref } from 'vue'
import UBreadcrumbs from '~/components/UBreadcrumbs.vue';
import Badges from '~/components/Badges.vue';
import PageItems from '~/components/PageItems.vue';


const breadCrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Gas Tools', to: '/gas-tools/gas-tools' },
    { label: 'Manual Builder'}
];

useHead({
    title: "Manual Builder",
});

const pageItems = [
  { label: '概要', href: '#about' },
  { label: '前提条件', href: '#prerequisites' },
  { label: 'セットアップ', href: '#setup' },
  { label: '利用規約', href: '#terms-conditions' }
];

const badges = [
{
    src: "https://img.shields.io/badge/Google%20Apps-slide%20%26%20sheet-brightgreen?style=flat-square&color=brightgreen",
    alt: "Use of Google Apps"
},
  {
    url: "https://github.com/google/clasp",
    src: "https://img.shields.io/badge/built%20with-clasp-FFA500.svg?style=flat-square",
    alt: "Built with Clasp"
  },
  {
    url: "https://github.com/prettier/prettier",
    src: "https://img.shields.io/badge/code_style-prettier-800080.svg?style=flat-square",
    alt: "Code style: Prettier"
  }
];

const languages = [
    {
        name: "日本語",
        filePath: "/gas-tools/manual-builder/manual-builder_JPN"
    },
    {
        name: "English",
        filePath: "/gas-tools/manual-builder/manual-builder_ENG"
    },
];

const currentLanguage = "日本語";

let date = ref(
    new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
    .format(new Date('2024-04-06'))
);

let isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>

</style>