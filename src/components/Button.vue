<script setup>
import { ref } from 'vue';

</script>

<template>
    <button class="button-50" role="button">
        <slot></slot>
    </button>
</template>

<style>
.button-50 {
  appearance: button;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  padding: 8px 50px;
  overflow: visible;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.button-50:focus, .button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 1px 1px 0 0, #ccc 1px 1px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}
</style>

