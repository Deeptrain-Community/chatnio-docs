<script>
export default {
  props: ['title', 'href']
}
</script>

<template>
  <a class="project" :href="href">
    <span class="title">{{ title }}</span>
    <svg class="right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </a>
</template>

<style scoped>
.project {
  display: flex;
  flex-direction: row;
  padding: 1.25rem;
  border: 1px solid var(--vp-c-border);
  align-items: center;
  border-radius: 0.5rem;
  width: 100%;
  margin: 1rem 0;
  text-decoration: none;
  font-weight: normal;
  color: var(--vp-c-text-1);
  transition: 0.25s;
}

.project:hover {
  border-color: var(--vp-c-blue-1-border);
}

.project .icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--vp-c-text-1);
  fill: currentColor;
  margin-right: 0.75rem;
}

.project .right {
  width: 1rem;
  height: 1rem;
  color: var(--vp-c-text-2);
}

.project:hover .right {
  color: var(--vp-c-blue-1);
}

.title {
  font-size: 1.05rem;
  flex: 1;
  color: var(--vp-c-text-1);
}
</style>
