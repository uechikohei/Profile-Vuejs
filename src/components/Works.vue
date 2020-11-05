<template>
  <v-app>
    <v-container>
      <v-layout text-center>
        <v-flex>
          <h1 data-aos="fade-up">Works</h1>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex
          mt-9
          mb-3
          v-for="(item, i) in items"
          :key="i"
          >
          <v-card
          class="mx-auto"
          max-width="344px"
          data-aos="fade-up"
          data-aos-delay="150"
          >
            <v-img
              :src="item.pic"
              height="200px"
            ></v-img>
            <v-card-title>
              <h5>{{ item.title }}</h5>
            </v-card-title>
            <v-card-subtitle>
              {{ item.subtitle }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn v-if="item.demo"
                color="success"
                text
                target="_blank"
                :href="item.demo"
                >
                <v-fa icon="home" style="font-size:30px;" />
              </v-btn>
              <v-btn v-if="item.github"
                color="success"
                text
                target="_blank"
                :href="item.github"
              >
                <v-fa :icon="['fab', 'github']" style="font-size:30px;" /> 
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click="item.show = !item.show"
              >
                <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="item.show">
                <v-divider></v-divider>
                <v-card-text>
                  <p style="white-space:pre-wrap; word-wrap:break-word;">{{item.desc}}</p>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
        { id: "1",
          pic: require('@/assets/sss.png'),
          title: 'SkateSpotSearch',
          subtitle: 'Ruby + Rails + docker + googlemapsAPI + circleci + AWS(rolling update)',
          desc: `SkateSpotSearchは、スケボーができる場所をシェアできるアプリです。
他のスケボーパーク紹介サイトと異なりgooglemap上なら'どこでも誰でも'スポットとして投稿でき、更新していく事ができるのが最大の特徴です。
テック系YouTuberとして著名な勝又健太氏によるエンジニアサロン内のレビュー担当の方には
"独自性の高いテーマ"
"UIがシンプルに整理されていて見やすい"
"AWSの各種サービスを適切に利用し、未経験では珍しいローリングアップデートまで実現している"
"CIやDockerが導入等できている"
"googlemap APIの各種サービスを自在に操れている"
"Ruby, Rails共に最新に近いバージョンを使用している"
"テストもある程度書かれている"
"GitHubを適切に活用した実務意識の開発ができている"
極めて高い評価を頂きました。
`,
          show: false,
          github: 'https://github.com/uechikohei/SkateSpotSearch'}
      ],
  }),
};
</script>