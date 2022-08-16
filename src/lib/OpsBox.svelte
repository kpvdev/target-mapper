<script>
  import { draggable } from '@neodrag/svelte';
</script>

<!-- This is an 'OpsBox' component-->
<div use:draggable={{bounds: { top: 80, bottom: 15, left: 20, right: 15 }, grid: [10,10]}}
  class="
    h-52
    w-52
    p-2
    bg-primary
    text-center text-color3
    rounded
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
      rounded
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
  <span>Ops Box</span>

  <!-- Connection wrapper -->

  <div id="add-connection-container" class="flex flex-col">
    <!-- Add connection button -->
    <button class="flex justify-end p-1" onclick="alert()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-5
          w-5
          transition
          ease-in-out
          hover:scale-[1.1] hover:stroke-blue-500
          stroke-green-500
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>

    <!-- Add connection button -->
    <button class="flex justify-end p-1" onclick="alert()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-5
          w-5
          transition
          ease-in-out
          hover:scale-[1.1] hover:stroke-blue-500
          stroke-green-500
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
</div>
