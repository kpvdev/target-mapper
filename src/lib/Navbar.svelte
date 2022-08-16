<!-- Navbar component-->

<div
  class="
    p-1
    w-full
    flex flex-row
    fixed
    bg-secondary
    drop-shadow-xl
  "
>
  <div
    class="
      navbar-start
    "
  >
    <div
      class="
        dropdown
      "
    >
      <label tabindex="0" class="
                            btn 
                            btn-ghost
                          "
                          >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul class="
            w-52
            mt-2
            p-2
            bg-secondary
            rounded
            drop-shadow-xl
            menu
            menu-compact
            dropdown-content
            " tabindex="0">
        <li><a>Homepage</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div class="leading-[3rem] navbar-center">
    <label>Target Mapper v 1.0.0</label>
  </div>
  <div class="flex navbar-end">
    <button class="btn btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </button>
    <button class="btn btn-ghost">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>