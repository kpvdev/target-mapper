<script>
  import { draggable } from '@neodrag/svelte';
</script>

<!-- This is a 'Redirector' component-->
<div use:draggable={{bounds: { top: 80, bottom: 15, left: 20, right: 15 }, grid: [10,10]}}
  class="
    h-52
    w-52
    p-2
    bg-primary
    text-center text-color3
    rounded
    ring-1 ring-inset ring-orange-500
    drop-shadow-xl
  "
>
  <!-- Corner OS widget -->
  <div
    class="
      h-14
      w-14
      m-1
      p-1
      absolute
      -left-[15px]
      -top-[15px]
      bg-primary
      rounded
      ring-1 ring-inset ring-orange-500
      drop-shadow-xl
      transition
      ease-in-out
      hover:scale-[1.1]
    "
  >
    <a href="https://www.debian.org/doc/" target="_blank">
      <img
        src="https://raw.githubusercontent.com/kpvproctor/target-mapper-assets/main/img/debian-with-words.svg"
      />
    </a>
  </div>
  <span>Redirector</span>
</div>