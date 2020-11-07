<template>
  <v-app style="background-color: #F4F9E2;">
    <v-container class="footer">
      <v-layout justify-center>
        <h1 data-aos="fade-up" style="color: #436FB4;" class="font__m">
          Skills
        </h1>
      </v-layout>
      <Subtitle skill-category="Language" />
        <v-layout
          justify-center
          data-aos="fade-up"
          data-aos-delay="150"
          row wrap
        >
          <v-progress-circular
            v-for="(language, i) in languages"
            :key="i"
            rotate="-90"
            size="130"
            width="13"
            :value="language.value"
            color="success"
            class="font__s"
          >
            {{ language.name}}
          </v-progress-circular>
        </v-layout>
      <Subtitle skill-category="Framework" />
        <v-layout
          justify-center
          data-aos="fade-up"
          data-aos-delay="150"
          row wrap
        >
          <v-progress-circular
            v-for="(framework, i) in frameworks"
            :key="i"
            rotate="-90"
            size="130"
            width="13"
            :value="framework.value"
            color="success"
            class="font__s"
          >
            {{ framework.name }}
          </v-progress-circular>
        </v-layout>
      <Subtitle skill-category="AWS" />
        <v-layout
          justify-center
          data-aos="fade-up"
          data-aos-delay="150"
          row wrap
        >
          <v-progress-circular
            v-for="(aws, i) in awes"
            :key="i"
            rotate="-90"
            size="130"
            width="13"
            :value="aws.value"
            color="success"
            class="font__s"
          >
            {{ aws.name }}
          </v-progress-circular>
        </v-layout>
      <Subtitle skill-category="Devops" />
        <v-layout
          justify-center
          data-aos="fade-up"
          data-aos-delay="150"
          row wrap
        >
          <v-progress-circular
            v-for="(devops, i) in devopes"
            :key="i"
            rotate="-90"
            size="130"
            width="13"
            :value="devops.value"
            color="success"
            class="font__s"
          >
            {{ devops.name }}
          </v-progress-circular>
        </v-layout>
      <Subtitle skill-category="Cooking" />
        <v-layout
          justify-center
          data-aos="fade-up"
          data-aos-delay="150"
          row wrap
        >
          <v-progress-circular
            v-for="(cooking, i) in cookings"
            :key="i"
            rotate="-90"
            size="130"
            width="13"
            :value="cooking.value"
            color="success"
            class="font__s"
          >
            {{ cooking.name }}
          </v-progress-circular>
        </v-layout>
      <Subtitle skill-category="Active" />
        <v-layout
          justify-center
          data-aos="fade-up"
          data-aos-delay="150"
          row wrap
        >
          <v-progress-circular
            v-for="(active, i) in actives"
            :key="i"
            rotate="-90"
            size="130"
            width="13"
            :value="active.value"
            color="success"
            class="font__s"
          >
            {{ active.name }}
          </v-progress-circular>
        </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Subtitle from './Subtitle';

export default {
  components: {
    Subtitle
  },
  data: () => ({
    languages: [
      {
        name: 'HTML&CSS',
        start: '0',
        value: '70',
      },
      {
        name: 'SCSS',
        start: '0',
        value: '60',
      },
      {
        name: 'Ruby',
        start: '0',
        value: '70'
      },
      {
        name: 'JavaScript',
        start: '0',
        value: '60'
      },
    ],
    frameworks: [
      {
        name: 'Ruby on rails',
        start: '0',
        value: '70'
      },
      {
        name: 'Rspec',
        start: '0',
        value: '50'
      },
      {
        name: 'Webpacker',
        start: '0',
        value: '45'
      },
      {
        name: 'Vue.js',
        start: '0',
        value: '40'
      },
    ],
    awes: [
      {
        name: 'EC2',
        start: '0',
        value: '70'
      },
      {
        name: 'ECS, ECR',
        start: '0',
        value: '65'
      },
      {
        name: 'ALB, ELB',
        start: '0',
        value: '60'
      },
      {
        name: 'Codepipeline',
        start: '0',
        value: '60'
      },
      {
        name: 'Codebuild',
        start: '0',
        value: '60'
      },
    ],
    devopes: [
      {
        name: 'Docker',
        start: '0',
        value: '75'
      },
      {
        name: 'Git,Github',
        start: '0',
        value: '70'
      },
      {
        name: 'Circle CI',
        start: '0',
        value: '65'
      },
    ],
    cookings: [
      {
        name: 'spice curry',
        start: '0',
        value: '50'
      }
    ],
    actives: [
      {
        name: 'skateboard',
        start: '0',
        value: '100'
      },
      {
        name: 'yoga',
        start: '0',
        value: '30'
      },
    ]
  })
}
</script>

<style scoped>
.v-progress-circular{
  font-size: 1rem;
  margin: 1rem;
}
.bg{
  box-shadow: 0 15px 15px -7px #F2F2F2,
              0 -15px 15px -7px #F2F2F2;
}
.footer {
  margin-bottom: 100px;
}
.font__s {
  font-size: 1.8rem;
}
.font__m {
  font-size: 3.5rem;
}
</style>