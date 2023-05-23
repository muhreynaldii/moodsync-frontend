<template>
  <div class="features-container">
    <app-nav rootClassName="nav-root-class-name4"></app-nav>
    <bg-bawah rootClassName="bg-bawah-root-class-name11"></bg-bawah>
    <bg-atas rootClassName="bg-atas-root-class-name4"></bg-atas>
    <div class="features-main-content">
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-x2a8.svg"
        class="features-emotion"
      />
      <div class="features-container1">
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-sw6m.svg"
          class="features-texture"
        />
        <div class="features-headline">
          <span class="features-text HeadlineType65">Our Features</span>
          <div class="features-feature">
            <div class="features-feature-content">
              <img
                src="/playground_assets/featuresicon4982-jkr4.svg"
                alt="image"
                class="features-image"
              />
              <span class="features-text01">
                <span class="features-text02">Emotion Detection</span>
                <br />
              </span>
            </div>
            <div class="features-feature-content1">
              <img
                src="/playground_assets/featuresicon4982-jkr4.svg"
                alt="image"
                class="features-image1"
              />
              <span class="features-text04">
                <span class="features-text05">Emotion Icons atau Avatars</span>
                <br class="features-text06" />
              </span>
            </div>
            <div class="features-feature-content2">
              <img
                src="/playground_assets/featuresicon4982-jkr4.svg"
                alt="image"
                class="features-image2"
              />
              <span class="features-text07">
                <span class="features-text08">Emotion Analytics</span>
                <br class="features-text09" />
              </span>
            </div>
            <div class="features-feature-content3">
              <img
                src="/playground_assets/featuresicon4982-jkr4.svg"
                alt="image"
                class="features-image3"
              />
              <span class="features-text10">
                <span class="features-text11">Real-time Feedback</span>
                <br />
              </span>
            </div>
          </div>
          <div class="features-frame6">
            <nuxt-link to="/login" id="GetStarted" class="features-button button">
              <span class="features-text13">Lets Try!</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from '../components/nav'
import BgBawah from '../components/bg-bawah'
import BgAtas from '../components/bg-atas'

export default {
  name: 'Features',
  components: {
    AppNav,
    BgBawah,
    BgAtas,
  },
  head: {
    title: 'Features - exported project',
    meta: [
      {
        property: 'og:title',
        content: 'Features - exported project',
      },
    ],
  },
}
</script>

<style scoped>
.features-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.features-main-content {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 1600px;
  height: 1002px;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: center;
  flex-direction: column;
}
.features-emotion {
  top: 0px;
  right: 0px;
  width: 608px;
  height: 1002px;
  position: absolute;
}
.features-container1 {
  top: 276px;
  left: 70px;
  width: 787px;
  height: 387.5625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.features-texture {
  top: 0px;
  left: 0px;
  width: 158px;
  height: 110px;
  position: absolute;
}
.features-headline {
  gap: 26px;
  top: 40px;
  left: 46px;
  width: 741px;
  height: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
}
.features-text {
  color: var(--dl-color-default-black);
  width: 741px;
  height: auto;
  text-align: left;
  line-height: 120.00000476837158%;
  text-decoration: none;
}
.features-feature {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.features-feature-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.features-image {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.features-text01 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  font-size: 23px;
  text-align: left;
  font-family: Poppins;
  font-weight: 400px;
  line-height: 120.00000476837158%;
}
.features-feature-content1 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.features-image1 {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.features-text04 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  font-size: 23px;
  text-align: left;
  font-family: Poppins;
  font-weight: 400px;
  line-height: 120.00000476837158%;
}
.features-feature-content2 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.features-image2 {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.features-text07 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  font-size: 23px;
  text-align: left;
  font-family: Poppins;
  font-weight: 400px;
  line-height: 120.00000476837158%;
}
.features-feature-content3 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.features-image3 {
  width: 32px;
  height: 32px;
  object-fit: cover;
}
.features-text10 {
  color: var(--dl-color-gray-600);
  width: 741px;
  height: auto;
  font-size: 23px;
  text-align: left;
  font-family: Poppins;
  font-weight: 400px;
  line-height: 120.00000476837158%;
}
.features-frame6 {
  gap: 40px;
  display: flex;
  align-items: flex-start;
}
.features-button {
  gap: 8px;
  width: 203px;
  display: flex;
  padding: 14px 24px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  border-width: 0px;
  border-radius: 8px;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-primary-7002);
}
.features-text13 {
  color: var(--dl-color-default-white);
  height: auto;
  font-size: 16px;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .features-emotion {
    top: 0px;
    right: 69px;
  }
  .features-container1 {
    top: 318px;
    left: 134px;
    height: 360px;
  }
  .features-feature {
    gap: var(--dl-space-space-halfunit);
  }
  .features-feature-content {
    gap: var(--dl-space-space-halfunit);
    flex-direction: row;
  }
  .features-image {
    width: 32px;
    height: 32px;
  }
  .features-text01 {
    color: var(--dl-color-gray-600);
    font-size: 23px;
    font-style: normal;
    font-family: Poppins;
    line-height: 120%;
  }
  .features-text02 {
    font-weight: 500;
    line-height: 140%;
  }
  .features-feature-content1 {
    gap: var(--dl-space-space-halfunit);
    flex-direction: row;
  }
  .features-image1 {
    width: 32px;
    height: 32px;
  }
  .features-text05 {
    font-style: inherit;
    font-weight: 500;
  }
  .features-text06 {
    font-style: normal;
  }
  .features-feature-content2 {
    gap: var(--dl-space-space-halfunit);
    flex-direction: row;
  }
  .features-image2 {
    width: 32px;
    height: 32px;
  }
  .features-text08 {
    font-weight: 500;
  }
  .features-text09 {
    font-style: normal;
  }
  .features-feature-content3 {
    gap: var(--dl-space-space-halfunit);
    flex-direction: row;
  }
  .features-image3 {
    width: 32px;
    height: 32px;
  }
  .features-text10 {
    color: var(--dl-color-gray-600);
    font-size: 23px;
    font-family: Poppins;
    line-height: 120%;
  }
  .features-text11 {
    font-style: normal;
    font-weight: 500;
  }
  .features-frame6 {
    align-self: flex-start;
  }
  .features-text13 {
    color: var(--dl-color-default-white);
    font-size: 16px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none;
  }
}
@media(max-width: 1200px) {
  .features-emotion {
    display: none;
  }
  .features-container1 {
    left: 192px;
    margin: auto;
  }
}
</style>
