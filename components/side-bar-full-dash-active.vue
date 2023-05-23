<template>
  <aside
    class="side-bar-full-dash-active-side-bar-full"
    v-bind:class="rootClassName"
  >
    <div class="side-bar-full-dash-active-side-bar">
      <div class="side-bar-full-dash-active-dashboard">
        <img
          :alt="chartpie_alt"
          :src="chartpie_src"
          class="side-bar-full-dash-active-chartpie"
        />
      </div>
      <nuxt-link to="/vicon-started" class="side-bar-full-dash-active-navlink">
        <div class="side-bar-full-dash-active-conference">
          <img
            :alt="cash_alt"
            :src="cash_src"
            class="side-bar-full-dash-active-cash"
          />
        </div>
      </nuxt-link>
      <nuxt-link
        to="/daftar-mahasiswa"
        class="side-bar-full-dash-active-navlink1"
      >
        <div class="side-bar-full-dash-active-class">
          <img
            :alt="usergroup_alt"
            :src="usergroup_src"
            class="side-bar-full-dash-active-usergroup"
          />
        </div>
      </nuxt-link>
      <div class="side-bar-full-dash-active-notif">
        <img
          :alt="bell_alt"
          :src="bell_src"
          class="side-bar-full-dash-active-bell"
        />
      </div>
      <div class="side-bar-full-dash-active-chat">
        <img
          :alt="chat_alt"
          :src="chat_src"
          class="side-bar-full-dash-active-chat1"
        />
      </div>
    </div>
    <img
      :alt="cog_alt"
      :src="cog_src"
      loading="lazy"
      class="side-bar-full-dash-active-cog"
    />
  </aside>
</template>

<script>
export default {
  name: 'SideBarFullDashActive',
  props: {
    chat_alt: {
      type: String,
      default: 'chat4162',
    },
    cash_src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3215bc06-55da-4b4a-85b8-b3b65455a780/486ab526-6c9f-49ba-bb05-cef9f30a1cf6?org_if_sml=11187',
    },
    usergroup_src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3215bc06-55da-4b4a-85b8-b3b65455a780/1c56e439-5899-47e7-b818-8279e710b8c2?org_if_sml=11958',
    },
    cash_alt: {
      type: String,
      default: 'cash4162',
    },
    usergroup_alt: {
      type: String,
      default: 'usergroup4162',
    },
    bell_alt: {
      type: String,
      default: 'bell4162',
    },
    chat_src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3215bc06-55da-4b4a-85b8-b3b65455a780/36d4a48b-67ca-4ebd-a288-b2badfc5d8e1?org_if_sml=1607',
    },
    chartpie_src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3215bc06-55da-4b4a-85b8-b3b65455a780/40a29c25-8838-4f77-955e-ab463cbd757f?org_if_sml=1568',
    },
    cog_alt: {
      type: String,
      default: 'cog4162',
    },
    rootClassName: String,
    cog_src: {
      type: String,
      default: '/playground_assets/cog4162-9gch.svg',
    },
    chartpie_alt: {
      type: String,
      default: 'chartpie4162',
    },
    bell_src: {
      type: String,
      default: '/playground_assets/bell4162-7mh8.svg',
    },
  },
}
</script>

<style scoped>
.side-bar-full-dash-active-side-bar-full {
  gap: 382px;
  width: 50px;
  height: 613px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.side-bar-full-dash-active-side-bar {
  gap: 21px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.side-bar-full-dash-active-dashboard {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  background-color: rgba(225, 239, 254, 1);
}
.side-bar-full-dash-active-chartpie {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.side-bar-full-dash-active-navlink {
  display: contents;
}
.side-bar-full-dash-active-conference {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
}
.side-bar-full-dash-active-cash {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.side-bar-full-dash-active-navlink1 {
  display: contents;
}
.side-bar-full-dash-active-class {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 1);
}
.side-bar-full-dash-active-usergroup {
  top: 9px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.side-bar-full-dash-active-notif {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  background-color: rgba(255, 255, 255, 1);
}
.side-bar-full-dash-active-bell {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.side-bar-full-dash-active-chat {
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: var(--dl-radius-radius-round);
  background-color: rgba(255, 255, 255, 1);
}
.side-bar-full-dash-active-chat1 {
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
}
.side-bar-full-dash-active-cog {
  left: 10px;
  width: 30px;
  bottom: 0px;
  height: 30px;
  position: absolute;
}
.side-bar-full-dash-active-root-class-name {
  top: 238px;
  left: 28px;
  position: absolute;
}
.side-bar-full-dash-active-root-class-name1 {
  top: 238px;
  left: 28px;
  position: absolute;
}
</style>
