<template>
  <v-app style="background-color: #F4F9E2;">
    <v-container class="footer">
      <v-layout justify-center>
        <h1 data-aos="fade-up" style="color: #436FB4;" class="font__m">
          Contact
        </h1>
      </v-layout>
      <v-layout justify-center text-center>
        <div
          data-aos="fade-up"
          style="color: grey"
          class="font__s"
        >
          <h3>現在、転職活動中です。</h3><br>
          <h5>オファー頂ける方いらっしゃいましたら、<br>是非ご連絡お待ちしております！</h5>
          <br>
          <p style="color: #E06A3B;">24時間以内に返信させて頂きますので<br/>受信可能なメールアドレスをご指定下さい</p>
          <br>
          <h5>希望勤務地: 東京、大阪、福岡、愛知<br/>（現在大阪在住、転職に伴い引っ越しを予定）</h5>
          <br>
          <h5>希望年収: 200万円以上</h5>
        </div>
      </v-layout>

      <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation data-aos="fade-up">
        <v-text-field
          v-model ="contactForm.name"
          :rules  ="contactFormValidation.nameRules"
          label   ="Name"
          required
          color   ="success"
        ></v-text-field>
        <v-text-field
          v-model ="contactForm.email"
          :rules  ="contactFormValidation.emailRules"
          label   ="E-mail"
          required
          color   ="success"
        ></v-text-field>
        <v-textarea
          v-model  ="contactForm.contents"
          :rules   ="contactFormValidation.contentsRules"
          label    ="Contents"
          required
          color    ="success"
        ></v-textarea>
        <v-btn
          :loading  ="contactForm.loading"
          :disabled ="!contactFormValidation.valid"
          @click    ="sendMail()"
          block
          large
          color     ="success"
          class="font__m"
        >
        SEND
        </v-btn>
      </v-form>
      <v-snackbar
        v-model   ="snackBar.show"
        :color    ="snackBar.color"
        bottom
        right
        :timeout  ="6000"
      >
        {{ snackBar.message }}
      </v-snackbar>
    </v-container>
  </v-app>
</template>

<script>
import { functions } from '@/plugins/firebase'

export default {
  data: () => ({
    contactForm: {
      name: '',
      contents: '',
      email: '',
      loading: false
    },
    contactFormValidation: {
      valid: false,
      nameRules:      [v => !!v || '名前は必須項目です'],
      emailRules:     [v => !!v || 'メールアドレスは必須項目です'],
      contentsRules:  [v => !!v || '内容は必須項目です'],
    },
    snackBar: {
      show: false,
      color: '',
      message: ''
    }
  }),
  methods: {
    sendMail: function () {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true
        const mailer = functions.httpsCallable('sendMail')
        mailer(this.contactForm)
          .then(() => {
            this.formReset()
            this.showSnackBar(
              'success',
              'お問い合わせありがとうございます。送信完了しました'
            )
          })
          .finally(() => {
            this.contactForm.loading = false
          })
      }
    },
    showSnackBar: function (color, message) {
      this.snackBar.message = message
      this.snackBar.color   = color
      this.snackBar.show    = true
    },
    formReset: function () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
.footer {
  margin-bottom: 100px;
}
</style>


<style scoped lang="scss">
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