<script>
  import { draggable } from '@neodrag/svelte';
</script>

<!-- This is an 'Router' component-->
<div use:draggable={{bounds: document.getElementById('target-map'), grid: [10,10]}}
  class="
    h-[200px]
    w-[200px]
    m-2
    p-2
    relative
    bg-primary
    text-center text-color3
    rounded-full
    ring-1 ring-inset ring-blue-500
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
      rounded-full
      ring-1 ring-inset ring-blue-500
      drop-shadow-xl
      transition
      ease-in-out
      hover:scale-[1.1]
    "
  >
    <a href="https://www.kali.org/docs/" target="_blank">
      <img
        src="https://raw.githubusercontent.com/kpvproctor/target-mapper-assets/main/img/linux-kali.svg"
      />
    </a>
  </div>

  <!-- Box Identifier -->
  <span class="
          leading-[12rem]
          ">Router</span>

</div>
