<script>
  import { draggable } from '@neodrag/svelte';
</script>

<!-- Main box widget -->
<div use:draggable={{bounds: { top: 80, bottom: 20, left: 20, right: 20 }, grid: [10,10]}}
  class="
    h-52
    w-52
    m-1
    p-2
    bg-primary
    text-center text-color3
    rounded
    ring-1 ring-inset ring-red-500
    drop-shadow-xl
  "
>
  <!-- Corner OS identifier widget -->
  <div
    class="
      h-14
      w-14
      p-1
      absolute
      -left-[10px]
      -top-[10px]
      bg-primary
      rounded
      ring-1 ring-inset ring-red-500
      drop-shadow-xl
      transition
      ease-in-out
      hover:scale-[1.1]
    "
  >
    <img
      src="https://raw.githubusercontent.com/kpvproctor/target-mapper-assets/main/img/windows-xp-resized.svg"
    />
  </div>

  <!-- Box Identifier -->
  <span>Target</span>
</div>