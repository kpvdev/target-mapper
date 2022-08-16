<script>
  import { draggable } from '@neodrag/svelte';
  import Counter from './lib/Counter.svelte'
  import Navbar from './lib/Navbar.svelte'
  import OpsBox from './lib/OpsBox.svelte'
  import Target from './lib/Target.svelte'
  import Redirector from './lib/Redirector.svelte'
  import Container from './lib/Container.svelte'
  import AddBox from './lib/AddBox.svelte'
  import Router from './lib/Router.svelte'

  let renderedComponents = [];

</script>

<Navbar />

<div id="target-map"
  class="
    h-screen
    p-5
    flex
  "
>

<OpsBox />
<Redirector />
<Target />
<Target />
<Router />

</div>