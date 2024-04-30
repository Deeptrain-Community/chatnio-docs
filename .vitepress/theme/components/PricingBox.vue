<template>
  <div class="pro-box">
      <div class="pricing">
        {{ price }}
      </div>
      <div class="feature-wrapper">
        <div class="feature-column" v-for="feature in features" :key="feature">
          <svg height="24" class="check-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"></path><path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" stroke="var(--background)"></path></svg>

          {{ feature }}
        </div>
      </div>
    <div class="pricing-button" @click="handleClick">
      {{ custom ? '联系我们' : '购买授权' }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingBox",
  props: ['price', 'title', 'features', 'custom'],
  methods: {
    handleClick() {
      const contact = document.getElementById('contact');
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.pro-box {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  padding: 2rem 1.25rem 1rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  text-align: center;
  width: 100%;
  height: 100%;
  background: var(--background);
  color: var(--foreground);
  transition: 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 10px 0 var(--vp-shadow-1);
  position: relative;
  overflow: hidden;
}

.pro-box:nth-child(2) {
  border: 1px solid var(--border-hover);
}

.pro-box:nth-child(2):before {
  content: "推荐";
  position: absolute;
  top: 0;
  right: 0;
  background: var(--foreground);
  color: var(--background);
  padding: 0.25rem 0.5rem;
  border-radius: 0 0 0 0.5rem;
}

.pro-box:hover {
  border: 1px solid var(--border-hover);
  scale: 1.05;
}

.pro-box .pricing {
  font-weight: bold;
  font-size: 1.5rem;
}

.pro-box .pricing::before {
  content: "￥";
  font-size: 0.85rem;
  font-weight: normal;
}

.pro-box .feature-wrapper {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}

.pro-box .feature-column {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.check-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.25rem;
  fill: var(--foreground) !important;
}

.pricing-button {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--foreground);
  color: var(--background);
  font-size: 0.9rem;
  transition: 0.3s;
}

.pricing-button:hover {
  background: var(--foreground-hover);
}
</style>
