<!-- Dropout.vue -->
<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>

<template>
  <Menu as="div" class="relative inline-block text-left rounded-2xl">
    <MenuButton class="px-4 py-2">
      Market making
    </MenuButton>

    <MenuItems
      class="absolute right-0 mt-2 w-56 origin-top-right bg-white/10 backdrop-blur rounded-2xl shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
    >
      <slot />
    </MenuItems>
  </Menu>
</template>
