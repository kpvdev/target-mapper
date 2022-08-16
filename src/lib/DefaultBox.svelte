<script>
  import { draggable } from '@neodrag/svelte';

  const boxConfig = {
    type: ['OpBox', 'Redirector', 'Target'],
    hostname: String,
    ipaddress: String,
    subnetmask: String,
  }

//  function setHostame(e) {
//    boxConfig.hostname = e;
//  }


</script>

<!-- Main box widget -->
<div use:draggable={{grid: [10,10]}} class="z-10 m-5">
  <div
    class="
      h-52
      w-52
      ring-1 ring-inset
      m-1
      text-center text-color3
      bg-primary
      drop-shadow-xl
      rounded
      p-2
    "
  >
    <!-- Corner OS identifier widget -->
    <div
      class="
        absolute
        h-14
        w-14
        -left-[15px]
        -top-[15px]
        drop-shadow-md
        ring-1 ring-inset ring-red-500
        m-1
        bg-[#444857]
        transition
        ease-in-out
        hover:scale-[1.1]
        rounded
        p-1
      "
    >
      <img
        src="https://raw.githubusercontent.com/kpvproctor/target-mapper-assets/main/img/windows-xp-resized.svg"
      />
    </div>

    <!-- Box Identifier -->
    <span>Target</span>
  </div>
</div>