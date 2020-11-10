<template>
  <v-app style="background-color: #f4f9e2">
    <v-container>
      <v-layout text-center>
        <v-flex>
          <h1 class="font__m">uechi kohei</h1>
          <h3 class="font__m">
            <vue-typer
              text=" - web developer - "
              :repeat="0"
              :type-delay="80"
              :pre-type-delay="1000"
            >
            </vue-typer>
          </h3>
          <br />
          <img
            data-aos="fade"
            data-aos-delay="200"
            data-aos-anchor-placement="bottom-bottom"
            :src="myImage"
            alt="自己紹介img"
            class="myImage"
          />
          <br /><br />
        </v-flex>
      </v-layout>

      <v-layout justify-center text-center class="mb-15">
        <v-flex xs10>
          <div class="font__xs">
            <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              1993/3/21 (27歳)
            </h2>
            <br />
            <h3>趣味</h3>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              料理とスケートボード
            </p>
            <h3>資格</h3>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              AWS認定ソリューションアーキテクト アソシエイト
            </p>
            <br />
          </div>
          <div class="profile__text">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              class="mb-10"
            >
              専門学校卒業後、管理栄養士免許を取得。<br />
              在学中、栄養士実力認定試験2017年にて全国1万人中17位の成績で優秀賞を授与。<br />
              また病院インターンを半年経験。そこで、病気になる前段階の健康増進に携わっていきたいと考える。<br />
              スケートボードインストラクターとして勤務する傍ら、<br />
              wordpressとyoutubeを利用し「料理、健康」をテーマにした動画や記事を投稿する。<br />
            </p>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              class="mb-10"
            >
              その後、情報の発信だけでは目的を達成できない(収益化)と限界を感じると同時に<br />
              今まで利用してきたwebアプリやSNSサービス開発に興味を持ち、独学でwebアプリ作成を目標とし勉強を開始する。<br />
            </p>

            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              class="mb-10"
            >
              2019/10 ~ 2020/1<br />
              基本のマークアップ言語から、rubyとdockerとawsを学び、todoリストをデプロイする。<br />
              自分の作成したアプリがweb上からアクセスでき、実際に使用できた事に感動する。
            </p>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              class="mb-10"
            >
              2020/2 ~ 2020/3<br />
              awsサービス全般に興味が湧き、資格取得に挑戦。<br />無事aws認定ソリューションアソシエイトに合格する。<br />
              プログラミングを通して「新しい技術を学び続ける楽しさ」、「新しいサービスを創造する楽しさ」を実感。<br /><br />
              エンジニアとして、キャリアチェンジを決意する。
            </p>
            <br />
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              class="mb-10"
            >
              2020/4 ~ 2020/9<br />
              ポートフォリオ作成が完了。<br />(機能は随時追加中~)<br /><br />
              wantedlyを主に転職活動を開始する。<br />(現在進行中~)
            </p>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              class="mb-10"
            >
              2020/10 ~ <br />
              転職活動と並行しVue.jsを学び、プロフィールサイトを作成開始する。<br />(現在進行中~)
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  data() {
    return {
      myImage: require("../assets/my_image.jpg"),
    };
  },
  components: {
    VueTyper,
  },
};
</script>

<style scoped lang="scss">
.myImage {
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0px 0px 5px gray;
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.profile__text {
  font-size: 2rem;
  line-height: 2.1em;
  color: gray;
}
.font__xs {
  font-size: 1.8rem;
}
.font__s {
  font-size: 2rem;
}
.font__m {
  font-size: 3.5rem;
}
</style>